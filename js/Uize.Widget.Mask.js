/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-17

	http://www.uize.com/reference/Uize.Widget.Mask.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Mask',required:'Uize.Node',builder:function(c_a){var c_b=true,c_c=false,c_d=Uize.Node;var c_e=['left','top','width','height','img'];var c_f=c_a.subclass(),c_g=c_f.prototype;c_g.c_h=function(){var c_i=this,c_j=c_i.c_j,c_k=c_i.getNode('img');if(c_j){if(c_d.isIe&&/MSIE 6.0/.test(navigator.appVersion)){c_k.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+c_j+'\', sizingMethod=\'crop\')';c_k.src=c_f.getBlankImageUrl();}else c_k.src=c_j;}};c_g.getCoords=function(){var c_i=this;return{left:c_i.c_l,top:c_i.c_m,width:c_i.c_n,height:c_i.c_o};};c_g.updateUi=function(){var c_i=this;if(c_i.isWired){var c_p=c_c,c_q=c_i.c_q;if(!c_q)c_q=c_i.c_q={};for(var c_r= -1,c_s=c_e.length;++c_r<c_s;){var c_t=c_e[c_r],c_u=c_i.get(c_t);if(c_u!==c_q[c_t]){c_q[c_t]=c_u;c_p=c_b;}}if(c_p){var c_j=c_i.c_j,c_k=c_i.getNode('img'),c_v=c_i.c_w.width,c_x=c_i.c_w.height,c_l=c_i.c_l,c_m=c_i.c_m,c_n=c_i.c_n,c_o=c_i.c_o,c_y=c_m+c_o,c_z=c_d.setClipRect,c_A=c_i.c_A,c_B=c_i.c_B,c_C=c_i.c_C,
c_D=c_i.c_D;if(c_j)c_i.c_h();else{c_z(c_A,0,c_v,c_m,0);c_z(c_B,c_m,c_l,c_y,0);c_z(c_C,c_m,c_v,c_y,c_l+c_n);c_z(c_D,c_y,c_v,c_x,0);}c_i.displayNode(c_k,c_j);c_i.displayNode([c_A,c_C,c_B,c_D],!c_j);}}};c_g.wireUi=function(){var c_i=this;if(!c_i.isWired){var c_E=c_i.getNode(),c_j=c_i.c_j,c_k=c_i.getNode('img');c_i.c_w=c_d.getDimensions(c_E);function c_F(){var c_G=c_E.cloneNode(c_c);c_G.removeAttribute('id');c_d.setStyle(c_G,{position:'absolute',display:c_j?'none':'block',visibility:'inherit'});c_E.appendChild(c_G);return c_G;}c_i.c_A=c_F();c_i.c_B=c_F();c_i.c_C=c_F();c_i.c_D=c_F();c_j&&c_i.c_h();c_d.setStyle(c_E,{background:'transparent',opacity:'',filter:''});c_i.displayNode(c_k,c_j);c_a.prototype.wireUi.call(c_i);}};var c_H='updateUi';c_f.registerProperties({c_o:{name:'height',onChange:c_H,value:200},c_j:{name:'img',onChange:c_H,value:''},c_l:{name:'left',onChange:c_H,value:0},c_m:{name:'top',onChange:c_H,value:0},c_n:{name:'width',onChange:c_H,value:200}});return c_f;}});