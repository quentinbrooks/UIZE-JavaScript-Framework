/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.ProgressBar.VisualSampler Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013-2015 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Widgets.ProgressBar.VisualSampler= class implements a visual sampler widget for the =Uize.Widgets.ProgressBar.Widget= class.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widgets.ProgressBar.VisualSampler',
	superclass:'Uize.Widgets.VisualSampler.Widget',
	required:'Uize.Widgets.ProgressBar.Widget',
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			omegastructor:function () {
				this.addStateCombinationSamples ({
					statusText:'<%. percentComplete %>%',
					value:[0,7,15,23,30],
					size:'small',
					maxValue:30
				});
			},

			set:{
				samplerWidgetClass:Uize.Widgets.ProgressBar.Widget
			}
		});
	}
});

