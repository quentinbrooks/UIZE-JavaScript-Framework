/*
	UIZE JAVASCRIPT FRAMEWORK 2012-08-17

	http://www.uize.com/reference/Uize.Test.Uize.Util.PropertyAdapter.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.Uize.Util.PropertyAdapter',required:'Uize.Class',builder:function(){var c_a=Uize.Class.subclass();function c_b(c_c){var c_d=new c_a({energy:'solar'}),c_e=new c_a({energy:'wind'});return{c_d:c_d,c_e:c_e,c_f:Uize.Util.PropertyAdapter(Uize.copyInto({propertyA:{instance:c_d,property:'energy'},propertyB:{instance:c_e,property:'energy'}},c_c))};}function c_g(){var c_d=new c_a({normal:2}),c_e=new c_a({scaled:4});return{c_d:c_d,c_e:c_e,c_f:Uize.Util.PropertyAdapter({propertyA:{instance:c_d,property:'normal'},propertyB:{instance:c_e,property:'scaled'},valueAdapter:{aToB:function(c_h){return c_h*2},bToA:function(c_h){return c_h/2}}})};}function c_i(c_j){var c_k='property'+c_j;function c_l(c_m,c_h,c_n){return{title:c_m,test:function(){var c_f=Uize.Util.PropertyAdapter();c_f.set(c_k,c_h);return this.expect(c_n,c_f.get(c_k));}};}var c_o=Uize.Class();return{title:'Test that the conformer for '+c_k+' works correctly',test:[c_l(
'Test that specifying simply an instance is resolved to an object where the instance property for the object is set to the specified instance, and the property property is set to "value"',c_o,{instance:c_o,property:'value'}),{title:'Test that an array value is conformed correctly, where the first element specifies the instance and the second element specifies the property',test:[c_l('Test that specifying an array is resolved to an object where the instance is the first element from the array, and the property is the second element from the array',[c_o,'foo'],{instance:c_o,property:'foo'}),c_l('Test the specifying the value null for the second element results in the property being defaulted to the "value" property',[c_o,null],{instance:c_o,property:'value'}),c_l('Test the specifying the value undefined for the second element results in the property being defaulted to the "value" property',[c_o,undefined],{instance:c_o,property:'value'}),c_l(
'Test that not specifying a second element results in the property being defaulted to the "value" property',[c_o],{instance:c_o,property:'value'})]},{title:'Test that an object value is conformed correctly, where the property property is defaulted to "value" if it is null, undefined, or omitted',test:[c_l('Test the specifying the value null for the property results in the property being defaulted to "value"',{instance:c_o,property:null},{instance:c_o,property:'value'}),c_l('Test the specifying the value undefined for the property results in the property being defaulted to "value"',{instance:c_o,property:undefined},{instance:c_o,property:'value'}),c_l('Test that not specifying the property results in it being defaulted to "value"',{instance:c_o},{instance:c_o,property:'value'})]},{title:'Test that null or undefined is conformed correctly (ie. left as is)',test:[c_l('Test the specifying the value null for the value adapter results in it remaining null',null,null),c_l(
'Test the specifying the value undefined for the value adapter results in it remaining null',undefined,undefined)]}]};}return Uize.Test.declare({title:'Test for Uize.Util.PropertyAdapter Module',test:[Uize.Test.requiredModulesTest('Uize.Util.PropertyAdapter'),{title:'Test that an instance of the class can be successfully created',test:function(){return this.expectInstanceOf(Uize.Util.PropertyAdapter,Uize.Util.PropertyAdapter());}},{title:'Test that connecting a property adapter between two properties of different objects immediately synchronizes property B to property A',test:function(){var c_p=c_b();return this.expect('solar',c_p.c_e.get('energy'));}},{title:'Test basic synchronization (without a value adapter) in both directions',test:[{title:'Test that a property adapter correctly synchronizes from property A to property B',test:function(){var c_p=c_b();c_p.c_d.set({energy:'geothermal'});return this.expect('geothermal',c_p.c_e.get('energy'));}},{
title:'Test that a property adapter correctly synchronizes from property B to property A',test:function(){var c_p=c_b();c_p.c_e.set({energy:'geothermal'});return this.expect('geothermal',c_p.c_d.get('energy'));}}]},{title:'Test that synchronization with a value adapter works in both directions',test:[{title:'Test that a value adapter is applied correctly when synchronizing from propertyA to propertyB',test:function(){var c_p=c_g();c_p.c_d.set({normal:2.5});return this.expect(5,c_p.c_e.get('scaled'));}},{title:'Test that a value adapter is applied correctly when synchronizing from propertyB to propertyA',test:function(){var c_p=c_g();c_p.c_e.set({scaled:5});return this.expect(2.5,c_p.c_d.get('normal'));}}]},{title:'Test that changing the value adapter after properties have already been connected is handled correctly',test:[{
title:'Test that changing a value adapter mid-stream results in propertyB being immediately re-synchronized to propertyA using the new value adapter, with correct synchronization in both directions thereafter',test:function(){var c_p=c_g();c_p.c_f.set({valueAdapter:{aToB:function(c_h){return c_h*3},bToA:function(c_h){return c_h/3}}});var c_q=c_p.c_e.get('scaled');c_p.c_d.set({normal:5});var c_r=c_p.c_e.get('scaled');c_p.c_e.set({scaled:30});var c_s=c_p.c_d.get('normal');return(this.expect(6,c_q)&&this.expect(15,c_r)&&this.expect(10,c_s));}},{title:'Test that nulling out a value adapter mid-stream results in propertyB being immediately re-synchronized to propertyA without any value adapter translation, with correct synchronization in both directions thereafter',test:function(){var c_p=c_g();c_p.c_f.set({valueAdapter:null});var c_q=c_p.c_e.get('scaled');c_p.c_d.set({normal:5});var c_r=c_p.c_e.get('scaled');c_p.c_e.set({scaled:30});var c_s=c_p.c_d.get('normal');return(this.expect(2,c_q)&&this.expect(5,c_r)&&
this.expect(30,c_s));}}]},{title:'Test that the connected set-get property is observed correctly',test:[{title:'Test that connecting a property adapter between two properties of different objects with the adapter not initially connected results in property B *not* being immediately synchronized to property A',test:function(){var c_p=c_b({connected:false});return this.expect('wind',c_p.c_e.get('energy'));}},{title:'Test that disconnecting a property adapter by setting its connected set-get property to false results in properties no longer being synchronized',test:function(){var c_p=c_b();c_p.c_f.set({connected:false});c_p.c_d.set({energy:'geothermal'});var c_r=c_p.c_e.get('energy');c_p.c_e.set({energy:'tidal'});var c_s=c_p.c_d.get('energy');return(this.expect('solar',c_r)&&this.expect('geothermal',c_s));}},{title:'Test that disconnecting and then reconnecting a property adapter results in properties once again being synchronized correctly',test:function(){var c_p=c_b();c_p.c_f.set({connected:false});
c_p.c_f.set({connected:true});c_p.c_d.set({energy:'geothermal'});var c_r=c_p.c_e.get('energy');c_p.c_e.set({energy:'tidal'});var c_s=c_p.c_d.get('energy');return(this.expect('geothermal',c_r)&&this.expect('tidal',c_s));}}]},{title:'Test that the conformer for the propertyA and propertyB set-get properties works correctly',test:[c_i('A'),c_i('B')]},{title:'Test that changing either propertyA or propertyB mid-stream is handled correctly',test:[{title:'Test that when changing propertyA, propertyB is immediately re-synchronized to the new property for propertyA',test:function(){var c_p=c_b();c_p.c_f.set({propertyA:{instance:new c_a({energy:'biofuel'}),property:'energy'}});return this.expect('biofuel',c_p.c_e.get('energy'));}},{title:'Test that when changing propertyB, propertyB is immediately synchronized to the property for propertyA',test:function(){var c_p=c_b(),c_t=new c_a({energy:'geothermal'});c_p.c_f.set({propertyB:{instance:c_t,property:'energy'}});return this.expect('solar',c_t.get('energy'));}},{
title:'Test that when changing propertyA, the old property for propertyA is no longer synchronized when the property for propertyB is modified',test:function(){var c_p=c_b();c_p.c_f.set({propertyA:{instance:new c_a({energy:'geothermal'}),property:'energy'}});c_p.c_e.set({energy:'tidal'});return this.expect('solar',c_p.c_d.get('energy'));}},{title:'Test that after changing propertyA, modifying the value of the old property for propertyA no longer has an affect on the property for propertyB',test:function(){var c_p=c_b();c_p.c_f.set({propertyA:{instance:new c_a({energy:'geothermal'}),property:'energy'}});c_p.c_d.set({energy:'tidal'});return this.expect('geothermal',c_p.c_e.get('energy'));}},{title:'Test that when changing propertyB, the old property for propertyB is no longer synchronized when the property for propertyA is modified',test:function(){var c_p=c_b(),c_t=new c_a({energy:'geothermal'});c_p.c_f.set({propertyB:{instance:c_t,property:'energy'}});c_p.c_d.set({energy:'tidal'});
return this.expect('solar',c_p.c_e.get('energy'));}},{title:'Test that after changing propertyB, modifying the value of the old property for propertyB no longer has an affect on the property for propertyA',test:function(){var c_p=c_b();c_p.c_f.set({propertyB:{instance:new c_a({energy:'geothermal'}),property:'energy'}});c_p.c_e.set({energy:'tidal'});return this.expect('solar',c_p.c_d.get('energy'));}}]},{title:'Test that nulling out either or both of propertyA and propertyB, after properties have already been connected, is handled correctly',test:[{title:'Test that changing propertyA to null after a property adapter has already been connected is handled correctly',test:function(){var c_p=c_b();c_p.c_f.set({propertyA:null});var c_u=c_p.c_e.get('energy');c_p.c_d.set({energy:'geothermal'});var c_v=c_p.c_e.get('energy');c_p.c_e.set({energy:'tidal'});var c_w=c_p.c_d.get('energy');return(this.expect('solar',c_u)&&this.expect('solar',c_v)&&this.expect('geothermal',c_w));}},{
title:'Test that changing propertyB to null after a property adapter has already been connected is handled correctly',test:function(){var c_p=c_b();c_p.c_f.set({propertyB:null});var c_x=c_p.c_e.get('energy');c_p.c_e.set({energy:'geothermal'});var c_y=c_p.c_d.get('energy');c_p.c_d.set({energy:'tidal'});var c_z=c_p.c_e.get('energy');return(this.expect('solar',c_x)&&this.expect('solar',c_y)&&this.expect('geothermal',c_z));}},{title:'Test that changing propertyA and propertyB to null after a property adapter has already been connected is handled correctly',test:function(){var c_p=c_b();c_p.c_f.set({propertyA:null,propertyB:null});var c_A=c_p.c_d.get('energy'),c_B=c_p.c_d.get('energy');c_p.c_d.set({energy:'geothermal'});var c_C=c_p.c_e.get('energy');c_p.c_e.set({energy:'tidal'});var c_D=c_p.c_d.get('energy');return(this.expect('solar',c_A)&&this.expect('solar',c_B)&&this.expect('solar',c_C)&&this.expect('geothermal',c_D));}}]},{title:'Test that the infinite loop prevention mechanism works correctly',test:[{
title:'Test that the infinite loop prevention mechanism does not prevent two properties of the same instance from being connected successfully by an adapter',test:function(){var c_E=new c_a({prop1:'foo',prop2:'bar'}),c_f=Uize.Util.PropertyAdapter({propertyA:{instance:c_E,property:'prop1'},propertyB:{instance:c_E,property:'prop2'}}),c_F=c_E.get('prop2');c_E.set({prop1:'doo'});var c_r=c_E.get('prop2');c_E.set({prop2:'goo'});var c_s=c_E.get('prop1');return(this.expect('foo',c_F)&&this.expect('doo',c_r)&&this.expect('goo',c_s));}},{title:'Test that the infinite loop prevention mechanism does not prevent three properties of the same instance from being connected successfully by two adapters',test:function(){var c_E=new c_a({prop1:'foo',prop2:'bar',prop3:'ha'}),c_G=Uize.Util.PropertyAdapter({propertyA:{instance:c_E,property:'prop1'},propertyB:{instance:c_E,property:'prop2'}}),c_H=Uize.Util.PropertyAdapter({propertyA:{instance:c_E,property:'prop2'},propertyB:{instance:c_E,property:'prop3'}}),c_I=c_E.get('prop2'),
c_J=c_E.get('prop3');c_E.set({prop1:'doo'});var c_K=c_E.get('prop2'),c_L=c_E.get('prop3');c_E.set({prop2:'hoo'});var c_M=c_E.get('prop1'),c_N=c_E.get('prop3');c_E.set({prop3:'hoo'});var c_O=c_E.get('prop1'),c_P=c_E.get('prop2');return(this.expect('foo',c_I)&&this.expect('foo',c_J)&&this.expect('doo',c_K)&&this.expect('doo',c_L)&&this.expect('hoo',c_M)&&this.expect('hoo',c_N)&&this.expect('hoo',c_O)&&this.expect('hoo',c_P));}},{title:'Test that an infinite loop is prevented when two properties combined in a property adapter are guaranteed to never be able to ever settle their values, because of a divergent value adapter',test:function(){var c_a=Uize.Class.subclass();c_a.registerProperties({c_Q:'property1',c_R:'property2'});var c_E=new c_a,c_f=Uize.Util.PropertyAdapter({propertyA:{instance:c_E,property:'property1'},propertyB:{instance:c_E,property:'property2'},valueAdapter:{aToB:function(c_h){return c_h*2},bToA:function(c_h){return c_h*2}}});c_E.set({property1:1});return true;}},{
title:'Test that an infinite loop is prevented when two properties combined in a property adapter are guaranteed to never be able to ever settle their values, based upon the definition of those properties',test:function(){var c_S=Uize.Class.subclass();c_S.registerProperties({c_Q:{name:'property1',conformer:function(c_h){return c_h+1},value:1},c_R:{name:'property2',conformer:function(c_h){return c_h+1},value:1}});var c_E=new c_S,c_f=Uize.Util.PropertyAdapter({propertyA:{instance:c_E,property:'property1'},propertyB:{instance:c_E,property:'property2'}});c_E.set({property1:10});return true;}}]}]});}});