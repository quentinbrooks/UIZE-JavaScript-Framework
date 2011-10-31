/*
	UIZE JAVASCRIPT FRAMEWORK 2011-10-31

	http://www.uize.com/reference/Uize.Widget.Page.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Page',required:'Uize.Node',builder:function(c_a){var c_b=true,c_c=false,c_d=null,c_e,c_f=Uize.Node;var c_g=c_a.subclass(c_d,function(){c_g.xDeferredLinks&&this.wireDeferredLinks()}),c_h=c_g.prototype;function c_i(c_j){return(Uize.isFunction(c_j)&&c_j)||(c_j&&c_j.callback)||Object}c_h.c_k=function(c_l,c_m,c_n){var c_o=this;c_o.useDialog({component:c_o.c_p.component,widgetClassName:c_o.c_p.widgetClassName||'Uize.Widget.Dialog.Confirm',widgetProperties:{name:'confirmDialog',title:c_n.title||'',message:(c_n.message+'').replace(/\n/g,'<br/>'),mode:c_l,state:c_n.state||c_m,okText:c_n.okText||c_d,cancelText:c_n.cancelText||c_d},submitHandler:function(c_q){var c_r=c_n.callback||(c_q?c_n.yesHandler:c_n.noHandler);c_r&&c_r(c_q);}});};c_h.c_s=function(c_t){c_t=c_t||Object;var c_o=this,c_u=c_o.get('idPrefix'),c_v=window;function c_w(c_x,c_y){var c_z,c_A;for(var c_B in c_y)(typeof(c_z=c_x[c_B])=='object'&&typeof(c_A=c_y[c_B])=='object'&&c_z&&c_A)?c_w(c_z,c_A):(c_x[c_B]=c_y[c_B]);}var c_C={},
c_D=c_c,c_E='$'+c_u+'_',c_F=c_E.length,c_G;for(var c_B in c_v){if(c_B.charAt(0)=='$'&&c_B.substr(0,c_F)==c_E&&typeof(c_G=c_v[c_B])=='object'&&c_G&&c_G.widgetClass){c_D=c_b;for(var c_H= -1,c_I=c_C,c_J=c_B.substr(c_F).split('_'),c_K,c_L=c_J.length;++c_H<c_L;){var c_M=c_I[c_K=c_J[c_H]];if(c_H<c_L-1){c_I=(c_M||(c_M=c_I[c_K]={})).children||(c_M.children={});}else{c_M?c_w(c_M,c_G):(c_I[c_K]=c_G);c_v[c_B]=c_e;}}}}if(c_D){function c_N(c_O,c_P){function c_Q(c_R,c_S,c_T){var c_U=c_T.children,c_V=c_O(c_R,c_S,c_T);c_U&&c_W(c_V,c_U);c_P&&c_P(c_V);}function c_W(c_R,c_X){for(var c_S in c_X)c_Q(c_R,c_S,c_X[c_S]);}c_W(c_o,c_C);}var c_Y={},c_Z=[];c_N(function(c_R,c_S,c_T){var c_0=c_T.widgetClass;if(c_0&& !c_Y[c_0]){c_Y[c_0]=1;c_Z.push(c_0);}});Uize.module({required:c_Z,builder:function(){c_o.set({children:c_C});c_N(function(c_R,c_S,c_T){var c_V=c_R.children[c_S];if(!c_V){var c_0=eval(c_T.widgetClass||'Uize.Widget');c_V=c_S.charCodeAt(0)==36&&c_S.charCodeAt(1)==36?c_0.spawn(c_T,c_R):c_R.addChild(c_S,c_0);}return c_V;},
c_o.isWired&&function(c_V){Uize.callOn(c_V,'insertOrWireUi')});c_t();}});}else{c_t();}};c_h.loadHtmlIntoNode=function(c_1,c_2,c_3){var c_o=this,c_4=c_1.rootNodeId,c_t=c_i(c_3),c_5={callback:function(c_6){var c_7=document.body,c_8=c_1.node!=undefined?c_o.getNode(c_1.node):(c_4?c_f.getById(c_4+'-shell'):c_d)||c_7;c_f.injectHtml(c_8,c_6,c_1.injectMode||(c_8==c_7?'inner bottom':'inner replace'));c_o.c_s(c_t);}};c_1.alwaysReplace===c_c&&c_4&&c_f.getById(c_4)?c_t():c_o.loadHtml(c_2,typeof c_3=='object'&&c_3?Uize.copyInto({},c_3,c_5):c_5);};c_h.performAjax=function(){};c_h.useDialog=function(c_n){var c_o=this,c_9=Uize.copyInto({},c_o.c_ba,c_n.widgetProperties),c_bb=c_9.parent||c_o,c_bc=c_9.name,c_bd=c_bb.children[c_bc],c_be=c_n.component,c_bf;if(c_be){var c_4=c_9.idPrefix||(c_bb.get('idPrefix')+'_'+c_bc);c_bf={name:c_be.name,rootNodeId:c_4,params:Uize.copyInto({idPrefix:c_4},c_be.params)};}function c_bg(c_bh){setTimeout(function(){function c_bi(c_bj,c_bk){var c_r=c_n[c_bj];c_r&&c_r.apply(0,c_bk);}
function c_bl(c_bm){var c_bk=[c_bm];c_bi(c_bm.name.toLowerCase()+'Handler',c_bk);c_bi('dismissHandler',c_bk);}function c_bn(c_bm){c_o.fire({name:'Dialog '+c_bm.name,dialogWidget:c_bm.source})}c_bd.unwire(c_bd.eventHandlersForUseDialog||{});c_bd.eventHandlersForUseDialog={'Submission Complete':function(c_bm){c_bi('submitHandler',[c_bm.result,c_bm])},Close:c_bl,Cancel:c_bl,'Before Show':c_bn,'After Show':c_bn,'Before Hide':c_bn,'After Hide':c_bn};c_bd.wire(c_bd.eventHandlersForUseDialog);c_bd.set(c_9);c_bd.set({shown:c_b});},0);}if(c_bd&&(c_bd.componentProfile==c_bf||Uize.Data.identical(c_bd.componentProfile,c_bf))){c_bg('subsequent');}else{var c_bo=c_bf&& !!c_bd;if(c_bo){c_bd.removeUi();c_bb.removeChild(c_bc);}function c_bp(){var c_bq=c_n.widgetClassName;Uize.module({required:c_bq,builder:function(){(c_bd=c_bb.children[c_bc])?c_bd.set(c_9):(c_bd=c_bb.addChild(c_bc,eval(c_bq),c_9));c_bd.componentProfile=c_bf;c_bd.wire(c_n.widgetEventHandlers);c_bd.insertOrWireUi();c_bg(c_bo?'refetched':'initial');}});}c_bf
?c_o.loadHtmlIntoNode({rootNodeId:c_bf.rootNodeId,injectMode:'inner bottom',alwaysReplace:c_c},Uize.copyInto({cp:c_bf.name},c_bf.params),{cache:'memory',callback:c_bp}):c_bp();}};c_h.wireUi=function(){var c_o=this;if(!c_o.isWired){c_o.c_s();c_a.prototype.wireUi.call(c_o);}};var c_br={yes:1,on:1,1:1,'true':1};c_g.launchPopup=c_h.launchPopup=function(c_n){if(!c_n)c_n={};if(c_n.width==c_e)c_n.width=850;if(c_n.height==c_e)c_n.height=600;var c_bs=window.screen;if(c_n.left==c_e)c_n.left=Math.max((c_bs.width-c_n.width-10)>>1,0);if(c_n.top==c_e)c_n.top=Math.max((c_bs.height-c_n.height-40)>>1,0);function c_bt(c_bu){return c_bu+'='+c_n[c_bu];}function c_bv(c_bu,c_bw){return(c_bu+'='+(c_br[c_n[c_bu]==c_e?c_bw:c_n[c_bu]+'']?'yes':'no'));}var c_bx=window.open(c_n.url||'',c_n.name==c_e?'popupWindow':c_n.name,[c_bt('width'),c_bt('height'),c_bt('top'),c_bt('left'),c_bv('toolbar',0),c_bv('location',0),c_bv('directories',0),c_bv('status',0),c_bv('menubar',0),c_bv('scrollbars',1),c_bv('resizable',1)].join(','));
c_bx&&c_bx.focus();return c_bx;};c_g.registerProperties({c_p:{name:'confirmDialog',value:{}},c_ba:'dialogProperties'});c_g.set({idPrefix:'page'});c_h.loadHtml=function(c_2,c_j){c_i(c_j)('');};c_h.showConfirm=function(c_n){this.c_k('confirm','confirm',c_n);};c_h.showInform=function(c_n){this.c_k('alert','info',c_n);};return c_g;}});