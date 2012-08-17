/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-17

	http://www.uize.com/reference/Uize.Widget.ColorPicker.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.ColorPicker',required:['Uize.Widget.Bar.Slider.xSkin','Uize.Color'],builder:function(c_a){var c_b,c_c=null,c_d=true,c_e=false;var c_f=c_a.subclass(function(c_g){var c_h=this;c_h.c_i=Uize.Color();function c_j(c_k,c_l){var c_m=c_h.addChild(c_k,Uize.Widget.Bar.Slider({minValue:0,maxValue:255,borderThickness:3,borderTintColor:'#fff',borderTintLevel:40,knobSize:28,emptyTintColor:'#fff',emptyTintLevel:10,fullTintColor:c_l,fullTintLevel:100,built:c_e}));c_m.wire('Changed.value',function(){if(!c_h.c_n){var c_o=c_h.children;c_h.set({c_p:c_h.c_i.from(c_h.c_q).to('hex')});}});return c_m;}c_h.c_q=[c_j('sliderR','#f00'),c_j('sliderG','#0f0'),c_j('sliderB','#00f')];}),c_r=c_f.prototype;c_r.c_s=function(){this.isWired&&this.setNodeStyle('swatch',{background:'#'+this.c_p});};c_r.updateUi=function(){var c_h=this;if(c_h.isWired){Uize.callOn(c_h.children,'updateUi');c_h.c_s();}};c_f.registerProperties({c_p:{name:'value',conformer:function(c_p){return Uize.Color.to(c_p,'hex')},onChange:function(){
var c_h=this,c_o=c_h.children,c_t=c_h.c_i.from(this.c_p).tuple;c_h.c_n=c_d;c_o.sliderR.set({value:c_t[0]});c_o.sliderG.set({value:c_t[1]});c_o.sliderB.set({value:c_t[2]});c_h.c_n=c_e;c_h.c_s();},value:'000000'}});c_f.set({html:{process:function(input){function c_u(c_v){var c_w=' style="width:'+c_x+'px; height:'+c_y+'px;"';return'<td id="'+input.idPrefix+'_slider'+c_v+'"'+c_w+'><img src="'+input.blankGif+'"'+c_w+'/></td>';}var c_x=input.sliderWidth!=c_b?input.sliderWidth:40,c_y=input.sliderHeight!=c_b?input.sliderHeight:286;return('<table cellspacing="0" cellpadding="0">'+'<tr>'+'<td id="'+input.idPrefix+'-swatch" colspan="5" style="height:30px; border:1px solid #666;">&nbsp;</td>'+'</tr>'+'<tr>'+'<td colspan="5" height="3"></td>'+'</tr>'+'<tr>'+c_u('R')+'<td width="3"></td>'+c_u('G')+'<td width="3"></td>'+c_u('B')+'</tr>'+'<tr>'+'<td colspan="5" height="3"></td>'+'</tr>'+'<tr>'+'<td style="background:#f00; height:15px; border:1px solid #666;">&nbsp;</td>'+'<td width="3"></td>'+
'<td style="background:#0f0; height:15px; border:1px solid #666;">&nbsp;</td>'+'<td width="3"></td>'+'<td style="background:#00f; height:15px; border:1px solid #666;">&nbsp;</td>'+'</tr>'+'</table>');}}});return c_f;}});