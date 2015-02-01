/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Loc.Strings.PluralUtils Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2015 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 1
	codeCompleteness: 100
	docCompleteness: 5
*/

/*?
	Introduction
		The =Uize.Loc.Strings.PluralUtils= module provides utility methods for working with resource strings objects with plurals groups.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Loc.Strings.PluralUtils',
	builder:function () {
		'use strict';

		var
			/*** General Variables ***/
				// NOTE: move this data into a generated data module, under Uize.Loc
					_pluralClasses = ['zero','one','two','few','many','other'],
					_pluralsForLanguages = {
						de:['one','other'],
						en:['one','other'],
						fr:['one','other'],
						ja:['other'],
						nl:['one','other'],
						ru:['one','few','many','other'],
						zh:['other']
					}
		;

		/*** Utility Functions ***/
			function _processPluralStrings (_strings,_processor) {
				function _processStringsNode (_node) {
					(
						typeof _node == 'object' && _node &&
						_node.hasOwnProperty ('one') && typeof _node.one == 'string' &&
						_node.hasOwnProperty ('other') && typeof _node.other == 'string'
					)
						? _processor (_node)
						: Uize.forEach (_node,_processStringsNode)
					;
				}
				_processStringsNode (_strings);
			}

		return Uize.package ({
			normalizePluralStringsForPrimaryLanguage:function (_primaryLanguageResources) {
				/* NOTE:
					For the primary language (assuming a regional flavor of English), if a node in a resource file has "one" and "other" properties whose values are type string, then the node is considered a node containing plural forms, and the values for the plural classes that English does not support are initialized to the value of the "other" property. This results in translations for those plural classes for other languages to be based on the value of the "other" plural class.
				*/
				Uize.forEach (
					_primaryLanguageResources,
					function (_resourceFileStrings) {
						_processPluralStrings (
							_resourceFileStrings,
							function (_plurals) {
								_plurals.zero = _plurals.two = _plurals.few = _plurals.many = _plurals.other;
							}
						);
					}
				);
			},

			normalizePluralStringsForTranslatableLanguage:function (_languageResources,_language) {
				/* NOTE:
					For each translatable language, the values for the plural classes that are not supported by the language are always set to the dummty value "---". This prevents them from being exported in translation jobs. If they are ever exported using the "all" filter for the exportJobs method, the dummy values do not contain translatable text and will be ignored / unaltered by translators.
				*/
				var _pluralsForLanguageLookup = Uize.lookup (_pluralsForLanguages [_language.split ('-') [0]]);
				Uize.forEach (
					_languageResources,
					function (_resourceFileStrings) {
						_processPluralStrings (
							_resourceFileStrings,
							function (_plurals) {
								Uize.forEach (
									_pluralClasses,
									function (_pluralClass) {
										if (!_pluralsForLanguageLookup.hasOwnProperty (_pluralClass))
											_plurals [_pluralClass] = '---'
										;
									}
								);
							}
						);
					}
				);
			},

			removeUnsupportedPluralsForTranslatableLanguage:function (_languageResources,_language) {
				var _pluralsForLanguageLookup = Uize.lookup (_pluralsForLanguages [_language.split ('-') [0]]);

				Uize.forEach (
					_languageResources,
					function (_resourceFileStrings) {
						_processPluralStrings (
							_resourceFileStrings,
							function (_plurals) {
								Uize.forEach (
									_pluralClasses,
									function (_pluralClass) {
										if (!_pluralsForLanguageLookup.hasOwnProperty (_pluralClass))
											delete _plurals [_pluralClass]
										;
									}
								);
							}
						);
					}
				);
			}
		});
	}
});
