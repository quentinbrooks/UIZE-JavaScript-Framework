/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-17

	http://www.uize.com/reference/Uize.Widget.Picker.Palette.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Picker.Palette',required:'Uize.Node',builder:function(e_a){var e_b=Uize.Node;var e_c=e_a.subclass(null,function(){var e_d=this,e_e=e_d.children.selector;e_d.wire('Changed.valueDetails',function(){e_d.set({e_f:e_d.get('valueDetails')});e_d.e_g();});e_d.e_h=0;}),e_i=e_c.prototype;e_i.e_g=function(){var e_d=this;if(e_d.isWired){var e_j=e_d.children.selector.getNode('valueDisplayShell'),e_k=e_b.getDimensions(e_j).width,e_l=parseInt(e_d.getNodeStyle(e_j,'maxWidth')),e_h=e_d.e_h;if(e_h&&e_k<e_h)e_d.setNodeStyle(e_j,{minWidth:e_l?Math.min(e_h,e_l):e_h});else if(e_k)e_d.e_h=e_k;}};e_i.getDialogWidgetProperties=function(){var e_m=this.children.selector.getNode()||this.getNode('input'),e_n;return{offsetX:'adjacent',offsetY:'adjacent',minWidth:e_m?Uize.Node.getDimensions(e_m).width:e_n};};e_i.handleDialogSubmit=function(e_o){var e_d=this,e_n;function e_p(e_q){var e_r=e_o[e_q];return e_r!==e_n?Uize.pairUp(e_q,e_r):e_n}e_d.set(Uize.copyInto({},e_p('tentativeValueDetails'),
e_p('tentativeValue')));e_a.prototype.handleDialogSubmit.call(e_d,e_o);};e_i.updateUi=function(){var e_d=this;if(e_d.isWired){e_d.e_g();e_a.prototype.updateUi.call(e_d);}};e_c.registerProperties({e_s:{name:'syncTentativeValue',value:true},e_f:{name:'tentativeValueDetails',onChange:[function(){var e_d=this;e_d.e_s&&e_d.children.selector.set({valueDetails:e_d.e_f});},e_i.e_g]}});return e_c;}});