/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Test.Uize.Str.Lines Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2010-2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Test
	importance: 2
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Test.Uize.Str.Lines= module defines a suite of unit tests for the =Uize.Str.Lines= module.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Test.Uize.Str.Lines',
	required:'Uize.Json',
	builder:function () {
		'use strict';

		return Uize.Test.resolve ({
			title:'Test for Uize.Str.Lines Module',
			test:[
				Uize.Test.requiredModulesTest ('Uize.Str.Lines'),
				Uize.Test.staticMethodsTest ([
					['Uize.Str.Lines.forEach',[
						{
							title:'There is one iteration for an empty string',
							test:function () {
								var _count = 0;
								Uize.Str.Lines.forEach ('',function () {_count++});
								return _count == 1;
							}
						},
						{
							title:'There is only one iteration for a single line string',
							test:function () {
								var _count = 0;
								Uize.Str.Lines.forEach ('line 1',function () {_count++});
								return _count == 1;
							}
						},
						{
							title:'Test that line handler function receives lineChars parameter correctly, for all types of line contents',
							test:function () {
								var _result = [];
								Uize.Str.Lines.forEach (
									'\n' +
									'\r' +
									'\r\n' +
									'line with no padding\r' +
									'    line with leading whitespace\n' +
									'line with trailing whitesapce    \r\n' +
									'    line with leading and trailing whitespace    \n' +
									'    \r'
									,
									function (_lineChars) {_result.push (_lineChars)}
								);
								return this.expect (
									[
										'',
										'',
										'',
										'line with no padding',
										'    line with leading whitespace',
										'line with trailing whitesapce    ',
										'    line with leading and trailing whitespace    ',
										'    '
									],
									_result
								);
							}
						},
						{
							title:'Test that line handler function receives linebreakChars parameter correctly, for all types of line contents',
							test:function () {
								var _result = [];
								Uize.Str.Lines.forEach (
									'\n' +
									'\r' +
									'\r\n' +
									'line with no padding\r' +
									'    line with leading whitespace\n' +
									'line with trailing whitesapce    \r\n' +
									'    line with leading and trailing whitespace    \n' +
									'    \r'
									,
									function (_lineChars,_linebreakChars) {_result.push (_linebreakChars)}
								);
								return this.expect (
									[
										'\n',
										'\r',
										'\r\n',
										'\r',
										'\n',
										'\r\n',
										'\n',
										'\r'
									],
									_result
								);
							}
						},
						{
							title:'Test that line handler function receives lineNo parameter correctly, for all types of line contents',
							test:function () {
								var _result = [];
								Uize.Str.Lines.forEach (
									'\n' +
									'\r' +
									'\r\n' +
									'line with no padding\r' +
									'    line with leading whitespace\n' +
									'line with trailing whitesapce    \r\n' +
									'    line with leading and trailing whitespace    \n' +
									'    \r'
									,
									function (_lineChars,_linebreakChars,_lineNo) {_result.push (_lineNo)}
								);
								return this.expect ([0,1,2,3,4,5,6,7],_result);
							}
						},
						{
							title:'Returning false in the line handler function can be used to terminate iteration',
							test:function () {
								var _result = -1;
								Uize.Str.Lines.forEach (
									'cat\n' +
									'dog\n' +
									'apple\n' +
									'\n' +
									'pear',
									function (_line) {
										_result++;
										return !!_line;
									}
								);
								return this.expect (3,_result);
							}
						}
					]],
					['Uize.Str.Lines.getIndentRange',[
						['Calling with no parameters returns 0 for both minValue and maxValue',
							[],
							{minValue:0,maxValue:0}
						],
						['An empty string produces 0 for both minValue and maxValue',
							'',
							{minValue:0,maxValue:0}
						],
						['An unindented single line string produces 0 for both minValue and maxValue',
							['hello','\t'],
							{minValue:0,maxValue:0}
						],
						['An indented single line string produces the same value for both minValue and maxValue',
							['\t\thello','\t'],
							{minValue:2,maxValue:2}
						],
						['The default for indentChars parameter is a single tab',
							'\t\thello',
							{minValue:2,maxValue:2}
						],
						['An unintended multi-line string produces 0 for both minValue and maxValue',
							'hello\n' +
							'there\n'
							,
							{minValue:0,maxValue:0}
						],
						['Test that a multi-line string with different indenting produces correct minValue and maxValue',
							'\tone indent\n' +
							'\t\ttwo indents\n' +
							'\t\t\tthree indents\n' +
							'\tone indent again\n'
							,
							{minValue:1,maxValue:3}
						],
						['Test that a multi-line string using linefeed (LF) characters is handled correctly',
							'\tone indent\n' +
							'\t\ttwo indents\n' +
							'\t\t\tthree indents\n'
							,
							{minValue:1,maxValue:3}
						],
						['Test that a multi-line string using carriage return (CR) characters is handled correctly',
							'\tone indent\r' +
							'\t\ttwo indents\r' +
							'\t\t\tthree indents\r'
							,
							{minValue:1,maxValue:3}
						],
						['Test that a multi-line string using carriage return plus linefeed characters is handled correctly',
							'\tone indent\r\n' +
							'\t\ttwo indents\r\n' +
							'\t\t\tthree indents\r\n'
							,
							{minValue:1,maxValue:3}
						],
						['Test that a multi-line string using a mix of different types of linebreaks is handled correctly',
							'\tone indent\n' +
							'\t\ttwo indents\r' +
							'\t\t\tthree indents\r\n'
							,
							{minValue:1,maxValue:3}
						],
						['Test that specifying three spaces for indentChars works for a multi-line string with different levels of indenting',
							[
								'   one indent\n' +
								'      two indents\n' +
								'         three indents\n' +
								'   one indent again',
								'   '
							],
							{minValue:1,maxValue:3}
						],
						['Specifying an empty string for indentChars produces 0 for both minValue and maxValue',
							['\t\thello',''],
							{minValue:0,maxValue:0}
						],
						['Blank lines are ignored when computing indent range, even blank lines with indents',
							[
								'\tone indent\n' +
								'\n' +          // blank line with no indents
								'\t\t\t\t\n' +  // blank line with four indents
								'\t\ttwo indents\n' +
								'\t\t\tthree indents\n' +
								'\tone indent again\n',
								'\t'
							],
							{minValue:1,maxValue:3}
						]
					]],
					['Uize.Str.Lines.indent',[
						['The value true is the default for the indentFirstLine parameter',
							['line 1\nline 2',2,'\t'],
							'\t\tline 1\n\t\tline 2'
						],
						['A single tab is the default for the indentChars parameter',
							['line 1\nline 2',2],
							'\t\tline 1\n\t\tline 2'
						],
						['The source string is not indented when indentAmount is not specified',
							['line 1\nline 2'],
							'line 1\nline 2'
						],
						['The source string is not indented when 0 is specified for indentAmount parameter',
							['line 1\nline 2',0],
							'line 1\nline 2'
						],
						['The source string is not indented when empty string is specified for indentChars parameter',
							['line 1\nline 2',10,''],
							'line 1\nline 2'
						],
						['Test that specifying false for the optional indentFirstLine parameter works correctly',
							['line 1\nline 2',2,'\t',false],
							'line 1\n\t\tline 2'
						],
						['Indenting an already indented string results in additional indenting being applied to all lines',
							['\tline 1\n\t\tline 2\n\tline 3',1],
							'\t\tline 1\n\t\t\tline 2\n\t\tline 3'
						],
						['Test that unindenting an indented string works correctly',
							['\tline 1\n\t\tline 2\n\tline 3',-1],
							'line 1\n\tline 2\nline 3'
						],
						['Test that over-unindenting an indented string works correctly',
							['\tline 1\n\t\tline 2\n\tline 3',-2],
							'line 1\nline 2\nline 3'
						],
						['Blank lines are not indented, while non-empty lines are',
							['line 1\n\nline 3',1],
							'\tline 1\n\n\tline 3'
						],
						['Blank lines with indentation are unindented',
							['\tline 1\n\t\tline 2\n\tline 3\n\t\t',-2],
							'line 1\nline 2\nline 3\n'
						],
						['Indenting is applied to all lines, regardless of what line separators used (LF, CR, and CRLF)',
							['line 1\rline 2\nline 3\r\nline 4\r\n\r\nline 6\r\rline 8\n\nline 10',1],
							'\tline 1\r\tline 2\n\tline 3\r\n\tline 4\r\n\r\n\tline 6\r\r\tline 8\n\n\tline 10'
						],
						['Test that indenting with different indentChars works correctly',
							['line 1\nline 2',1,'---'],
							'---line 1\n---line 2'
						],
						['Indenting an empty string produces an empty string',
							['',2],
							''
						]
					]],
					['Uize.Str.Lines.normalizeIndent',[
						['Normalizing indent for an empty string produces an empty string',
							'',
							''
						],
						['Normalizing a single line string with no indent has no effect',
							'line with trailing spaces   ',
							'line with trailing spaces   '
						],
						['Normalizing a single line string with an indent results in the indent being removed',
							'\t\tline with indent and trailing spaces   ',
							'line with indent and trailing spaces   '
						],
						['Normalizing a multi-line string that has indentation but that is already normalized has no effect',
							'line 1\n' +
							'\tline 2\n' +
							'\t\tline 3\n' +
							'\tline 4'
							,
							'line 1\n' +
							'\tline 2\n' +
							'\t\tline 3\n' +
							'\tline 4'
						],
						['Test that a multi-line string that has indentation that is not normalized is handled correctly',
							'\t\t\tline 1\n' +
							'\t\t\t\tline 2\n' +
							'\t\t\t\t\tline 3\n' +
							'\t\t\t\tline 4'
							,
							'line 1\n' +
							'\tline 2\n' +
							'\t\tline 3\n' +
							'\tline 4'
						],
						['Indented blank lines are unindented by the same amount as non-empty lines',
							'\t\t\tline 1\n' +
							'\t\t\t\tline 2\n' +
							'\t\t\t\t\tline 3\n' +
							'\t\t\t\tline 4\n' +
							'\t\t\t\t\t\t\t\n'
							,
							'line 1\n' +
							'\tline 2\n' +
							'\t\tline 3\n' +
							'\tline 4\n' +
							'\t\t\t\t\n'
						],
						['Completely blank lines don\'t impact the amount of unindenting needed for normalizing',
							'\t\t\tline 1\n' +
							'\t\t\t\tline 2\n' +
							'\t\t\t\t\tline 3\n' +
							'\t\t\t\tline 4\n' +
							'\n'
							,
							'line 1\n' +
							'\tline 2\n' +
							'\t\tline 3\n' +
							'\tline 4\n' +
							'\n'
						],
						['Test that different indent characters specified in the indentChars parameter are handled correctly',
							[
								'         line 1\n' +
								'            line 2\n' +
								'               line 3\n' +
								'            line 4'
								,
								'   '
							],
							'line 1\n' +
							'   line 2\n' +
							'      line 3\n' +
							'   line 4'
						]
					]],
					['Uize.Str.Lines.modify',[
						['Test that a single line string is handled correctly',
							['line 1',function (_line) {return _line.toUpperCase ()}],
							'LINE 1'
						],
						['Test that a multi-line string with different linebreak characters is handled correctly',
							[
								'line 1\n' +
								'line 2\r' +
								'line 3\r\n' +
								'line 4',
								function (_line) {return _line.toUpperCase ()}
							],
							'LINE 1\n' +
							'LINE 2\r' +
							'LINE 3\r\n' +
							'LINE 4'
						],
						['Test that line number parameter is passed to line modifier function with expected values',
							[
								'line 1\n' +
								'line 2\r' +
								'line 3\r\n' +
								'line 4',
								function (_line,_linebreakChars,_lineNo) {return '[' + (_lineNo + 1) + '] ' + _line}
							],
							'[1] line 1\n' +
							'[2] line 2\r' +
							'[3] line 3\r\n' +
							'[4] line 4'
						],
						['Always returning false in the line modifier function removes all lines',
							[
								'line 1\n' +
								'line 2\r' +
								'line 3\r\n' +
								'line 4',
								Uize.returnFalse
							],
							''
						],
						['Always returning true in the line modifier function retains all lines',
							[
								'line 1\n' +
								'line 2\r' +
								'line 3\r\n' +
								'line 4',
								Uize.returnTrue
							],
							'line 1\n' +
							'line 2\r' +
							'line 3\r\n' +
							'line 4'
						],
						['Removing every other line, where the line modifier function returns a boolean',
							[
								'line 1\n' +
								'line 2\r' +
								'line 3\r\n' +
								'line 4',
								function (_line,_linebreakChars,_lineNo) {return !(_lineNo % 2)}
							],
							'line 1\n' +
							'line 3\r\n'
						]
					]],
					['Uize.Str.Lines.removeBlanks',[
						['An empty string remains an empty string when removing blank lines',
							'',
							''
						],
						['Removing blank lines from a non-empty single line string has no effect',
							'line 1',
							'line 1'
						],
						['Removing blank lines from a multi-line string without blank lines has no effect',
							'line 1\n' +
							'line 2\r' +
							'line 3\r\n' +
							'line 4'
							,
							'line 1\n' +
							'line 2\r' +
							'line 3\r\n' +
							'line 4'
						],
						['Test that removing blank lines from a multi-line string with blank lines works correctly',
							'\n' +
							'\r' +
							'\r\n' +
							'non-blank line 1\n' +
							'\t\t\t\r' +
							'non-blank line 2\r' +
							'   \n' +
							'non-blank line 3\r\n' +
							'  \t \r\n' +
							'non-blank line 4'
							,
							'non-blank line 1\n' +
							'non-blank line 2\r' +
							'non-blank line 3\r\n' +
							'non-blank line 4'
						],
						['Lines that are only whitespace are not removed when the value true is specified for the optional onlyCompletelyEmpty parameter',
							[
								'\n' +
								'\r' +
								'\r\n' +
								'non-blank line 1\n' +
								'\t\t\t\r' +
								'non-blank line 2\r' +
								'   \n' +
								'non-blank line 3\r\n' +
								'  \t \r\n' +
								'non-blank line 4',
								true
							],
							'non-blank line 1\n' +
							'\t\t\t\r' +
							'non-blank line 2\r' +
							'   \n' +
							'non-blank line 3\r\n' +
							'  \t \r\n' +
							'non-blank line 4'
						]
					]],
					['Uize.Str.Lines.split',[
						['Test splitting lines that are delimited by carriage return characters',
							'line 1\rline 2\rline 3\rline 4',
							['line 1','line 2','line 3','line 4']
						],
						['Test splitting lines that are delimited by line feed characters',
							'line 1\nline 2\nline 3\nline 4',
							['line 1','line 2','line 3','line 4']
						],
						['Test splitting lines that are delimited by coupled carriage return and line feed characters',
							'line 1\r\nline 2\r\nline 3\r\nline 4',
							['line 1','line 2','line 3','line 4']
						],
						['Test splitting lines that are delimited by different types of line separators',
							'line 1\rline 2\nline 3\r\nline 4',
							['line 1','line 2','line 3','line 4']
						],
						['Multiple consecutive line separators produces multiple blank line entries in array',
							'line 1\n\n\r\n\rline 2',
							['line 1','','','','line 2']
						],
						['A trailing linefeed character produces a blank line element at the end of the array',
							'line 1\rline 2\nline 3\r\nline 4\n',
							['line 1','line 2','line 3','line 4','']
						],
						['A leading linefeed character produces a blank line element at the beginning of the array',
							'\nline 1\rline 2\nline 3\r\nline 4',
							['','line 1','line 2','line 3','line 4']
						],
						['Whitespace around line separators is preserved',
							' line 1 \r\tline 2\t\nline 3 \t \r\n line 4 ',
							[' line 1 ','\tline 2\t','line 3 \t ',' line 4 ']
						],
						['Splitting a string with no line separators produces an array with one element',
							'line 1',
							['line 1']
						],
						['Splitting an empty string produces an array with one empty string element',
							'',
							['']
						]
					]],
					['Uize.Str.Lines.switchLinebreakType',[
						['Switching linebreaks for an empty string produces an empty string',
							'',
							''
						],
						['Switching linebreaks for a single line string with no linebreak has no effect',
							'line without linebreak',
							'line without linebreak'
						],
						['Test that switching linebreaks for a single line string with a linebreak works correctly',
							['line with linebreak\r','\n'],
							'line with linebreak\n'
						],
						['A single linefeed (LF) character is the default for the linebreakChars parameter',
							'line with linebreak\r',
							'line with linebreak\n'
						],
						['Test that switching linebreaks for a multi-line string with different linebreaks works correctly',
							[
								'\n' +
								'\r' +
								'\r\n' +
								'\t\n' +
								' \n' +
								'non-blank line with no padding\r' +
								'   non-blank line with leading whitespace\n' +
								'non-blank line with trailing whitespace   \r' +
								'   non-blank line with leading and trailing whitespace   \r\n',
								'\r\n'
							],
							'\r\n' +
							'\r\n' +
							'\r\n' +
							'\t\r\n' +
							' \r\n' +
							'non-blank line with no padding\r\n' +
							'   non-blank line with leading whitespace\r\n' +
							'non-blank line with trailing whitespace   \r\n' +
							'   non-blank line with leading and trailing whitespace   \r\n'
						]
					]],
					['Uize.Str.Lines.switchIndentType',[
						['Switching indent type for an empty string has no effect',
							['','\t','    '],
							''
						],
						['Switching indent type for a non-empty string with no indenting has no effect',
							['line 1','\t','    '],
							'line 1'
						],
						['Test that switching indent type for a single line string with indenting works as expected',
							['\tline 1','\t','    '],
							'    line 1'
						],
						['A single tab character is the default for the newIndentChars parameter',
							['    line 1','    '],
							'\tline 1'
						],
						['Four spaces is the default for the oldIndentChars parameter',
							'    line 1',
							'\tline 1'
						],
						['Test switching indentation from three spaces per indent level to four spaces per indent level',
							['      line 1','   ','    '],
							'        line 1'
						],
						['Test that switching indent type works as expected with multi-line strings',
							'no indent\n' +
							'    one level of indent\n' +
							'        two levels of indent\n' +
							'            three levels of indent\n' +
							'            three levels of indent\n' +
							'        two levels of indent\n' +
							'    one level of indent\n' +
							'no indent'
							,
							'no indent\n' +
							'\tone level of indent\n' +
							'\t\ttwo levels of indent\n' +
							'\t\t\tthree levels of indent\n' +
							'\t\t\tthree levels of indent\n' +
							'\t\ttwo levels of indent\n' +
							'\tone level of indent\n' +
							'no indent'
						],
						['Switching indent type doesn\'t affect linebreak type and supports mixed linebreaks',
							'no indent\r' +
							'    one level of indent\n' +
							'        two levels of indent\r\n' +
							'            four levels of indent'
							,
							'no indent\r' +
							'\tone level of indent\n' +
							'\t\ttwo levels of indent\r\n' +
							'\t\t\tfour levels of indent'
						],
						['Switching indent type doesn\'t affect trailing whitespace in lines',
							'no indent    \r' +
							'    one level of indent\t\t\n' +
							'        two levels of indent    \t    \r\n' +
							'            four levels of indent '
							,
							'no indent    \r' +
							'\tone level of indent\t\t\n' +
							'\t\ttwo levels of indent    \t    \r\n' +
							'\t\t\tfour levels of indent '
						],
						['Indentation can be removed by specifying an empty string for the newIndentChars parameter',
							[
								'line 1\r' +
								'    line 2\n' +
								'        line 3\r\n' +
								'            line 4'
								,
								'    ',
								''
							],
							'line 1\r' +
							'line 2\n' +
							'line 3\r\n' +
							'line 4'
						]
					]],
					['Uize.Str.Lines.trim',[
						['A single blank line remains a blank string when trimmed',
							'',
							''
						],
						['A single non-blank line with no padding remains unchanged',
							'line 1',
							'line 1'
						],
						['A single non-blank line with padding is trimmed and padding is removed',
							' \tline 1 \t',
							'line 1'
						],
						['A multi-line string with some lines with padding is trimmed, respecting linebreaks',
							'\n' +
							'\r' +
							'\r\n' +
							'\t\n' +
							'   \n' +
							'non-blank line with no padding\n' +
							'   non-blank line with leading whitespace\n' +
							'non-blank line with trailing whitespace   \n' +
							'   non-blank line with leading and trailing whitespace   \n'
							,
							'\n' +
							'\r' +
							'\r\n' +
							'\n' +
							'\n' +
							'non-blank line with no padding\n' +
							'non-blank line with leading whitespace\n' +
							'non-blank line with trailing whitespace\n' +
							'non-blank line with leading and trailing whitespace\n'
						]
					]],
					['Uize.Str.Lines.trimLeft',[
						['A single blank line remains a blank string when trimmed',
							'',
							''
						],
						['A single non-blank line with no padding remains unchanged',
							'line 1',
							'line 1'
						],
						['A single non-blank line with padding is trimmed and padding is removed',
							' \tline 1 \t',
							'line 1 \t'
						],
						['A multi-line string with some lines with padding is trimmed, respecting linebreaks',
							'\n' +
							'\r' +
							'\r\n' +
							'\t\n' +
							'   \n' +
							'non-blank line with no padding\n' +
							'   non-blank line with leading whitespace\n' +
							'non-blank line with trailing whitespace   \n' +
							'   non-blank line with leading and trailing whitespace   \n'
							,
							'\n' +
							'\r' +
							'\r\n' +
							'\n' +
							'\n' +
							'non-blank line with no padding\n' +
							'non-blank line with leading whitespace\n' +
							'non-blank line with trailing whitespace   \n' +
							'non-blank line with leading and trailing whitespace   \n'
						]
					]],
					['Uize.Str.Lines.trimRight',[
						['A single blank line remains a blank string when trimmed',
							'',
							''
						],
						['A single non-blank line with no padding remains unchanged',
							'line 1',
							'line 1'
						],
						['A single non-blank line with padding is trimmed and padding is removed',
							' \tline 1 \t',
							' \tline 1'
						],
						['A multi-line string with some lines with padding is trimmed, respecting linebreaks',
							'\n' +
							'\r' +
							'\r\n' +
							'\t\n' +
							'   \n' +
							'non-blank line with no padding\n' +
							'   non-blank line with leading whitespace\n' +
							'non-blank line with trailing whitespace   \n' +
							'   non-blank line with leading and trailing whitespace   \n'
							,
							'\n' +
							'\r' +
							'\r\n' +
							'\n' +
							'\n' +
							'non-blank line with no padding\n' +
							'   non-blank line with leading whitespace\n' +
							'non-blank line with trailing whitespace\n' +
							'   non-blank line with leading and trailing whitespace\n'
						]
					]],
					['Uize.Str.Lines.getLinebreakType',[
						['Getting the linebreak type for an empty string returns the value of the defaultLinebreakChars parameter',
							['','~!@#'],
							'~!@#'
						],
						['The default for the defaultLinebreakChars parameter is a linefeed (LF) character',
							'',
							'\n'
						],
						['The defaultLinebreakChars parameter value is not used when source string has a linebreak',
							['line 1\n','~!@#'],
							'\n'
						],
						['A carriage return (CR) character is detected as a linebreak type',
							['line 1\r','~!@#'],
							'\r'
						],
						['A combination carriage return plus linefeed character (CRLF) is detected as a linebreak type',
							['line 1\r\n','~!@#'],
							'\r\n'
						],
						['The first linebreak detected determines the linebreak type',
							[
								'line 1\r' +
								'line 2\n' +
								'line 3\r\n'
								,
								'~!@#'
							],
							'\r'
						]
					]],
					['Uize.Str.Lines.removeMatching',[
						['Removing matching lines from an empty string produces an empty string',
							['',/^\d+:/],
							''
						],
						['All lines matching a specified regular expression are removed',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								/^\d+:/
							],
							'line 1\n' +
							'line 4'
						],
						['All lines matched by a specified matching function are removed',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								function (_line) {return /^\d+:/.test (_line)}
							],
							'line 1\n' +
							'line 4'
						],
						['A matching function that always returns false will have no effect on the source string',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								Uize.returnFalse
							],
							'line 1\n' +
							'2: line 2\n' +
							'3: line 3\n' +
							'line 4'
						],
						['A matching function that always returns true produces an empty string',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								Uize.returnTrue
							],
							''
						],
						['A matching regular expression that matches no lines will have no effect',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								/^hello/
							],
							'line 1\n' +
							'2: line 2\n' +
							'3: line 3\n' +
							'line 4'
						],
						['A matching regular expression that matches all lines produces an empty string',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								/.*/
							],
							''
						],
						['It is sufficient for a matching function to return a truthy value, and any truthy value is equivalent to the boolean value true',
							[
								'undefined\n' +
								'null\n' +
								'NaN\n' +
								'0\n' +
								'false\n' +
								'\'\'\n' +
								'{}\n' +
								'[]\n' +
								'function () {}\n' +
								'1\n' +
								'-1\n' +
								'Infinity\n' +
								'true\n' +
								'\'hello\'\n'
								,
								Uize.Json.from
							],
							'undefined\n' +
							'null\n' +
							'NaN\n' +
							'0\n' +
							'false\n' +
							'\'\'\n'
						]
					]],
					['Uize.Str.Lines.retainMatching',[
						['Retaining matching lines from an empty string produces an empty string',
							['',/^\d+:/],
							''
						],
						['All lines matching a specified regular expression are retained',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								/^\d+:/
							],
							'2: line 2\n' +
							'3: line 3\n'
						],
						['All lines matched by a specified matching function are retained',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								function (_line) {return /^\d+:/.test (_line)}
							],
							'2: line 2\n' +
							'3: line 3\n'
						],
						['A matching function that always returns false produces an empty string',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								Uize.returnFalse
							],
							''
						],
						['A matching function that always returns true will have no effect on the source string',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								Uize.returnTrue
							],
							'line 1\n' +
							'2: line 2\n' +
							'3: line 3\n' +
							'line 4'
						],
						['A matching regular expression that matches no lines produces an empty string',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								/^hello/
							],
							''
						],
						['A matching regular expression that matches all lines will have no effect',
							[
								'line 1\n' +
								'2: line 2\n' +
								'3: line 3\n' +
								'line 4'
								,
								/.*/
							],
							'line 1\n' +
							'2: line 2\n' +
							'3: line 3\n' +
							'line 4'
						],
						['It is sufficient for a matching function to return a truthy value, and any truthy value is equivalent to the boolean value true',
							[
								'undefined\n' +
								'null\n' +
								'NaN\n' +
								'0\n' +
								'false\n' +
								'\'\'\n' +
								'{}\n' +
								'[]\n' +
								'function () {}\n' +
								'1\n' +
								'-1\n' +
								'Infinity\n' +
								'true\n' +
								'\'hello\'\n'
								,
								Uize.Json.from
							],
							'{}\n' +
							'[]\n' +
							'function () {}\n' +
							'1\n' +
							'-1\n' +
							'Infinity\n' +
							'true\n' +
							'\'hello\'\n'
						]
					]]
				])
			]
		});
	}
});

