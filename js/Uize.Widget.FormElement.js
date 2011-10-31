/*
	UIZE JAVASCRIPT FRAMEWORK 2011-10-31

	http://www.uize.com/reference/Uize.Widget.FormElement.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.FormElement',required:['Uize.Node','Uize.Node.Event','Uize.Widget.Collapsy','Uize.Node.Classes'],builder:function(c_a){var c_b=true,c_c=false,c_d=null,c_e,c_f='never',c_g='tentativeValueChanged',c_h='valueChanged',c_i='validated',c_j='finished',c_k='validatedAfterFirstFinish';var c_l=c_a.subclass(c_d,function(){var c_m=this,c_n=c_m.addChild('warning',Uize.Widget.Collapsy,c_m.c_o);function c_p(){c_m.c_p()}c_m.wire({'Changed.busyInherited':c_p,'Changed.enabledInherited':c_p,Blur:function(){c_n.set({collapsed:c_b})},Focus:function(){c_n.set({collapsed:c_c})}});c_m.c_n=c_n;c_m.c_q=c_b;c_m.c_r= -1;}),c_s=c_l.prototype;c_s.c_t=function(){return this.getNode('input')};c_s.c_u=function(){var c_v=this.parent,c_w;if(c_v&&c_v.parent){c_w=c_v.parent;if(!c_w.isForm)c_w=c_d;}return c_w;};c_s.c_p=function(){var c_m=this;if(c_m.isWired){var c_x=c_m.get('enabledInherited')&& !c_m.get('busyInherited');c_m.setNodeProperties(c_m.c_t(),{readOnly:!c_x,disabled:!c_x});}};c_s.c_y=function(){
var c_m=this;if(c_m.isWired){var c_z=c_m.c_t(),c_A=c_m.c_A;c_A+''!=c_m.getNodeValue(c_z)&&c_m.setNodeValue(c_z,c_A);}};c_s.c_B=function(){var c_m=this,c_C=c_m.c_C,c_D=c_m.c_D;if(c_m.isWired){c_m.c_n&&c_m.c_n.set(Uize.copyInto({shown:c_C},c_D?{expandedMessage:c_D}:c_d));Uize.Node.Classes.setState([c_m.c_t(),c_m.getNode('label')],c_m.c_E,c_C);}};c_s.fireOkOnEnter=function(){return c_b};c_s.checkIsEmpty=function(){return this.c_A==c_d||this.c_A==''};c_s.checkWarningShown=c_s.c_F=function(){var c_m=this,c_G=c_m.c_G,c_w=c_m.c_u(),c_H=c_m.c_C;c_m.set({c_C:c_m.c_I&&c_m.c_J==c_c&&(c_w?c_w.get('warningShown'):(c_m.c_K&&(c_G==c_i||(c_G==c_j&&(c_m.c_L||c_H))||(c_G==c_k&&(c_m.c_M||c_H)))))});};c_s.getMoreValidators=c_e;c_s.getRootNode=function(){return this.getNode()||this.getNode('input')};c_s.restore=function(){this.set({c_M:c_c,c_N:'inherit',c_A:this.c_O})};c_s.updateUi=function(){var c_m=this;if(c_m.isWired){c_m.c_p();c_m.c_y();c_m.c_B();c_a.prototype.updateUi.call(c_m);}};c_s.validate=c_s.c_P=function(){
var c_m=this;if(c_m.c_q){var c_Q=c_m.c_Q,c_R=(Uize.isArray(c_Q)?c_Q:(c_Q!=c_d?[c_Q]:c_d)),c_S=c_m.getMoreValidators?c_m.getMoreValidators():c_d;if(c_S)c_R=c_R?c_R.concat(c_S):c_S;function c_T(c_J){c_m.set({c_J:c_J})}if(c_R!=c_d){var c_A=c_m.c_U==c_g?c_m.c_V:c_m.c_A,c_W=c_R.length,c_X= -1;function c_Y(){if(++c_X<c_W){function c_Z(c_J,c_0){if(c_J==c_c){c_m.set({c_D:c_0||c_m.c_1});c_T(c_c);}else c_Y();}var c_2=c_R[c_X],c_J=c_2 instanceof RegExp?c_2.test(c_A):(c_2.func||Uize.isFunction(c_2)?(c_2.func||c_2).call(c_m,c_A,c_Z):c_A==c_2);c_Z(c_J,c_2.msg);}else c_T(c_b);}c_Y();}else c_T(c_b)}};c_s.wireUi=function(){var c_m=this;if(!c_m.isWired){var c_z=c_m.c_t();if(c_z){c_m.c_3=c_z.type;c_m.c_4=c_z.name;function c_5(c_6,c_7){c_m.fire({name:c_6,domEvent:c_7})}function c_8(c_9){c_5('Click',c_9)}function c_ba(c_9){c_5('Key Up',c_9)}function c_bb(c_bc){c_m.set({c_A:c_m.getNodeValue(c_z)});!c_bc&&c_m.c_N!=c_b&&c_m.set({c_N:c_b});}var c_bd={blur:function(){c_bb();c_m.set({c_be:c_c});},focus:function(){c_m.set({c_be:c_b})},
click:function(c_9){c_bb();c_8(c_9);},keydown:function(c_9){c_m.c_r=c_9.keyCode;c_5('Key Down',c_9);}};switch(c_m.c_3){case'checkbox':break;case'radio':c_m.set({nodeMap:Uize.copyInto(c_m.get('nodeMap')||{},{input:Uize.Node.find({tagName:'INPUT',type:'radio',name:c_m.c_4})})});c_z=c_m.c_t();break;case'select-one':case'select-multiple':c_bd.change=c_bb;c_bd.keyup=function(c_9){c_bb();c_ba(c_9);};c_bd.click=c_8;break;default:c_bd.keyup=function(c_9){if(c_m.c_3!='textarea'&&c_m.c_r==c_9.keyCode&&Uize.Node.Event.isKeyEnter(c_9)){c_bb();c_m.fireOkOnEnter()&&c_5('Ok',c_9);}else if(Uize.Node.Event.isKeyEscape(c_9)){c_m.c_y();c_5('Cancel',c_9);c_z.blur();}else{c_m.set({c_V:c_m.getNodeValue(c_z),c_L:c_c});}c_ba(c_9);};c_bd.click=c_8;break;}c_m.wireNode(c_z,c_bd);c_m.c_A===c_e?c_bb(c_b):c_m.c_y();}c_m.c_P();c_a.prototype.wireUi.call(c_m);}};c_l.registerProperties({c_4:'elementName',c_E:{name:'errorClassName',value:'error'},c_be:{name:'focused',onChange:function(){var c_m=this,c_n=c_m.children.warning;
c_n&&c_n.set({collapsed:!c_m.c_be});if(c_m.isWired){var c_z=c_m.c_t();try{c_z&&(Uize.Node.isNode(c_z)?c_z:c_z[0])[c_m.c_be?'focus':'blur']();c_m.setNodeValue('input',c_m.c_A);}catch(c_bf){}}},value:c_c},c_bg:{name:'isEmpty',value:c_b},c_N:{name:'isDirty',onChange:function(){var c_m=this,c_w=c_m.c_u(),c_N=c_m.c_N=='inherit'?(c_w?c_w.get('isDirtyInherited'):c_c):c_m.c_N;c_m.set({c_K:c_N});},value:'inherit'},c_K:{name:'isDirtyInherited',onChange:c_s.c_F,value:c_c},c_L:{name:'isFinished',onChange:function(){var c_m=this;if(c_m.c_L&&c_m.c_q){c_m.c_U==c_j&&c_m.c_P();c_m.c_M||c_m.set({c_M:c_b});}c_m.c_F();},value:c_b},c_J:{name:'isValid',onChange:c_s.c_F,value:c_c},c_V:{name:'tentativeValue',onChange:function(){this.c_U==c_g&&this.c_P()},value:c_d},c_3:'type',c_U:{name:'validateWhen',value:c_g},c_Q:{name:'validator',onChange:c_s.c_P,value:c_d},c_A:{name:'value',conformer:function(c_A){var c_m=this;c_A=c_m.c_3=='checkbox'?c_A==c_b:c_A;return Uize.isFunction(this.c_bh)?this.c_bh(c_A):c_A},onChange:function(){
var c_m=this;if(!c_m.isWired)c_m.c_O=c_m.c_A;c_m.set({c_V:c_m.c_A,c_L:c_b,c_bg:c_m.checkIsEmpty()});c_m.c_U==c_h&&c_m.c_P();c_m.c_y();}},c_bh:'valueConformer',c_bi:{name:'warningAllowed',onChange:function(){var c_m=this,c_w=c_m.c_u(),c_bi=c_m.c_bi=='inherit'?(c_w?c_w.get('warningAllowedInherited'):c_b):c_m.c_bi;c_m.set({c_I:c_bi});},value:'inherit'},c_I:{name:'warningAllowedInherited',onChange:c_s.c_F,value:c_c},c_D:{name:'warningMessage',onChange:[function(){var c_m=this;if(!c_m.isWired)c_m.c_1=c_m.c_D;},c_s.c_B]},c_o:{name:'warningMessageProperties',onChange:function(){this.c_n.set(this.c_o)}},c_C:{name:'warningShown',onChange:c_s.c_B,value:c_c},c_G:{name:'warningShownWhen',onChange:c_s.c_F,value:c_i},c_M:{onChange:c_s.c_F,value:c_c}});return c_l;}});