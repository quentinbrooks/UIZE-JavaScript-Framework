/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-17

	http://www.uize.com/reference/Uize.Widget.Button.Toggle.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Button.Toggle',builder:function(d_a){var d_b=null;var d_c=d_a.subclass(),d_d=d_c.prototype;var d_e=d_d.d_e=function(){var d_f=this;if(d_f.isWired){var d_g=d_f.d_g,d_h='',d_i='';if(d_g){var d_j=d_f.d_k[d_f.d_l()];d_h=Uize.substituteInto(d_f.d_m,d_f.d_n?d_j:d_g);d_i=Uize.substituteInto(d_f.d_o,d_f.d_p?d_j:d_g);}d_f.set('text',d_h);d_f.setNodeProperties('',{title:d_i});}};d_d.d_l=function(){var d_k=this.d_k,d_q=this.d_q;return d_k?(typeof d_q=='number'?(d_q+1)%d_k.length:0):d_b;};d_d.toggleButton=function(){this.set({d_q:this.d_l()})};d_d.updateUi=function(){var d_f=this;if(d_f.isWired){d_f.d_e();d_a.prototype.updateUi.call(d_f);}};d_d.wireUi=function(){var d_f=this;if(!d_f.isWired){d_f.wire('Click',function(){d_f.toggleButton()});d_a.prototype.wireUi.call(d_f);}};d_c.registerProperties({d_n:{name:'textShowNext',onChange:d_e,value:true},d_m:{name:'textTemplate',onChange:d_e,value:'Switch to [#displayName]'},d_p:{name:'titleShowNext',onChange:d_e,value:false},d_o:{
name:'titleTemplate',onChange:d_e,value:'Currently [#displayName]'},d_r:{name:'value',onChange:function(){this.d_k&&this.set({d_q:Uize.findRecordNo(this.d_k,{value:this.d_r},0)});},value:d_b},d_q:{name:'valueNo',onChange:function(){var d_f=this;d_f.set({d_g:d_f.d_k&&d_f.d_q!=d_b?d_f.d_k[d_f.d_q]:d_b});d_f.set({d_r:d_f.d_g?d_f.d_g.value:d_b});d_f.d_e();},value:d_b},d_g:{name:'valueObject',value:d_b},d_k:{name:'values',onChange:function(){var d_f=this;if(d_f.d_k){d_f.d_q=d_b;d_f.set({d_q:0});}else{d_f.d_e();}},value:d_b}});return d_c;}});