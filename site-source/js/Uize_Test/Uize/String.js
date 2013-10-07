/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Test.Uize.String Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2010-2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Test
	importance: 3
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Test.Uize.String= module defines a suite of unit tests for the =Uize.String= module.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Test.Uize.String',
	required:'Uize.Class.Value',
	builder:function () {
		'use strict';

		return Uize.Test.resolve ({
			title:'Test for Uize.String Module',
			test:[
				Uize.Test.requiredModulesTest ('Uize.String'),
				Uize.Test.staticMethodsTest ([
					['Uize.String.hasPadding',[
						['Test that leading whitespace is detected as padding',
							'   leading whitespace',
							true
						],
						['Test that trailing whitespace is detected as padding',
							'trailing whitespace     ',
							true
						],
						['Test that leading and trailing whitespace is detected as padding',
							'   leading and trailing whitespace   ',
							true
						],
						['Test that padding is not detected in a string that has no padding',
							'noPadding',
							false
						],
						['Test that whitespace only in the middle is not detected as padding',
							'no         padding',
							false
						],
						['Test that a string that is only whitespace is treated as having padding',
							'                ',
							true
						],
						['Test that an empty string is not considered to have padding',
							'',
							false
						]
					]],
					['Uize.String.hugJoin',[
						['Test that specifying prefix, suffix, and separator works',
							[['A','B','C','D','E'],'<','>','-'],
							'<A>-<B>-<C>-<D>-<E>'
						],
						['Test that specifying empty prefix, suffix, and separator works',
							[['A','B','C','D','E'],'','',''],
							'ABCDE'
						],
						['Test that specifying number type prefix, suffix, and separator works',
							[['A','B','C','D','E'],0,1,NaN],
							'0A1NaN0B1NaN0C1NaN0D1NaN0E1'
						],
						['Test that specifying boolean type prefix, suffix, and separator works',
							[['A','B','C','D','E'],false,true,true],
							'falseAtruetruefalseBtruetruefalseCtruetruefalseDtruetruefalseEtrue'
						],
						['Test that specifying object type prefix, suffix, and separator works',
							[
								['A','B','C','D','E'],
								Uize.Class.Value ({value:'<'}),
								Uize.Class.Value ({value:'>'}),
								Uize.Class.Value ({value:'-'})
							],
							'<A>-<B>-<C>-<D>-<E>'
						],
						['Test that specifying just prefix and suffix, but no separator, works',
							[['A','B','C','D','E'],'<','>'],
							'<A><B><C><D><E>'
						],
						['Test that specifying an empty array produces an empty string result',
							[[],'<','>','-'],
							''
						],
						['Test that specifying a non-zero length array that is unpopulated (elements are empty) works',
							[new Array (5),'<','>','-'],
							'<>-<>-<>-<>-<>'
						],
						['Test that specifying array containing different value types works',
							[[1,true,'hello',Infinity,NaN,null,undefined],'<','>','-'],
							'<1>-<true>-<hello>-<Infinity>-<NaN>-<>-<>'
						]
					]],
					['Uize.String.joinUsingSuffixPriority',[
						['Test when max length is greater than combined lengths of prefix and suffix',
							['prefix',' - suffix',20],
							'prefix - suffix'
						],
						['Test when max length is equal to combined lengths of prefix and suffix',
							['prefix',' - suffix',15],
							'prefix - suffix'
						],
						['Test when max length is less than combined lengths of prefix and suffix',
							['prefix',' - suffix',12],
							'pre - suffix'
						],
						['Test when max length is equal to length of suffix',
							['prefix',' - suffix',9],
							' - suffix'
						],
						['Test when max length is less than length of suffix',
							['prefix',' - suffix',6],
							' - suf'
						],
						['Test when max length is zero',
							['prefix',' - suffix',0],
							''
						],
						['Test when max length is negative',
							['prefix',' - suffix',-1],
							''
						]
					]],
					['Uize.String.limitLength',[
						['Test that max length of zero produces empty string',
							['0123456789',0],
							''
						],
						['Test that negative max length produces empty string',
							['0123456789',-1],
							''
						],
						['Test that max length greater than source string length produces source string',
							['0123456789',15],
							'0123456789'
						],
						['Test that max length equal to source string length produces source string',
							['0123456789',10],
							'0123456789'
						],
						['Test that max length less than source string length produces correct result',
							['0123456789',9],
							'012345...'
						],
						['Test that max length equal to continuation string length produces just truncated source string',
							['0123456789',3],
							'012'
						],
						['Test that max length less than continuation string length produces just truncated source string',
							['0123456789',1],
							'0'
						]
					]],
					['Uize.String.startsWith',[
						['Test that an empty string starts with an empty string',
							['',''],
							true
						],
						['Test that a non-empty string starts with an empty string',
							['prefixSuffix',''],
							true
						],
						['Test that a suffix of source string doesn\'t test as a prefix',
							['prefixSuffix','Suffix'],
							false
						],
						['Test that prefix of larger string doesn\'t start with that larger string',
							['prefix','prefixSuffix'],
							false
						],
						['Test that suffix of larger string doesn\'t start with that larger string',
							['Suffix','prefixSuffix'],
							false
						],
						['Test that source string starts with itself',
							['prefixSuffix','prefixSuffix'],
							true
						],
						['Test that spaces in the middle of test string are significant',
							['prefixSuffix','prefix Suffix'],
							false
						],
						['Test that spaces at the end of test string are significant',
							['prefixSuffix','prefixSuffix   '],
							false
						],
						['Test that spaces at beginning of test string are significant',
							['prefixSuffix','   prefixSuffix'],
							false
						],
						['Test that string doesn\'t end with uppercase version of itself',
							['prefixSuffix','PREFIXSUFFIX'],
							false
						],
						['Test that string does start with a leading portion of itself',
							['prefixSuffix','prefix'],
							true
						],
						['Test that one character prefix works correctly',
							['prefixSuffix','p'],
							true
						],
						['Test that one character non-prefix works correctly',
							['prefixSuffix','-'],
							false
						],
						['Test that two character prefix works correctly',
							['prefixSuffix','pr'],
							true
						],
						['Test that two character non-prefix works correctly (first of two characters is non-match)',
							['prefixSuffix','-r'],
							false
						],
						['Test that two character non-prefix works correctly (second of two characters is non-match)',
							['prefixSuffix','p-'],
							false
						]
					]],
					['Uize.String.endsWith',[
						['Test that an empty string ends with an empty string',
							['',''],
							true
						],
						['Test that a non-empty string ends with an empty string',
							['prefixSuffix',''],
							true
						],
						['Test that a prefix of source string doesn\'t test as a suffix',
							['prefixSuffix','prefix'],
							false
						],
						['Test that prefix of larger string doesn\'t end with that larger string',
							['prefix','prefixSuffix'],
							false
						],
						['Test that suffix of larger string doesn\'t end with that larger string',
							['Suffix','prefixSuffix'],
							false
						],
						['Test that source string ends with itself',
							['prefixSuffix','prefixSuffix'],
							true
						],
						['Test that spaces in the middle of test string are significant',
							['prefixSuffix','prefix Suffix'],
							false
						],
						['Test that spaces at the end of test string are significant',
							['prefixSuffix','prefixSuffix   '],
							false
						],
						['Test that spaces at beginning of test string are significant',
							['prefixSuffix','   prefixSuffix'],
							false
						],
						['Test that string doesn\'t end with uppercase version of itself',
							['prefixSuffix','PREFIXSUFFIX'],
							false
						],
						['Test that string does end with a tail portion of itself',
							['prefixSuffix','Suffix'],
							true
						],
						['Test that one character suffix works correctly',
							['prefixSuffix','x'],
							true
						],
						['Test that one character non-suffix works correctly',
							['prefixSuffix','-'],
							false
						],
						['Test that two character suffix works correctly',
							['prefixSuffix','ix'],
							true
						],
						['Test that two character non-suffix works correctly (first of two characters is non-match)',
							['prefixSuffix','-x'],
							false
						],
						['Test that two character non-suffix works correctly (second of two characters is non-match)',
							['prefixSuffix','i-'],
							false
						]
					]],
					['Uize.String.contains',[
						['Test that an empty string contains an empty string',
							['',''],
							true
						],
						['Test that a non-empty string contains an empty string',
							['prefixMiddleSuffix',''],
							true
						],
						['Test that a string can\'t contain a string of which it is only a prefix',
							['prefix','prefixMiddleSuffix'],
							false
						],
						['Test that a string can\'t contain a string of which it is only a middle portion',
							['Middle','prefixMiddleSuffix'],
							false
						],
						['Test that a string can\'t contain a string of which it is only a suffix',
							['Suffix','prefixMiddleSuffix'],
							false
						],
						['Test that a string does contain a string that is its prefix',
							['prefixMiddleSuffix','prefix'],
							true
						],
						['Test that a string does contain a string that is a middle portion of it',
							['prefixMiddleSuffix','Middle'],
							true
						],
						['Test that a string does contain a string that is its suffix',
							['prefixMiddleSuffix','Suffix'],
							true
						]
					]],
					['Uize.String.repeat',[
						['Test that repeating an empty string one time produces an empty string',
							['',10],
							''
						],
						['Test that repeating an empty string a positive number of times produces an empty string',
							['',10],
							''
						],
						['Test that repeating a non-empty string zero times produces an empty string',
							['Blah',0],
							''
						],
						['Test that repeating a non-empty string a negative number of times produces an empty string',
							['Blah',-10],
							''
						],
						['Test that repeating a non-empty string one time produces that same string',
							['Blah',1],
							'Blah'
						],
						['Test that repeating a non-empty string a positive number of times works correctly',
							['Blah',10],
							'BlahBlahBlahBlahBlahBlahBlahBlahBlahBlah'
						],
						['Test that repeating a single space a positive number of times works correctly',
							[' ',10],
							'          '
						],
						{
							title:'Test that repeated use of repeating a single space works correctly (given the way that this special case is handled)',
							test:function () {
								return (
									Uize.String.repeat (' ',15) == '               ' &&
									Uize.String.repeat (' ',20) == '                    ' &&
									Uize.String.repeat (' ',9) == '         '
								);
							}
						}
					]],
					['Uize.String.trim',[
						['Test that trimming empty string produces empty string','',''],
						['Test that trimming string with no padding returns the same string','hello','hello'],
						['Test that trimming string with leading spaces works','   hello','hello'],
						['Test that trimming string with trailing spaces works','hello   ','hello'],
						['Test that trimming string with leading and trailing spaces works','   hello   ','hello'],
						['Test that trimming does not affect inner whitesapce',' hello \t there ','hello \t there'],
						['Test that trimming string with tab padding works','\t\thello\t\t','hello'],
						['Test that left-trimming can be performed by specifying -1 for the optional side parameter',
							['   hello   ',-1],
							'hello   '
						],
						['Test that right-trimming can be performed by specifying 1 for the optional side parameter',
							['   hello   ',1],
							'   hello'
						],
						['Test that trimming on both sides can be performed by specifying 0 for the optional side parameter',
							['   hello   ',0],
							'hello'
						]
					]],
					['Uize.String.trimLeft',[
						['Test that left-trimming empty string produces empty string','',''],
						['Test that left-trimming string with no padding returns the same string','hello','hello'],
						['Test that left-trimming string with leading spaces works','   hello','hello'],
						['Test that left-trimming string with trailing spaces works','hello   ','hello   '],
						['Test that left-trimming string with leading and trailing spaces works','   hello   ','hello   '],
						['Test that left-trimming does not affect inner whitesapce',' hello \t there ','hello \t there '],
						['Test that left-trimming string with tab padding works','\t\thello\t\t','hello\t\t']
					]],
					['Uize.String.trimRight',[
						['Test that right-trimming empty string produces empty string','',''],
						['Test that right-trimming string with no padding returns the same string','hello','hello'],
						['Test that right-trimming string with leading spaces works','   hello','   hello'],
						['Test that right-trimming string with trailing spaces works','hello   ','hello'],
						['Test that right-trimming string with leading and trailing spaces works','   hello   ','   hello'],
						['Test that right-trimming does not affect inner whitesapce',' hello \t there ',' hello \t there'],
						['Test that right-trimming string with tab padding works','\t\thello\t\t','\t\thello']
					]]
				])
			]
		});
	}
});

