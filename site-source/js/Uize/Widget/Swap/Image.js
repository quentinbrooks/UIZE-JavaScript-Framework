/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widget.Swap.Image Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2005-2015 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 3
	codeCompleteness: 100
	docCompleteness: 2
*/

/*?
	Introduction
		The =Uize.Widget.Swap.Image= class supports swapping between two image URLs, with an accompanying, highly configurable JavaScript animation effect.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widget.Swap.Image',
	required:[
		'Uize.Dom.Basics',
		'Uize.Dom.Pos',
		'Uize.Dom.Util'
	],
	builder:function (_superclass) {
		'use strict';

		var
			/*** Variables for Scruncher Optimization ***/
				_Uize_Dom_Basics = Uize.Dom.Basics
		;

		function _updateUiSrc () {
			var m = this;
			if (m.isWired) {
				var
					_currentItem = m.getNode ('item' + m._currentItemNo),
					_nextItemNo = 1 - m._currentItemNo,
					_nextItem = m.getNode ('item' + _nextItemNo),
					_nextItemImg = m.getNode ('item' + _nextItemNo + 'Image')
				;
				_nextItem.style.padding = '0px';
				m.prepareForNextItem (_currentItem,_nextItem);

				var _loadNextImage = function () {
					var _image = m._imagesLoaded [m._src];
					_Uize_Dom_Basics.setStyle (
						_nextItem,
						{
							paddingLeft:(m.viewFinalCoords [2] + 1 - _image._width) / 2,
							paddingTop:(m.viewFinalCoords [3] + 1 - _image._height) / 2
						}
					);
					function _nextImageLoaded () {
						_nextItemImg.Uize_Widget_ImageSwap_src = m._src;
						m.unwireNode (_nextItemImg);
						m._currentItemNo = _nextItemNo;
						m.setCurrentItem (_nextItem);
					}
					if (_nextItemImg.Uize_Widget_ImageSwap_src === m._src) {
						/* NOTE:
							In IE 5.2 and Safari 1.3- on Mac OS X, the load event for an IMG node is not fired when that node's src is set again to its current value. So, when switching back and forth between two image URLs, the load event cannot be relied upon for triggering the reveal, since we're toggling between two IMG nodes and sometimes an IMG node used to display an image will already have loaded that image from a previous toggle.
						*/
						_nextImageLoaded ();
					} else {
						m.wireNode (
							_nextItemImg,
							{
								load:_nextImageLoaded,
								error:_nextImageLoaded,
								abort:_nextImageLoaded
							}
						);
						if (_Uize_Dom_Basics.isIe && /\.png$/i.test (m._src)) {
							_nextItemImg.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + m._src + '\', sizingMethod=\'crop\')';
							_nextItemImg.src = m.Class.getBlankImageUrl ();
						}
						else {
							_nextItemImg.src = m._src;
							_nextItemImg.style.filter = null;
						}

						_nextItemImg.width = _image._width;
						_nextItemImg.height = _image._height;
					}
				};
				if (m._imagesLoaded [m._src]) {
					_loadNextImage ();
				} else {
					var _imageLoader = new Image;
					/* NOTE:
						We can't use the Uize.Dom.Basics.wire method here because Safari doesn't implement instances of the Image object as real IMG DOM nodes, and Uize.Dom.Basics.wire has no effect.
					*/
					_imageLoader.onload = _imageLoader.onerror = _imageLoader.onabort =
						function () {
							_imageLoader = null;
							m._imagesLoaded [m._src] = {
								_width:m._width || this.width,
								_height:m._height || this.height
							};
							_loadNextImage ();
						}
					;
					_imageLoader.src = m._src;
				}
			}
		}

		return _superclass.subclass ({
			alphastructor:function () {
				var m = this;

				/*** Private Instance Properties ***/
					m._currentItemNo = 0;
					m._imagesLoaded = {};
			},

			instanceMethods:{
				updateUi:function () {
					_updateUiSrc.call (this);
				}
			},

			stateProperties:{
				_background:'background',
				_height:'height',
				_src:{
					name:'src|value',
					onChange:_updateUiSrc,
					value:''
				},
				_width:'width'
			},

			set:{
				html:{
					process:function (input) {
						var
							m = this,
							_shellNode = this.getNode (),
							_shellSize = Uize.Dom.Pos.getDimensions (_shellNode),
							_background = input.background || Uize.Dom.Util.getEffectiveBgColor (_shellNode)
						;
						function _getItemTag (_itemNo) {
							return (
								'<div id="' + input.idPrefix + '-item' + _itemNo +
								'" style="position:absolute; margin:0px; padding:0px; left:0px; top:0px; width:' + _shellSize.width +
								'px; height:' + _shellSize.height + 'px; background:' + _background +
								'; overflow:hidden;"><img id="' + input.idPrefix + '-item' + _itemNo + 'Image" src="' +
								m.Class.getBlankImageUrl () + '"' +
								(typeof input.width == 'number' ? (' width="' + input.width + '"') : '') +
								(typeof input.height == 'number' ? (' height="' + input.height + '"') : '') + '/></div>'
							);
						}
						return _getItemTag (0) + _getItemTag (1);
					}
				}
			}
		});
	}
});

