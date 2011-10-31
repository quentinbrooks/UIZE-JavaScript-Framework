/*
	UIZE JAVASCRIPT FRAMEWORK 2011-10-31

	http://www.uize.com/reference/Uize.Widget.Swap.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Swap',required:['Uize.Node','Uize.Node.Util','Uize.Fade'],builder:function(c_a){var c_b=true,c_c=false,c_d=Uize.Node;var c_e=[],c_f=[],c_g=[];function c_h(c_i,c_j,c_k){return c_i+(c_j-c_i)*c_k}var c_l=c_a.subclass(function(){var c_m=this;c_m.c_n=c_m.viewFinalCoords=[0,0,0,0];c_m.c_o=0;c_m.fade=new Uize.Fade({duration:850,curve:Uize.Fade.celeration(.5,0),startValue:0,endValue:1});c_m.fade.wire('Changed.value',function(){if(c_m.isWired){var c_p= +c_m.fade;if(c_m.c_q&&c_m.c_r){var c_s=c_m.c_s,c_t=c_s<0?1-(1+c_s)*(1-c_m.c_u):(1-c_s)*c_m.c_u,c_v=c_t+c_s;c_m.c_w(c_m.c_x,c_t!=1?Uize.constrain((c_p-1)/(1-c_t)+1,0,1):c_p==1?1:0);c_m.c_w(c_m.c_q,c_v?Uize.constrain(1-c_p/c_v,0,1):c_p?0:1);}else{c_m.c_w(c_m.c_x,c_p);}}});}),c_y=c_l.prototype;c_y.c_w=function(c_z,c_p,c_A){var c_m=this,c_B=c_m.c_C?c_d.Util.getOpacityProperties(c_p):c_A?c_d.Util.getOpacityProperties(1):{};if(c_A||c_m.c_D!=1||c_m.c_E!=1){for(var c_F= -1;++c_F<4;)c_f[c_F]=c_h(c_m.c_G[c_F],c_m.c_n[c_F],c_p);
if(c_A||c_m.c_H!=='none'||c_m.c_I!=='none'){for(var c_J= -1;++c_J<2;){var c_K=c_J?c_m.c_I:c_m.c_H,c_L=c_K=='none';c_g[c_J]=c_L?0:c_h(c_f[0+c_J],c_f[2+c_J]-c_m.c_n[2+c_J],c_K=='auto'?(c_m.c_G[c_J]+c_m.c_G[c_J+2])/2/c_m.c_n[c_J+2]:c_K);c_B[c_J?'top':'left']=c_L?'':c_g[c_J];}}else{c_g[0]=c_g[1]=0;}for(var c_F= -1;++c_F<4;)c_e[c_F]=Math.round(c_f[c_F]-c_g[c_F%2]+(c_F>>1))+'px ';c_B.clip='rect('+c_e[1]+c_e[2]+c_e[3]+c_e[0]+')';}c_d.setStyle(c_z,c_B);};c_y.prepareForNextItem=function(c_x,c_M){var c_m=this,c_N=c_m.getNode()||c_M,c_O=parseInt(c_d.getStyle(c_N,'width')),c_P=parseInt(c_d.getStyle(c_N,'height'));c_m.fade.stop();c_m.c_Q&&c_m.set(c_m.c_Q[c_m.c_o++ %c_m.c_Q.length]);c_m.c_n[2]=c_O-1;c_m.c_n[3]=c_P-1;var c_R=Math.max(0,c_O*c_m.c_D),c_S=Math.max(0,c_P*c_m.c_E),c_T=(c_O-c_R)*c_m.c_U,c_V=(c_P-c_S)*c_m.c_W;c_m.c_G=[c_T,c_V,c_T+c_R-1,c_V+c_S-1];c_x&&c_m.c_w(c_x,1,c_b);c_M&&c_m.c_w(c_M,0,c_b);};c_y.setCurrentItem=function(c_x){var c_m=this;c_m.setNodeStyle(c_m.c_q=c_m.c_x,{zIndex:0});
c_m.setNodeStyle(c_m.c_x=c_x,{zIndex:1});c_m.fade.start();};c_y.wireUi=function(){if(!this.isWired){this.setNodeStyle('',{overflow:'hidden'});c_a.prototype.wireUi.call(this);}};c_l.registerProperties({c_r:{name:'crossFade|wipeOut',value:c_c},c_u:{name:'crossFadeAlign',value:.5},c_s:{name:'crossFadeSize',value:0},c_Q:'cyclingPropertySets',c_C:{name:'dissolve',value:c_b},c_H:{name:'viewContentAlignX',value:'none'},c_I:{name:'viewContentAlignY',value:'none'},c_D:{name:'viewSeedSizeX',value:1},c_E:{name:'viewSeedSizeY',value:1},c_U:{name:'viewSeedAlignX',value:.5},c_W:{name:'viewSeedAlignY',value:.5}});return c_l;}});