/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : UizeSite.WidgetToGoPage.Calendar
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013-2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/*?
	Introduction
		A subclass of =UizeSite.WidgetToGoPage= that defines the page widget class for the calendar widget-to-go.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'UizeSite.WidgetToGoPage.Calendar',
	required:[
		'Uize.Widget.Calendar',
		'Uize.Templates.Calendar'
	],
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			set:{
				widgetToGoClass:'Uize.Widget.Calendar',
				widgetToGoHtml:'Uize.Templates.Calendar'
			}
		});
	}
});

