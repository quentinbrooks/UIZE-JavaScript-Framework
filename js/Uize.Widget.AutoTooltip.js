/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-17

	http://www.uize.com/reference/Uize.Widget.AutoTooltip.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.AutoTooltip',required:['Uize.Tooltip','Uize.String'],builder:function(c_a){var c_b,c_c='auto',c_d='title';var c_e=c_a.subclass(),c_f=c_e.prototype;c_f.c_g=function(){var c_h=this;if(c_h.isWired){var c_i=c_h.c_i;c_i&&c_h.buildHtml(c_i);Uize.Tooltip.showTooltip(c_h.getNode(),!!c_i);}};c_f.c_j=function(){var c_h=this,c_k={},c_l={};if(c_h.isWired){c_h.wireNode(c_h.c_m=Uize.Node.find(c_h.c_m),{mouseover:function(){var c_n=this,c_o=c_n.id||(c_n.id=Uize.getGuid()),c_p=c_k[c_o];if(c_p===c_b){var c_q=c_h.c_q;if(c_q==c_c)c_q=c_n.title?c_d:'alt';var c_r=c_n.getAttribute(c_q);c_p=c_k[c_o]=c_r?c_h.c_s(c_r):null;if(c_p&&c_q==c_d)c_l[c_o]=c_n.title;}if(c_l[c_o])c_n.title='';c_h.set({c_i:c_p});},mouseout:function(){var c_n=this,c_t=c_l[c_n.id];if(c_t)c_n.title=c_t;c_h.set({c_i:null});}});}};c_f.updateUi=function(){this.c_g();};c_f.wireUi=function(){var c_h=this;if(!c_h.isWired){c_a.prototype.wireUi.call(c_h);c_h.c_j();}};c_e.registerProperties({c_i:{name:'data',onChange:c_f.c_g},c_q:{
name:'dataAttribute',value:'auto'},c_s:{name:'dataDecoder',value:function(c_u){var c_v={},c_w=[],c_x=/(([A-Z0-9 ]+:.+?)((\s*\|\s*)|$))([A-Z ]+:|$)/,c_y=this.c_y||function(c_z){return c_z};while(c_u){var c_A=c_u.match(c_x)||c_w,c_B=c_A[2];if(c_B){var c_C=Uize.String.splitInTwo(c_B,/\s*:\s*/);c_v[c_y(c_C[0])]=c_C[1];c_u=c_u.substr(c_A[1].length);}else{c_u='';}}return c_v;}},c_y:{name:'dataKeyTransformer',value:Uize.String.toCamel},c_m:{name:'nodes',onChange:c_f.c_j}});return c_e;}});