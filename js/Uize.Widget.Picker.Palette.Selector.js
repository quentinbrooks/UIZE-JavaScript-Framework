/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-17

	http://www.uize.com/reference/Uize.Widget.Picker.Palette.Selector.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Picker.Palette.Selector',required:'Uize.Widget.Button.ValueDisplay.Selector',builder:function(f_a){var f_b=f_a.subclass(null,function(){var f_c=this;function f_d(){var f_e=f_c.getValueObject();f_c.set({valueDetails:f_e?f_e.valueDetails:null});}f_c.wire('Changed.value',f_d);f_d();}),f_f=f_b.prototype;f_f.getValueObject=function(f_g){var f_h;return Uize.findRecord(this.f_i,{name:f_g==f_h?this+'':f_g});};f_f.handleDialogSubmit=function(f_j){var f_c=this,f_h;function f_k(f_l){var f_m=f_j[f_l];return f_m!==f_h?Uize.pairUp(f_l,f_m):f_h}f_c.set(Uize.copyInto({},f_k('valueNo'),f_k('tentativeValueNo')));f_a.prototype.handleDialogSubmit.call(f_c,f_j);};f_b.registerProperties({f_n:{name:'tentativeValueNo',value:-1},f_o:{name:'valueNo',value:-1},f_i:{name:'values',value:[]}});f_b.set({pipedProperties:['values','valueNo','tentativeValueNo'],selectorButtonWidgetClass:Uize.Widget.Button.ValueDisplay.Selector,dialogWidgetClass:'Uize.Widget.Dialog.Picker.Palette.Selector'});return f_b;}});