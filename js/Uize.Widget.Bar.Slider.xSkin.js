/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-17

	http://www.uize.com/reference/Uize.Widget.Bar.Slider.xSkin.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Bar.Slider.xSkin',required:['Uize.Node','Uize.Node.Util'],builder:function(_a){var _b;_a.presets.Skin={html:{process:function(_c){function _d(_e,_f){_f=_f||0;return(_f?('background:'+_e+';'+(_f<100?_g(_f/100):'')):'display:none;');}var _h=this,_i=Uize.Node,_g=_i.Util.getOpacityStr,_j=_c.idPrefix,_k=_c.orientation,_l=_k=='vertical'?1:0,_m=_c.borderThickness!=_b?_c.borderThickness:5,_n=_c.knobSize!=_b?_c.knobSize:15,_o=_h.getNode(),_p=_i.getDimensions(_o),_q=['width','height'],_r=_o?[_p[_q[1-_l]],_p[_q[_l]]]:[35,280],_s=[_r[0]-_m*2,_r[1]-_m*2],_t=[_s[0],_n],_u='',_v=_c.pathToResources+'Uize_Widget_Bar_Slider/';if(_m>0&&_c.borderTintLevel!=100){var _w='<td><img src="'+_v+'border-h.gif" width="'+_s[1-_l]+'" height="'+_m+'" border="0" hspace="0" vspace="0"/></td>',_x='<td><img src="'+_v+'border-v.gif" width="'+_m+'" height="'+_s[_l]+'" border="0" hspace="0" vspace="0"/></td>';_u='<table border="0" cellspacing="0" cellpadding="0" style="position:absolute; left:0px; top:0px;">'+'<tr>'+
'<td><img src="'+_v+'border-tl.gif" width="'+_m+'" height="'+_m+'" border="0" hspace="0" vspace="0"/></td>'+_w+'<td><img src="'+_v+'border-tr.gif" width="'+_m+'" height="'+_m+'" border="0" hspace="0" vspace="0"/></td>'+'</tr>'+'<tr>'+_x+'<td></td>'+_x+'</tr>'+'<tr>'+'<td><img src="'+_v+'border-bl.gif" width="'+_m+'" height="'+_m+'" border="0" hspace="0" vspace="0"/></td>'+_w+'<td><img src="'+_v+'border-br.gif" width="'+_m+'" height="'+_m+'" border="0" hspace="0" vspace="0"/></td>'+'</tr>'+'</table>';}var _y='width:'+_r[1-_l]+'px; height:'+_r[_l]+'px;',_z='width:'+_s[1-_l]+'px; height:'+_s[_l]+'px;',_A='left:'+_m+'px; top:'+_m+'px;',_B='position:absolute; left:0px; top:0px; width:'+_t[1-_l]+'px; height:'+_t[_l]+'px;';return('<div style="position:relative; left:0px; top:0px; '+_y+'">'+_u+'<div style="position:absolute; left:0px; top:0px; '+_y+' '+_d(_c.borderTintColor,_c.borderTintLevel)+'"></div>'+
((_c.emptyTintLevel!=100||_c.fullTintLevel!=100)?('<img src="'+_v+'track-bg-'+_k+'.gif" style="position:absolute; '+_A+' '+_z+'" border="0" hspace="0" vspace="0"/>'):'')+'<div id="'+_j+'-empty" style="position:absolute; '+_A+' '+_z+' '+_d(_c.emptyTintColor,_c.emptyTintLevel)+'"></div>'+'<div id="'+_j+'-full" style="position:absolute; '+_A+' '+_z+' '+_d(_c.fullTintColor,_c.fullTintLevel)+'"></div>'+'<div id="'+_j+'-track" style="position:absolute; cursor:pointer; background:url('+_c.blankGif+'); '+_A+' '+_z+'">'+'<div id="'+_j+'-knob" style="'+_B+'">'+(_c.knobTintLevel!=100?('<img src="'+_v+'knob-'+_k+'.gif" style="'+_B+'" border="0" hspace="0" vspace="0"/>'):'')+'<img src="'+_c.blankGif+'" style="'+_B+' '+_d(_c.knobTintColor,_c.knobTintLevel)+'"/>'+'</div>'+'</div>'+'</div>');}}};_a.set(_a.presets.Skin);}});