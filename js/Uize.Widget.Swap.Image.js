/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-17

	http://www.uize.com/reference/Uize.Widget.Swap.Image.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Swap.Image',required:['Uize.Node','Uize.Node.Util'],builder:function(d_a){var d_b=Uize.Node;var d_c=d_a.subclass(function(){var d_d=this;d_d.d_e=0;d_d.d_f={};});d_c.registerProperties({d_g:'background',d_h:'height',d_i:{name:'src|value',onChange:function(){var d_d=this;if(d_d.isWired){var d_j=d_d.getNode('item'+d_d.d_e),d_k=1-d_d.d_e,d_l=d_d.getNode('item'+d_k),d_m=d_d.getNode('item'+d_k+'Image');d_l.style.padding='0px';d_d.prepareForNextItem(d_j,d_l);function d_n(){var d_o=d_d.d_f[d_d.d_i];d_b.setStyle(d_l,{paddingLeft:(d_d.viewFinalCoords[2]+1-d_o.d_p)/2,paddingTop:(d_d.viewFinalCoords[3]+1-d_o.d_h)/2});function d_q(){d_m.Uize_Widget_ImageSwap_src=d_d.d_i;d_d.unwireNode(d_m);d_d.d_e=d_k;d_d.setCurrentItem(d_l);}if(d_m.Uize_Widget_ImageSwap_src===d_d.d_i){d_q();}else{d_d.wireNode(d_m,{load:d_q,error:d_q,abort:d_q});if(d_b.isIe&&/\.png$/i.test(d_d.d_i)){d_m.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+d_d.d_i+'\', sizingMethod=\'crop\')';
d_m.src=d_c.getBlankImageUrl();}else{d_m.src=d_d.d_i;d_m.style.filter=null;}d_m.width=d_o.d_p;d_m.height=d_o.d_h;}}if(d_d.d_f[d_d.d_i]){d_n();}else{var d_r=new Image;d_r.onload=d_r.onerror=d_r.onabort=function(){d_r=null;d_d.d_f[d_d.d_i]={d_p:d_d.d_p||this.width,d_h:d_d.d_h||this.height};d_n();};d_r.src=d_d.d_i;}}},value:''},d_p:'width'});d_c.set({html:{process:function(input){var d_s=this.getNode(),d_t=d_b.getDimensions(d_s),d_g=input.background||d_b.Util.getEffectiveBgColor(d_s);function d_u(d_v){return('<div id="'+input.idPrefix+'-item'+d_v+'" style="position:absolute; margin:0px; padding:0px; left:0px; top:0px; width:'+d_t.width+'px; height:'+d_t.height+'px; background:'+d_g+'; overflow:hidden;"><img id="'+input.idPrefix+'-item'+d_v+'Image" src="'+d_c.getBlankImageUrl()+'"'+(typeof input.width=='number'?(' width="'+input.width+'"'):'')+(typeof input.height=='number'?(' height="'+input.height+'"'):'')+'/></div>');}return d_u(0)+d_u(1);}}});return d_c;}});