/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-17

	http://www.uize.com/reference/Uize.Widget.InlinePicker.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.InlinePicker',superclass:'Uize.Widget.FormElement',required:'Uize.Util.Coupler',builder:function(d_a){var d_b=d_a.subclass(null,function(){var d_c=this,d_d=d_c.addChild('value',d_c.d_e,d_c.get((d_c.d_f||[]).concat('value'))),d_g=d_c.addChild('valueDisplay',d_c.d_h||Uize.Widget.Button.ValueDisplay,d_c.d_i);Uize.Util.Coupler({instances:[d_c,d_d],properties:['value','valueDetails','tentativeValue','tentativeValueDetails']});function d_j(d_k,d_l){d_g.set(d_k,d_c.get(d_l||d_k))}d_c.wire({'Changed.value':function(){d_j('value')},'Changed.valueDetails':function(){d_j('valueDetails')},'Changed.tentativeValue':function(){d_c.d_m&&d_j('value','tentativeValue')},'Changed.tentativeValueDetails':function(){d_c.d_m&&d_j('valueDetails','tentativeValueDetails')}});d_j('value');d_j('valueDetails');});d_b.prototype.updateUi=function(){var d_c=this;if(d_c.isWired){d_c.children.value.updateUi();d_a.prototype.updateUi.call(d_c);}};d_b.registerProperties({d_f:{name:'pipedProperties',
onChange:function(){var d_c=this,d_n=d_c.d_n,d_f=d_c.d_f,d_o=d_c.children;function d_p(d_k){return'Changed.'+d_k}function d_q(d_r){var d_s=d_r.name,d_k=d_s.substr(d_s.indexOf('.')+1),d_d=d_o.value;d_d&&d_d.set(d_k,d_c.get(d_k));}Uize.forEach(d_n,function(d_t){d_c.unwire(d_p(d_t),d_q);});Uize.forEach(d_f,function(d_t){d_c.wire(d_p(d_t),d_q);});d_c.d_n=d_c.d_f;}},d_m:{name:'syncTentativeValue',value:true},d_u:'tentativeValueDetails',d_v:{name:'valueDetails',onChange:function(){this.set({d_u:this.d_v})}},d_h:'valueDisplayWidgetClass',d_i:'valueDisplayWidgetProperties',d_w:'valueFormatter',d_e:'valueWidgetClass'});return d_b;}});