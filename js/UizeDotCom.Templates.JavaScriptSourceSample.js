/*
	UIZE Web Site 2012-08-17

	http://www.uize.com/reference/UizeDotCom.Templates.JavaScriptSourceSample.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeDotCom.Templates.JavaScriptSourceSample',builder:function(){var _a=function(){};_a.process=function(input){var output=[];
output.push('/*______________\r\n|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K\r\n|     /      /  |   ---------------------------------------------------\r\n|    /    O /   |    MODULE : Uize.Date Package\r\n|   /    / /    |\r\n|  /    / /  /| |    ONLINE : http://www.uize.com\r\n| /____/ /__/_| | COPYRIGHT : (c)2004-2012 UIZE\r\n|          /___ |   LICENSE : Available under MIT License or GNU General Public License\r\n|_______________|             http://www.uize.com/license.html\r\n*/\r\n\r\n/*?\r\n	Introduction\r\n		The =Uize.Date= module provides methods for working with dates, including converting time to different units, encoding / decoding dates in ISO8601, etc.\r\n\r\n		*DEVELOPERS:* `Chris van Rensburg`\r\n\r\n		The =Uize.Date= module is a package under the =Uize= namespace.\r\n*/\r\n\r\nUize.module ({\r\n	name:\'Uize.Date\',\r\n	builder:function () {\r\n		/*** Variables for Scruncher Optimization ***/\r\n			var _package = function () {};\r\n\r\n		/*** Public Static Methods ***/\r\n			var _unitsToMsFactorMap = {\r\n				ms:1,               // canonical unit\r\n				seconds:1000,       // 1000 ms per second\r\n				minutes:60000,      // 60 seconds per minute\r\n				hours:3600000,      // 60 minutes per hour\r\n				days:86400000,      // 24 hours per day\r\n				weeks:604800000,    // 7 days per week\r\n				months:2629743840,  // 365.2422 days per month (from 365.2422 days per year)\r\n				years:31556926080   // 12 months per year\r\n			};\r\n			var _convert = _package.convert = function (_timeValue,_timeUnit,_newTimeUnit) {\r\n				/* NOTES: first convert to the canonical unit ms, then convert to target unit */\r\n				return _timeValue * _unitsToMsFactorMap [_timeUnit + \'\'] / _unitsToMsFactorMap [_newTimeUnit + \'\'];\r\n				/*?\r\n					Static Methods\r\n						Uize.Date.convert\r\n							Converts the specified time in the specified time unit to a different specified time unit.\r\n\r\n							SYNTAX\r\n							....................................................................................\r\n							convertedTimeFLOAT = Uize.Date.convert (timeFLOAT,timeUnitSTR,convertedTimeUnitSTR);\r\n							....................................................................................\r\n\r\n							This methods allows you to convert from days to milliseconds, seconds to years, years to hours, hours to weeks, months to hours, or from any one of the supported time units to another.\r\n\r\n							TIME UNITS\r\n							The value specified for the =timeUnitSTR= and =convertedTimeUnitSTR= parameters can be any one of:  =ms=, =seconds=, =minutes=, =hours=, =days=, =weeks=, =months=, =years=.\r\n\r\n							EXAMPLES\r\n							............................................................\r\n							var\r\n								timeInDays = Uize.Date.convert (18287659,\'ms\',\'days\'),\r\n								timeInHours = Uize.Date.convert (15306,\'seconds\',\'hours\'),\r\n								timeInWeeks = Uize.Date.convert (6,\'months\',\'weeks\')\r\n							;\r\n							............................................................\r\n\r\n							NOTES\r\n							- any parameter of this method can be an object that implements a =valueOf= interface (such as an instance of a =Uize.Class= subclass that implements the =value= set-get property)\r\n				*/\r\n			};\r\n\r\n			var _resolve = _package.resolve = function (_date) {\r\n				return _date ? (typeof _date == \'string\' ? _package.fromIso8601 (_date) : _date) : new Date;\r\n				/*?\r\n					Static Methods\r\n						Uize.Date.resolve\r\n							Resolves the specified date to a =Date= object instance and returns that instance.\r\n\r\n							SYNTAX\r\n							...........................................\r\n							dateOBJ = Uize.Date.resolve (dateSTRorOBJ);\r\n							...........................................\r\n\r\n							The date to resolve can be specified as a string in ISO8601 format (YYYY-MM-DD), or as a =Date= object instance. When the specified date is already an instance of the =Date= object, then that instance is simply returned.\r\n\r\n							This method can be useful when implementing other methods, to give them flexibility in the manner in which dates can be specified for them. Resolving dates means that your code can be sure to be dealing with =Date= object instances, and can then have a canonical implementation when dealing with dates.\r\n\r\n							VARIATION\r\n							...............................\r\n							dateOBJ = Uize.Date.resolve ();\r\n							...............................\r\n\r\n							When no =dateSTRorOBJ= parameter is specified, or if an empty string or the value =null= is specified for this parameter, then a fresh =Date= object instance (ie. now) will be returned.\r\n				*/\r\n			};\r\n\r\n			_package.toIso8601 = function (_date) {\r\n				return (\r\n					(_date = _resolve (_date)).getFullYear () + \'-\' +\r\n					(\'0\' + (_date.getMonth () + 1)).slice (-2) + \'-\' +\r\n					(\'0\' + _date.getDate ()).slice (-2)\r\n				);\r\n				/*?\r\n					Static Methods\r\n						Uize.Date.toIso8601\r\n							Returns a string, representing the specified =Date= object instance in ISO8601 format (YYYY-MM-DD).\r\n\r\n							SYNTAX\r\n							...............................................\r\n							dateIso8601STR = Uize.Date.toIso8601 (dateOBJ);\r\n							...............................................\r\n\r\n							VARIATION 1\r\n							...............................................\r\n							dateIso8601STR = Uize.Date.toIso8601 (dateSTR);\r\n							...............................................\r\n\r\n							When the date to convert to ISO8601 format is specified as a string, then it is assumed to already be in ISO8601 format, and that date value will simply be returned.\r\n\r\n							VARIATION 2\r\n							........................................\r\n							dateIso8601STR = Uize.Date.toIso8601 ();\r\n							........................................\r\n\r\n							When no parameter is specified, this method will return the current date in ISO8601 format.\r\n\r\n							NOTES\r\n							- see also the companion =Uize.Date.fromIso8601= static method\r\n							- compare to the =Uize.Date.toPretty= static method\r\n				*/\r\n			};\r\n\r\n			_package.fromIso8601 = function (_dateIso8601) {\r\n				var\r\n					_yearMonthDay = _dateIso8601.split (\'-\'),\r\n					_date = new Date\r\n				;\r\n				_date.setFullYear (_yearMonthDay [0]);\r\n				_date.setDate (1);\r\n					/* WORKAROUND:\r\n						This is needed in order to avoid an odd issue that only occurs after the 28th of every month. Basically, because the Date object has the current day set, if you set the month to a month in which that day is not valid, the Date object rolls the month over to the next month. This is, obviously, not what we desire in this instance. By first setting the day to 1, we avoid tripping on this issue.\r\n					*/\r\n				_date.setMonth (_yearMonthDay [1] - 1);\r\n				_date.setDate (_yearMonthDay [2]);\r\n				_date.setHours (0,0,0,0);\r\n				return _date;\r\n				/*?\r\n					Static Methods\r\n						Uize.Date.fromIso8601\r\n							Converts the specified ISO8601 format (YYYY-MM-DD) date string and returns the date as a =Date= object instance.\r\n\r\n							SYNTAX\r\n							.................................................\r\n							dateOBJ = Uize.Date.fromIso8601 (dateIso8601STR);\r\n							.................................................\r\n\r\n							NOTES\r\n							- see also the companion =Uize.Date.toIso8601= static method\r\n				*/\r\n			};\r\n\r\n			_package.toPretty = function (_date) {\r\n				_date = _resolve (_date);\r\n				var\r\n					_dayNumber = _date.getDate (),\r\n					_dayNumberMod10 = _dayNumber % 10,\r\n					_dayNumberSuffix = (_dayNumberMod10 > 3 || Math.floor (_dayNumber / 10) % 10 == 1) ? \'th\' : [\'th\',\'st\',\'nd\',\'rd\'] [_dayNumberMod10]\r\n				;\r\n				return (\r\n					_dayNames [_date.getDay ()] + \', \' + _dayNumber + _dayNumberSuffix + \' \' +\r\n					_monthNames [_date.getMonth ()] + \' \' +\r\n					_date.getFullYear ()\r\n				);\r\n				/*?\r\n					Static Methods\r\n						Uize.Date.toPretty\r\n							Returns a string, representing a "pretty" formatting of the specified date.\r\n\r\n							SYNTAX\r\n							..................................................\r\n							prettyDateSTR = Uize.Date.toPretty (dateSTRorOBJ);\r\n							..................................................\r\n\r\n							The date to be pretty-formatted can be specified using a =Date= object instance, or as a date string in ISO8601 format (YYYY-MM-DD). A pretty-formatted date follows the syntax...\r\n\r\n							.........................................................................\r\n							[full day name], [day of month][day suffix] [full month name] [full year]\r\n							.........................................................................\r\n\r\n							Following are some examples of pretty-formatted dates...\r\n\r\n							EXAMPLES\r\n							............................\r\n							Friday, 15th December 2006\r\n							Tuesday, 23rd February 1999\r\n							Friday, 4th July 2008\r\n							Thursday, 1st April 2004\r\n							Saturday, 2nd September 2006\r\n							............................\r\n\r\n							NOTES\r\n							- compare to the =Uize.Date.toPretty= static method\r\n				*/\r\n			};\r\n\r\n			_package.isLeapYear = function (_year) {\r\n				return _year % 4 == 0 && (_year % 100 != 0 || _year % 400 == 0);\r\n				/*?\r\n					Static Methods\r\n						Uize.Date.isLeapYear\r\n							Returns a boolean, indicating whether or not the specified year is a leap year.\r\n\r\n							SYNTAX\r\n							................................................\r\n							isLeapYearBOOL = Uize.Date.isLeapYear (yearINT);\r\n							................................................\r\n\r\n							EXAMPLES\r\n							................................................................................\r\n							Uize.Date.isLeapYear (2008);   // returns true, because 2008 is a leap year\r\n							Uize.Date.isLeapYear (2009);   // returns false, because 2009 is not a leap year\r\n							................................................................................\r\n\r\n							NOTES\r\n							- see the related =Uize.Date.getDaysInMonth= static method\r\n				*/\r\n			};\r\n\r\n			_package.getDaysInMonth = function (_month,_year) {\r\n				return _month == 1 ? (_package.isLeapYear (_year) ? 29 : 28) : (30 + ((2773 >> _month) & 1));\r\n				/* NOTE:\r\n					2773 is 101011010101 in binary, which flags the 31 day months, and we use a binary shift right to "index" into the flags, with a binary and on 1 to mask out unwanted crud\r\n				*/\r\n				/*?\r\n					Static Methods\r\n						Uize.Date.getDaysInMonth\r\n							Returns an integer, indicating the number of days in the specified month of the specified year.\r\n\r\n							SYNTAX\r\n							.............................................................\r\n							daysInMonthINT = Uize.Date.getDaysInMonth (monthINT,yearINT);\r\n							.............................................................\r\n\r\n							The value of the =monthINT= parameter should be a number in the range of =0= to =11=, where =0= represents January, and =11= represents December.\r\n\r\n							EXAMPLES\r\n							...................................................................................\r\n							Uize.Date.getDaysInMonth (1,2008);   // returns 29, because 2008 is a leap year\r\n							Uize.Date.getDaysInMonth (1,2009);   // returns 28, because 2009 is not a leap year\r\n							Uize.Date.getDaysInMonth (3,1876);   // returns 30 for April of any year\r\n							Uize.Date.getDaysInMonth (11,1989);  // returns 31 for December of any year\r\n							...................................................................................\r\n\r\n							NOTES\r\n							- see the related =Uize.Date.isLeapYear= static method\r\n				*/\r\n			};\r\n\r\n			_package.isRecent = function (_date,_recencyWindowDays) {\r\n				return Math.round (_convert (new Date - _resolve (_date),\'ms\',\'days\')) <= _recencyWindowDays;\r\n				/*?\r\n					Static Methods\r\n						Uize.Date.isRecent\r\n							Returns a boolean, indicating whether or not the specified date is within the specified window of recency (as specified in days).\r\n\r\n							SYNTAX\r\n							......................................................................\r\n							isRecentBOOL = Uize.Date.isRecent (dateSTRorOBJ,recencyWindowDaysINT);\r\n							......................................................................\r\n\r\n							The date to be tested for recency can be specified using a =Date= object instance, or as a date string in ISO8601 format (YYYY-MM-DD). This method can be useful for filtering content to highlight as new or recent, based upon release date.\r\n				*/\r\n			};\r\n\r\n		/*** Public Static Properties ***/\r\n			var\r\n				_dayNames = _package.dayNames = [\'Sunday\',\'Monday\',\'Tuesday\',\'Wednesday\',\'Thursday\',\'Friday\',\'Saturday\'],\r\n					/*?\r\n						Static Properties\r\n							Uize.Date.dayNames\r\n								An array of strings, representing the English names of the days of the week, starting with Sunday.\r\n\r\n								SYNTAX\r\n								...............................................\r\n								dayNameSTR = Uize.Date.dayNames [dayOfWeekINT];\r\n								...............................................\r\n\r\n								EXAMPLE\r\n								..............................................................\r\n								var todaysDayName = Uize.Date.dayNames [(new Date).getDay ()];\r\n								..............................................................\r\n\r\n								In the above example, the variable =todaysDayName= would be left with the name of the day of the week during which the code is executed.\r\n\r\n								NOTES\r\n								- see also the companion =Uize.Date.monthNames= static property\r\n					*/\r\n				_monthNames = _package.monthNames = [\'January\', \'February\', \'March\', \'April\', \'May\', \'June\', \'July\', \'August\', \'September\', \'October\', \'November\', \'December\']\r\n					/*?\r\n						Static Properties\r\n							Uize.Date.monthNames\r\n								An array of strings, representing the English names of the months of the year, starting with January.\r\n\r\n								SYNTAX\r\n								.....................................................\r\n								monthNameSTR = Uize.Date.monthNames [monthOfYearINT];\r\n								.....................................................\r\n\r\n								EXAMPLE\r\n								....................................................................\r\n								var todaysMonthName = Uize.Date.monthNames [(new Date).getMonth ()];\r\n								....................................................................\r\n\r\n								In the above example, the variable =todaysMonthName= would be left with the name of the month of the year during which the code is executed.\r\n\r\n								NOTES\r\n								- see also the companion =Uize.Date.dayNames= static property\r\n					*/\r\n			;\r\n\r\n		return _package;\r\n	}\r\n});\r\n\r\n');
return output.join('');};_a.input={};return _a;}});