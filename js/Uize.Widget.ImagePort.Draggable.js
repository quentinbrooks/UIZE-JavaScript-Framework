/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-17

	http://www.uize.com/reference/Uize.Widget.ImagePort.Draggable.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.ImagePort.Draggable',required:'Uize.Widget.Drag',builder:function(d_a){var d_b=true,d_c=false;var d_d=d_a.subclass(null,function(){var d_e=this;var d_f=d_e.addChild('drag',Uize.Widget.Drag,{idPrefixConstruction:'same as parent'}),d_g=[],d_h,d_i;d_f.wire({'Drag Start':function(d_j){d_i=d_j.domEvent.ctrlKey?'sizing':'alignment';d_e.set({d_k:d_b});d_h=d_e.get('sizingValue');d_g[0]=d_e.get('alignX');d_g[1]=d_e.get('alignY');},'Drag Update':function(d_j){if(d_i=='sizing'){d_e.set({sizingValue:Uize.constrain(d_h+(0-d_f.eventDeltaPos[1])/100,d_e.d_l,d_e.d_m)});}else{function d_n(d_o){return(Uize.constrain(d_g[d_o]+d_f.eventDeltaPos[d_o]*(d_e.portVsScaledDelta[d_o]?(1/d_e.portVsScaledDelta[d_o]):0),0,1));}d_e.set({alignX:d_n(0),alignY:d_n(1)});}},'Drag Done':function(){d_e.set({d_k:d_c})}});function d_p(){var d_q=d_e.get('alignApplicableX'),d_r=d_e.get('alignApplicableY');d_e.children.drag.set({cursor:d_e.d_s?'n-resize':d_q&&d_r?'move':d_q?'w-resize':d_r?'n-resize':'not-allowed'});}
d_e.wire({'Changed.alignApplicableX':d_p,'Changed.alignApplicableY':d_p,'Changed.inZoomMode':d_p});}),d_t=d_d.prototype;d_t.wireUi=function(){var d_e=this;if(!d_e.isWired){d_e.wireNode(document,{keydown:function(d_j){d_j.ctrlKey&&d_e.set({d_s:d_b})},keyup:function(){d_e.set({d_s:d_c})}});d_a.prototype.wireUi.call(d_e);}};d_d.registerProperties({d_k:{name:'inDrag',value:d_c},d_s:{name:'inZoomMode',value:d_c},d_m:{name:'maxSizingValue',value:Infinity},d_l:{name:'minSizingValue',value:0}});return d_d;}});