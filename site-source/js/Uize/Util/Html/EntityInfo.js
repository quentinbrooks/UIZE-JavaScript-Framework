/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Util.Html.EntityInfo Package
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013-2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Package
	importance: 0
	codeCompleteness: 100
	docCompleteness: 10
*/

/*?
	Introduction
		The =Uize.Util.Html.EntityInfo= package defines a lookup object that maps HTML entity character codes to description / categorization information about the entities.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Util.Html.EntityInfo',
	builder:function () {
		'use strict';

		var
			/*** Variables for Scruncher Optimization ***/
				_math = 'Math',
				_punctuation = 'Punctuation',
				_typography = 'Typography',
				_alphabet = 'Alphabet',
				_greek = 'Greek',
				_quotationMark = 'quotation mark',
				_capital = 'capital',
				_small = 'small',
				_whitespace = 'whitespace',
				_single = 'single',
				_double = 'double',
				_symbol = 'Symbol',
				_cardSuits = 'Cards suits',
				_comparison = 'comparison',
				_integerConversion = 'integer conversion',
				_left = 'left',
				_right = 'right',
				_fraction = 'fraction',
				_currency = 'Currency',
				_diacritic = 'Diacritic',
				_language = 'Language',
				_sets = 'sets',
				_logic = 'logic',

			/*** General Variables ***/
				_charCodeToEntityInfoLookup = {
					34:[_punctuation,_quotationMark,_double],
					38:[_language,'ampersand (conjunction)'],
					39:[_punctuation,'apostrophe'],
					60:[_math,_comparison,'less-than'],
					62:[_math,_comparison,'greater-than'],
					160:[_typography,_whitespace,'non-breaking space'],
					161:[_punctuation,'inverted exclamation mark'],
					162:[_currency,'Cent'],
					163:[_currency,'Pound'],
					164:[_currency,'currency symbol'],
					165:[_currency,'Yen'],
					166:[_symbol,'broken vertical bar'],
					167:[_typography,'section'],
					168:[_diacritic,'spacing','diaeresis'],
					169:[_symbol,'copyright'],
					170:[_language,'ordinal indicator','feminine'],
					171:[_punctuation,_quotationMark,'angle',_left],
					172:[_math,_logic,'negation'],
					173:[_typography,_whitespace,'soft hyphen'],
					174:[_symbol,'registered trademark'],
					175:['Macron','spacing'],
					176:[_math,'geometry','degree'],
					177:[_math,'plus-or-minus'],
					178:[_math,'superscript 2'],
					179:[_math,'superscript 3'],
					180:[_diacritic,'spacing','acute'],
					181:[_math,'micro'],
					182:[_typography,'pilcrow (paragraph)'],
					183:[_punctuation,'interpunct (middle dot)'],
					184:[_diacritic,'spacing','cedilla'],
					185:[_math,'superscript 1'],
					186:[_language,'ordinal indicator','masculine'],
					187:[_punctuation,_quotationMark,'angle',_right],
					188:[_math,_fraction,'1/4'],
					189:[_math,_fraction,'1/2'],
					190:[_math,_fraction,'3/4'],
					191:[_punctuation,'inverted question mark'],
					192:[_alphabet,'a',_capital,'grave accent'],
					193:[_alphabet,'a',_capital,'acute accent'],
					194:[_alphabet,'a',_capital,'circumflex accent'],
					195:[_alphabet,'a',_capital,'tilde'],
					196:[_alphabet,'a',_capital,'umlaut mark'],
					197:[_alphabet,'a',_capital,'ring'],
					198:[_alphabet,'ae',_capital],
					199:[_alphabet,'c',_capital,'cedilla'],
					200:[_alphabet,'e',_capital,'grave accent'],
					201:[_alphabet,'e',_capital,'acute accent'],
					202:[_alphabet,'e',_capital,'circumflex accent'],
					203:[_alphabet,'e',_capital,'umlaut mark'],
					204:[_alphabet,'i',_capital,'grave accent'],
					205:[_alphabet,'i',_capital,'acute accent'],
					206:[_alphabet,'i',_capital,'circumflex accent'],
					207:[_alphabet,'i',_capital,'umlaut mark'],
					208:[_alphabet,'eth',_capital,'Icelandic'],
					209:[_alphabet,'n',_capital,'tilde'],
					210:[_alphabet,'o',_capital,'grave accent'],
					211:[_alphabet,'o',_capital,'acute accent'],
					212:[_alphabet,'o',_capital,'circumflex accent'],
					213:[_alphabet,'o',_capital,'tilde'],
					214:[_alphabet,'o',_capital,'umlaut mark'],
					215:[_math,'operator','multiplication'],
					216:[_alphabet,'o',_capital,'slash'],
					217:[_alphabet,'u',_capital,'grave accent'],
					218:[_alphabet,'u',_capital,'acute accent'],
					219:[_alphabet,'u',_capital,'circumflex accent'],
					220:[_alphabet,'u',_capital,'umlaut mark'],
					221:[_alphabet,'y',_capital,'acute accent'],
					222:[_alphabet,'thorn',_capital,'Icelandic'],
					223:[_alphabet,'s',_small,'sharp German'],
					224:[_alphabet,'s',_small,'grave accent'],
					225:[_alphabet,'a',_small,'acute accent'],
					226:[_alphabet,'a',_small,'circumflex accent'],
					227:[_alphabet,'a',_small,'tilde'],
					228:[_alphabet,'a',_small,'umlaut mark'],
					229:[_alphabet,'a',_small,'ring'],
					230:[_alphabet,'ae',_small],
					231:[_alphabet,'c',_small,'cedilla'],
					232:[_alphabet,'e',_small,'grave accent'],
					233:[_alphabet,'e',_small,'acute accent'],
					234:[_alphabet,'e',_small,'circumflex accent'],
					235:[_alphabet,'e',_small,'umlaut mark'],
					236:[_alphabet,'i',_small,'grave accent'],
					237:[_alphabet,'i',_small,'acute accent'],
					238:[_alphabet,'i',_small,'circumflex accent'],
					239:[_alphabet,'i',_small,'umlaut mark'],
					240:[_alphabet,'eth','small Icelandic'],
					241:[_alphabet,'n',_small,'tilde'],
					242:[_alphabet,'o',_small,'grave accent'],
					243:[_alphabet,'o',_small,'acute accent'],
					244:[_alphabet,'o',_small,'circumflex accent'],
					245:[_alphabet,'o',_small,'tilde'],
					246:[_alphabet,'o',_small,'umlaut mark'],
					247:[_math,'operator','division'],
					248:[_alphabet,'o',_small,'slash'],
					249:[_alphabet,'u',_small,'grave accent'],
					250:[_alphabet,'u',_small,'acute accent'],
					251:[_alphabet,'u',_small,'circumflex accent'],
					252:[_alphabet,'u',_small,'umlaut mark'],
					253:[_alphabet,'y','small yacute accent'],
					254:[_alphabet,'thorn',_small,'Icelandic'],
					255:[_alphabet,'y',_small,'umlaut mark'],
					338:[_alphabet,'oe',_capital,'ligature'],
					339:[_alphabet,'oe',_small,'ligature'],
					352:[_alphabet,'s',_capital,'with caron'],
					353:[_alphabet,'s',_small,'with caron'],
					376:[_alphabet,'y',_capital,'with diaeres'],
					402:[_alphabet,'f','with hook'],
					710:[_diacritic,'modifier letter circumflex accent'],
					732:[_symbol,'small tilde'],
					913:[_greek,'alpha',_capital],
					914:[_greek,'beta',_capital],
					915:[_greek,'gamma',_capital],
					916:[_greek,'delta',_capital],
					917:[_greek,'epsilon',_capital],
					918:[_greek,'zeta',_capital],
					919:[_greek,'eta',_capital],
					920:[_greek,'theta',_capital],
					921:[_greek,'iota',_capital],
					922:[_greek,'kappa',_capital],
					923:[_greek,'lambda',_capital],
					924:[_greek,'mu',_capital],
					925:[_greek,'nu',_capital],
					926:[_greek,'xi',_capital],
					927:[_greek,'omicron',_capital],
					928:[_greek,'pi',_capital],
					929:[_greek,'rho',_capital],
					931:[_greek,'sigma',_capital],
					932:[_greek,'tau',_capital],
					933:[_greek,'upsilon',_capital],
					934:[_greek,'phi',_capital],
					935:[_greek,'chi',_capital],
					936:[_greek,'psi',_capital],
					937:[_greek,'omega',_capital],
					945:[_greek,'alpha',_small],
					946:[_greek,'beta',_small],
					947:[_greek,'gamma',_small],
					948:[_greek,'delta',_small],
					949:[_greek,'epsilon',_small],
					950:[_greek,'zeta',_small],
					951:[_greek,'eta',_small],
					952:[_greek,'theta',_small],
					953:[_greek,'iota',_small],
					954:[_greek,'kappa',_small],
					955:[_greek,'lambda',_small],
					956:[_greek,'mu',_small],
					957:[_greek,'nu',_small],
					958:[_greek,'xi',_small],
					959:[_greek,'omicron',_small],
					960:[_greek,'pi',_small],
					961:[_greek,'rho',_small],
					962:[_greek,'sigmaf',_small],
					963:[_greek,'sigma',_small],
					964:[_greek,'tau',_small],
					965:[_greek,'upsilon',_small],
					966:[_greek,'phi',_small],
					967:[_greek,'chi',_small],
					968:[_greek,'psi',_small],
					969:[_greek,'omega',_small],
					977:[_greek,'theta symbol'],
					978:[_greek,'upsilon symbol'],
					982:[_greek,'pi symbol'],
					8194:[_typography,_whitespace,'en space'],
					8195:[_typography,_whitespace,'em space'],
					8201:[_typography,_whitespace,'thin space'],
					8204:[_typography,_whitespace,'zero width non-joiner'],
					8205:[_typography,_whitespace,'zero width joiner'],
					8206:[_typography,'left-to-right mark'],
					8207:[_typography,'right-to-left mark'],
					8211:[_punctuation,'dash','en dash'],
					8212:[_punctuation,'dash','em dash'],
					8216:[_punctuation,_quotationMark,_single,_left],
					8217:[_punctuation,_quotationMark,_single,_right],
					8218:[_punctuation,_quotationMark,_single,'low-9'],
					8220:[_punctuation,_quotationMark,_double,_left],
					8221:[_punctuation,_quotationMark,_double,_right],
					8222:[_punctuation,_quotationMark,_double,'low-9'],
					8224:[_symbol,'dagger'],
					8225:[_symbol,'dagger',_double],
					8226:[_symbol,'bullet'],
					8230:[_punctuation,'horizontal ellipsis'],
					8240:[_symbol,'per mille'],
					8242:[_symbol,'minutes'],
					8243:[_symbol,'seconds'],
					8249:[_punctuation,_quotationMark,_single,'angle',_left],
					8250:[_punctuation,_quotationMark,_single,'angle',_right],
					8254:['Macron','overline'],
					8260:[_math,_fraction,'slash (solidus)'],
					8364:[_currency,'Euro'],
					8465:[_math,'complex number','imaginary part'],
					8472:[_math,'script capital P (power set)'],
					8476:[_math,'complex number','real part'],
					8482:[_symbol,'trademark'],
					8501:[_math,'aleph (first transfinite cardinal)'],
					8592:['Arrow',_single,_left],
					8593:['Arrow',_single,'up'],
					8594:['Arrow',_single,_right],
					8595:['Arrow',_single,'down'],
					8596:['Arrow',_single,'left right'],
					8629:['Arrow','carriage return'],
					8656:['Arrow',_double,_left],
					8657:['Arrow',_double,'up'],
					8658:['Arrow',_double,_right],
					8659:['Arrow',_double,'down'],
					8660:['Arrow',_double,'left right'],
					8704:[_math,_logic,'for all'],
					8706:[_math,'partial derivative'],
					8707:[_math,_logic,'exists'],
					8709:[_math,_sets,'empty'],
					8711:[_math,'calculus','nabla'],
					8712:[_math,_sets,'isin (element of)'],
					8713:[_math,_sets,'notin (not an element of)'],
					8715:[_math,_sets,'ni (contains element)'],
					8719:[_math,'series','prod'],
					8721:[_math,'series','sum'],
					8722:[_math,'operator','minus'],
					8727:[_math,'lowast'],
					8730:[_math,'operator','square root'],
					8733:[_math,'proportional to'],
					8734:[_math,'infinity'],
					8736:[_math,'geometry','angle'],
					8743:[_math,_logic,'and'],
					8744:[_math,_logic,'or'],
					8745:[_math,_sets,'cap'],
					8746:[_math,_sets,'cup'],
					8747:[_math,'integral'],
					8756:[_math,'proofs','therefore'],
					8764:[_math,_comparison,'similar to'],
					8773:[_math,'geometry','congruent to'],
					8776:[_math,_comparison,'almost equal'],
					8800:[_math,_comparison,'not equal'],
					8801:[_math,_comparison,'equivalent'],
					8804:[_math,_comparison,'less or equal'],
					8805:[_math,_comparison,'greater or equal'],
					8834:[_math,_sets,'greater or equal'],
					8835:[_math,_sets,'superset of'],
					8836:[_math,_sets,'not subset of'],
					8838:[_math,_sets,'subset or equal'],
					8839:[_math,_sets,'superset or equal'],
					8853:[_math,'direct sum'],
					8855:[_math,'tensor product'],
					8869:[_math,'geometry','perpendicular'],
					8901:[_math,'operator','dot operator'],
					8968:[_math,_integerConversion,'ceiling',_left],
					8969:[_math,_integerConversion,'ceiling',_right],
					8970:[_math,_integerConversion,'floor',_left],
					8971:[_math,_integerConversion,'floor',_right],
					9001:[_math,'angle bracket (average)',_left],
					9002:[_math,'angle bracket (average)',_right],
					9674:[_math,_sets,'lozenge'],
					9824:[_cardSuits,'spade'],
					9827:[_cardSuits,'club'],
					9829:[_cardSuits,'heart'],
					9830:[_cardSuits,'diamond']
				}
		;

		return Uize.package ({
			charCodeToEntityInfoLookup:_charCodeToEntityInfoLookup
			/*?
				Static Properties
					Uize.Util.Html.EntityInfo.charCodeToEntityInfoLookup
						An object, representing an entity information lookup table, where each key is an entity character code, and where each value is an array of categorization levels (from most general to most specific).

						USAGE
						...........................................................................................
						entityInfoARRAY = Uize.Util.Html.EntityInfo.charCodeToEntityInfoLookup [entityCharCodeINT];
						...........................................................................................

						EXAMPLE
						.................................................................................
						var entity8218Info = Uize.Util.Html.EntityInfo.charCodeToEntityInfoLookup [8218];
						.................................................................................

						In the above example, the entity info is being obtained for the entity with the character code =8218=. This entity is the low-9 single quotation mark and the entity info array that is returned by the expression will be =['Punctuation','quotation mark','single','low-9']=.
			*/
		});
	}
});

