/*
	UIZE JAVASCRIPT FRAMEWORK 2011-05-15

	http://www.uize.com/reference/Uize.Widget.ValueDisplay.Selector.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.ValueDisplay.Selector',required:'Uize.Node.Classes',builder:function(d_a){var d_b=d_a.subclass(null,function(){var d_c=this;function d_d(){d_c.d_d()}d_c.wire({'Changed.busyInherited':d_d,'Changed.enabledInherited':d_d,'Changed.valueDetails':function(){d_c.d_e()}});}),d_f=d_b.prototype;d_f.d_g=function(d_h){this.isWired&&this.setNodeProperties('input',d_h)};d_f.d_e=function(){var d_c=this,d_i=d_c.get('valueDetails');d_c.isWired&&d_i&&d_i.displayName!=null&&d_c.setNodeInnerHtml('displayName',d_i.displayName);};d_f.d_j=function(){var d_c=this;d_c.d_g({checked:d_c.d_k});Uize.Node.Classes.setState(d_c.getNode(),['',d_c.d_l,d_c.d_m],(d_c.d_k?2:d_c.d_n&&1)||0);};d_f.d_d=function(){var d_c=this,d_o=d_c.get('enabledInherited')&& !d_c.get('busyInherited');d_c.d_g({readOnly:!d_o,disabled:!d_o});};d_f.updateUi=function(){var d_c=this;if(d_c.isWired){d_c.d_e();d_c.d_j();d_c.d_d();d_a.prototype.updateUi.call(d_c);}};d_f.wireUi=function(){var d_c=this;if(!d_c.isWired){
var d_p=d_c.getNode('input');d_c.wireNode(d_p,'change',function(){d_c.set({selected:d_p.checked})});d_a.prototype.wireUi.call(d_c);}};d_b.registerProperties({d_m:'cssClassSelected',d_l:'cssClassTentativeSelected',d_k:{name:'selected',onChange:d_f.d_j,value:false},d_n:{name:'tentativeSelected',onChange:d_f.d_j,value:false}});return d_b;}});