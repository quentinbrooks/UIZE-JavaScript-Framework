/*
	UIZE JAVASCRIPT FRAMEWORK 2011-10-31

	http://www.uize.com/reference/Uize.Templates.SevenSegmentDisplayDimsCss.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.SevenSegmentDisplayDimsCss',builder:function(){var _a=function(){};_a.process=function(input){var output=[];var _b=input.segmentThickness,_c=input.displayWidth,_d=input.displayHeight,_e=input.segmentGap,_f=_b/2,_g=_b+_e;
output.push('\r\n.sevenSeg {\r\n	width:',_c,'px;\r\n	height:',_d,'px;\r\n}\r\n.sevenSegSegmentEnd {\r\n	border-width:',_f,'px;\r\n}\r\n.sevenSegHorzSegment {\r\n	height:',_b,'px;\r\n}\r\n.sevenSegHorzSegmentMiddle {\r\n	top:',_d/2-_f,'px;\r\n}\r\n.sevenSegSegmentLeftEnd {\r\n	left:',_e,'px;\r\n}\r\n.sevenSegHorzSegment .sevenSegSegmentBar {\r\n	left:',_g,'px;\r\n	right:',_g,'px;\r\n}\r\n.sevenSegSegmentRightEnd {\r\n	right:',_e,'px;\r\n}\r\n.sevenSegVertSegment {\r\n	width:',_b,'px;\r\n}\r\n.sevenSegSegmentTopEnd {\r\n	top:',_e,'px;\r\n}\r\n.sevenSegVertSegment .sevenSegSegmentBar {\r\n	top:',_g,'px;\r\n	bottom:',_g,'px;\r\n}\r\n.sevenSegSegmentBottomEnd {\r\n	bottom:',_e,'px;\r\n}\r\n.sevenSegVertSegmentTop .sevenSegSegmentBottomEnd {\r\n	bottom:',_e-_f,'px;\r\n}\r\n.sevenSegVertSegmentTop  .sevenSegSegmentBar {\r\n	bottom:',_e+_f,'px;\r\n}\r\n.sevenSegVertSegmentBottom .sevenSegSegmentTopEnd {\r\n	top:',_e-_f,'px;\r\n}\r\n.sevenSegVertSegmentBottom  .sevenSegSegmentBar {\r\n	top:',_e+_f,'px;\r\n}\r\n\r\n');
return output.join('');};_a.input={segmentThickness:'integer',displayWidth:'integer',displayHeight:'integer',segmentGap:'integer'};return _a;}});