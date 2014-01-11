/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Build.RunUnitTest Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2012-2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 1
	codeCompleteness: 100
	docCompleteness: 2
*/

/*?
	Introduction
		The =Uize.Build.RunUnitTest= module provides a method for testing a specified JavaScript module.

		*DEVELOPERS:* `Chris van Rensburg`

		EXAMPLE
		....................................................................
		node build.js Uize.Build.RunUnitTest testModule=Uize.Test.Uize.Class
		....................................................................
*/

Uize.module ({
	name:'Uize.Build.RunUnitTest',
	required:'Uize.Build.Util',
	builder:function () {
		'use strict';

		return Uize.package ({
			perform:function (_params) {
				Uize.Build.Util.runUnitTests (_params.testModule,_params.silent == 'true');
			}
		});
	}
});

