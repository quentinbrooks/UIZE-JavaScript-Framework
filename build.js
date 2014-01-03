/*
	This script is designed to be run using either NodeJS or WSH (Windows Script Host), and is used to run build script modules. This script takes care of some common bootstrapping for these build script modules, such as setting up the service adapters, parsing out the named parameters for the build script module, and doing the bootstrapping so that modules required by build script modules are loaded correctly. This leaves the build script modules to only have to deal with implementing their build processes.

	USAGES:

	Using NodeJS...

	node build.js Uize.Build.SomeBuildScript
	node build.js Uize.Build.SomeBuildScript p1Name=p1Value p2Name=p2Value

	Using WSH (Windows Script Host)...

	wscript build.js Uize.Build.SomeBuildScript
	wscript build.js Uize.Build.SomeBuildScript p1Name=p1Value p2Name=p2Value

	NOTE:

	The working directory for running this script in node should be the UIZE root directory.
*/

function _eval (_toEval) {
	return eval (_toEval);
}

(function () {
	var _isWsh = typeof ActiveXObject != 'undefined';

	/*** get the command line args, excluding the first two ***/
		var _args;
		if (_isWsh) {
			_args = [];
			for (
				var _wshArgNo = -1, _wshArgs = WScript.Arguments, _wshArgsLength = _wshArgs.length;
				++_wshArgNo < _wshArgsLength;
			) {
				_args.push (_wshArgs (_wshArgNo));
			}
		} else {
			_args = process.argv.slice (2);
		}

	/*** determine build module name (if this script is being used in that way) ***/
		var
			_buildModuleName,
			_thisScriptName = 'build.js',
			_scriptFullName = _isWsh ? WScript.ScriptFullName : process.argv [1]
		;
		if (_scriptFullName.slice (_scriptFullName.length - _thisScriptName.length) == _thisScriptName) {
			_buildModuleName = _args [0];
			_args = _args.slice (1);
		}

	/*** parse out named arguments ***/
		var _params = {};
		for (var _argNo = -1, _arg, _delimPos; ++_argNo < _args.length;) {
			_delimPos = (_arg = _args [_argNo]).indexOf ('=');
			if (_delimPos > -1)
				_params [_arg.slice (0,_delimPos)] = _arg.slice (_delimPos + 1)
			;
		}

	function _build (_buildModuleName,_paramOverrides) {
		function _copyInto (_target,_source) {
			for (var _key in _source)
				_target [_key] = _source [_key]
			;
			return _target;
		}
		_copyInto (_params,_paramOverrides);
		var
			_pathToRoot = _params.pathToRoot || '',
			_useSource = _params.useSource + '' != 'false'
		;

		/*** minimal file system functions ***/
			var
				_fileSystem,
				_readFile,
				_fileExists,
				_folderExists
			;
			if (_isWsh) {
				_fileSystem = new ActiveXObject ('Scripting.FileSystemObject');
				_fileExists = function (_path) {
					return _fileSystem.FileExists (_path);
				};
				_folderExists = function (_path) {
					return _fileSystem.FolderExists (_path);
				};
				_readFile = function (_filePath) {
					var
						_file = _fileSystem.OpenTextFile (_pathToRoot + _filePath,1),
						_fileText = _file.ReadAll ()
					;
					_file.Close ();
					return _fileText;
				};
			} else {
				_fileSystem = require ('fs');
				var _pathExists = function (_path,_mustBeFolder) {
					try {
						var _stat = _fileSystem.statSync (_path);
						return _mustBeFolder == undefined || !!(_stat.mode & (1 << 14)) == _mustBeFolder;
					} catch (_error) {
						return false;
					}
				};
				_fileExists = function (_path) {
					return _pathExists (_path);
				};
				_folderExists = function (_path) {
					return _pathExists (_path,true);
				};
				_readFile = function (_filePath) {
					return _fileSystem.readFileSync (_pathToRoot + _filePath,'utf8');
				};
			}

		/*** miscellaneous global JavaScript functions (to mirror what's available in the browser context) ***/
			if (_isWsh) {
				/*** implementation for console.log (absent in the WSH environment) ***/
					if (typeof console == 'undefined')
						console = {}
					;
					if (typeof console.log != 'function')
						console.log = function () {
							WScript.Echo ([].slice.call (arguments).join (', '))
						}
					;

				/*** implementations for alert, confirm, and timeouts (absent in the WSH environment) ***/
					function _popup (_message,_title,_buttonsAndIconMask) {
						return (
							(_popup._wscriptShell || (_popup._wscriptShell = new ActiveXObject ('wscript.shell'))).Popup (
								_message + '',
								0, // seconds to wait before auto-dismissing (0 = stay open forever)
								_title,
								_buttonsAndIconMask
							)
						);
					}

					alert = function (_message) {
						_popup (_message,'Windows Script Host Alert',0 | 48 /* 0 = ok button only, 48 = warning icon */);
					};

					confirm = function (_message) {
						return _popup (
							_message,
							'Please Confirm...',
							1 | 32 /* 1 = ok and cancel, 32 = question mark icon */
						) == 1;
					};

					var
						_timeouts = [],
						_timeoutsAdded = 0,
						_timeoutByLookup = {}
					;
					setTimeout = function (_function,_timeFromNow) {
						_timeouts.push (
							_timeoutByLookup [_timeoutsAdded] = {
								func:_function,
								when:+new Date + Math.max (_timeFromNow || 0,0)
							}
						);
						return _timeoutsAdded++;
					};

					clearTimeout = function (_timeoutId) {
						var _timeout = _timeoutByLookup [_timeoutId];
						if (_timeout) {
							for (
								var _timeoutNo = -1, _timeoutsLength = _timeouts.length;
								++_timeoutNo < _timeoutsLength;
							) {
								if (_timeouts [_timeoutNo] == _timeout) {
									_timeouts.splice (_timeoutNo,1);
									break;
								}
							}
						}
					};

					/* TO DO:
						for prompt, try to figure out how to use VBSCRIPT's InputBox built-in function
							http://wsh2.uw.hu/ch08c.html

						Function WSHInputBox(Message, Title, Value)
							WSHInputBox = InputBox(Message, Title, Value)
						End Function
					*/
			} else {
				alert = function (_message) {
					console.log (_message);
				};
			}

		/*** load build environment properties ***/
			var _env = (function () {return this}) ().env = eval ('(' + _readFile ('uize-config.json') + ')');
			_params = _copyInto (
				_copyInto (
					_copyInto ({},_env),
					{logFilePath:'logs/' + _buildModuleName + '.log'}
				),
				_params
			);
			if (_params.staleBefore == 'now')
				_params.staleBefore = +new Date
			;

		/*** load Uize base class and set up with module loader ***/
			function _modulePathResolver (_moduleName) {
				return _moduleName;
			}
			function _moduleLoader (_moduleName,_callback) {
				var _moduleText = '';
				if (_params.modulesToStub && _params.modulesToStub.test (_moduleName)) {
					_moduleText = 'Uize.module ({name:\'' + _moduleName + '\'})';
				} else {
					var
						_moduleFilePath = '/' + _modulePathResolver (_moduleName) + '.js',
						_modulesFolder = _params.modulesFolder,
						_moduleSourcePath =
							(
								/^Uize(\.|$)/.test (_moduleName)
									? env.uizePath + '/' + (_params.uizeModulesFolder || 'js')
									: _params.sourcePath + '/' + _modulesFolder
							) + _moduleFilePath,
						_moduleBuiltPath = _params.builtPath + '/' + _modulesFolder + _moduleFilePath,
						_modulePath = _useSource ? _moduleSourcePath : _moduleBuiltPath
					;
					if (_fileExists (_modulePath)) {
						_moduleText = _readFile (_modulePath);
					} else if (_fileExists (_modulePath + '.jst')) {
						Uize.require (
							'Uize.Template.Module',
							function (_Uize_Template_Module) {
								_moduleText = _Uize_Template_Module.buildTemplateModuleText (
									_moduleName,
									_readFile (_modulePath + '.jst')
								);
							}
						);
					} else if (_fileExists (_modulePath.replace (/\.js$/,'.csst'))) {
						_moduleText =
							'Uize.module ({\n' +
							'	name:\'' + _moduleName + '\',\n' +
							'	superclass:\'Uize.Node.CssModule\',\n' +
							'	builder:function (_superclass) {return _superclass.subclass ()}\n' +
							'});';
					} else if (_folderExists (_moduleSourcePath.replace (/\.js$/,''))) {
						_moduleText = 'Uize.module ({name:\'' + _moduleName + '\'});';
					} else {
						throw Error ('Module loader can\'t find module ' + _moduleName + ' at path ' + _modulePath);
					}
				}
				_callback (_moduleText);
			}
			_moduleLoader (
				'Uize',
				function (_uizeCode) {
					_eval (_uizeCode);
					if (!_isWsh)
						Uize.laxEval = _eval // this actually *needs* to be overridden for NodeJS context
					;
					_modulePathResolver = Uize.modulePathResolver;
					Uize.moduleLoader = _moduleLoader;
					Uize.addFolderOrgNamespaces (_params.folderOrgNamespaces || []);
				}
			);

		/*** services setup & run build module (if specified) ***/
			Uize.require (
				_params.servicesSetup || 'Uize.Build.ServicesSetup',
				function (_servicesSetup) {
					_servicesSetup.setup ();
					_buildModuleName &&
						Uize.require (
							_buildModuleName,
							function (_buildModule) {
								_buildModule.perform (_params);
								if (_isWsh) {
									while (_timeouts.length) {
										var
											_nextTimeoutNo,
											_minWhen = Infinity
										;
										for (
											var _timeoutNo = -1, _timeoutsLength = _timeouts.length;
											++_timeoutNo < _timeoutsLength;
										) {
											var _timeout = _timeouts [_timeoutNo];
											if (_timeout.when < _minWhen) {
												_minWhen = _timeout.when;
												_nextTimeoutNo = _timeoutNo;
											}
										}
										var
											_nextTimeout = _timeouts [_nextTimeoutNo],
											_sleepTime = _nextTimeout.when - new Date
										;
										_timeouts.splice (_nextTimeoutNo,1);
										if (_sleepTime > 0)
											WScript.Sleep (_sleepTime)
										;
										_nextTimeout.func ();
									}
								}
							}
						)
					;
				}
			);
	};

	/*** if this script is being run directly, then run the specified build process ***/
		_buildModuleName && _build (_buildModuleName);

	return _build;
}) ();

