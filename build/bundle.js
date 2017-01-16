/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//var CssStyle = require('./CssStyle');
	
	
	var LaYout = React.createClass({
		displayName: 'LaYout',
	
		render: function render() {
			return React.createElement(
				'div',
				{ style: CssStyle.bodybox },
				React.createElement('div', { style: CssStyle.header }),
				React.createElement('div', { id: 'index', style: CssStyle.section }),
				React.createElement('div', { style: CssStyle.footer })
			);
		}
	});
	
	var Index = __webpack_require__(1);
	var Banner = __webpack_require__(2);
	var Nav = __webpack_require__(3);
	var Ad = __webpack_require__(4);
	var More = __webpack_require__(5);
	var Bg = __webpack_require__(6);
	var Movie = __webpack_require__(7);
	var Like = __webpack_require__(8);
	var List = __webpack_require__(9);
	
	ReactDOM.render(React.createElement(LaYout, null), document.getElementById('app'));
	ReactDOM.render(React.createElement(Index, null), document.getElementById('index'));
	ReactDOM.render(React.createElement(Banner, null), document.getElementById('banner'));
	ReactDOM.render(React.createElement(Nav, null), document.getElementById('nav'));
	ReactDOM.render(React.createElement(Ad, null), document.getElementById('ad'));
	ReactDOM.render(React.createElement(More, null), document.getElementById('more'));
	ReactDOM.render(React.createElement(Bg, null), document.getElementById('bg'));
	ReactDOM.render(React.createElement(Movie, null), document.getElementById('movie'));
	ReactDOM.render(React.createElement(Like, null), document.getElementById('like'));
	ReactDOM.render(React.createElement(List, null), document.getElementById('list'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var Index = React.createClass({
		displayName: "Index",
	
		render: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ id: "banner", style: CssStyle.banner },
					"1"
				),
				React.createElement(
					"div",
					{ id: "nav", style: CssStyle.nav },
					"2"
				),
				React.createElement(
					"div",
					{ id: "ad", style: CssStyle.ad },
					"3"
				),
				React.createElement(
					"div",
					{ id: "more", style: CssStyle.more },
					"4"
				),
				React.createElement(
					"div",
					{ id: "bg", style: CssStyle.bg },
					"5"
				),
				React.createElement(
					"div",
					{ id: "movie", style: CssStyle.movie },
					"6"
				),
				React.createElement(
					"div",
					{ id: "like", style: CssStyle.like },
					"7"
				),
				React.createElement(
					"div",
					{ id: "list", style: CssStyle.list },
					"8"
				)
			);
		}
	});
	
	module.exports = Index;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var Banner = React.createClass({
		displayName: "Banner",
	
	
		getDefaultProps: function getDefaultProps() {
			return {
				"url": "./mock/banner.json"
			};
		},
		getInitialState: function getInitialState() {
			return {
				"reset": ""
			};
		},
		componentWillMount: function componentWillMount() {
			var that = this;
			$.ajax({
				url: this.props.url,
				dataType: "json",
				success: function success(res) {
					//console.log(res)
					that.setState({
						"reset": res
					});
				}
			});
		},
	
		render: function render() {
			var arr = [];
			var reset = this.state.reset;
	
			if (reset) {
				for (var i = 0; i < reset.length; i++) {
					arr.push(React.createElement(BannerChild, { name: reset[i] }));
				}
			}
	
			return React.createElement(
				"div",
				{ style: CssStyle.swiper, className: "swiper-container", id: "bswp" },
				React.createElement(
					"div",
					{ className: "swiper-wrapper" },
					arr
				),
				React.createElement("div", { className: "swiper-pagination" })
			);
		}
	
	});
	module.exports = Banner;
	
	var BannerChild = React.createClass({
		displayName: "BannerChild",
	
		render: function render() {
			var reset = this.props.name;
			return React.createElement(
				"div",
				{ className: "swiper-slide" },
				React.createElement("img", { style: CssStyle.img, src: reset })
			);
		},
		componentDidMount: function componentDidMount() {
	
			var swiper = new Swiper('#bswp', {
				pagination: '#bswp .swiper-pagination',
				autoplay: 1500,
				autoplayDisableOnInteraction: true,
				slidesPerView: 1,
				paginationClickable: true,
				loop: true
			});
		}
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	var Nav = React.createClass({
		displayName: "Nav",
	
	
		getDefaultProps: function getDefaultProps() {
			return {
				"navurl": "./mock/nav.json"
			};
		},
		getInitialState: function getInitialState() {
			return {
				"navreset": ""
			};
		},
		componentWillMount: function componentWillMount() {
			var that = this;
			$.ajax({
				url: this.props.navurl,
				dataType: "json",
				success: function success(res) {
					//console.log(res)
					that.setState({
						"navreset": res
					});
				}
			});
		},
		componentDidMount: function componentDidMount() {
	
			var NavSwiper = new Swiper('#nswp', {
				pagination: '#nswp .swiper-pagination',
				autoplayDisableOnInteraction: true,
				slidesPerView: 1,
				paginationClickable: true,
				loop: true
			});
		},
		render: function render() {
	
			var navarr1 = [];
			var navarr2 = [];
			var navreset = this.state.navreset;
			if (navreset) {
				for (var i = 0; i < 8; i++) {
					navarr1.push(React.createElement(NavChild1, { navname: navreset[i] }));
					//console.log(reset[i])
				}
				for (var i = 8; i < 16; i++) {
					navarr2.push(React.createElement(NavChild2, { navname: navreset[i] }));
					//console.log(reset[i])
				}
			}
	
			return React.createElement(
				"div",
				{ style: CssStyle.swiper, className: "swiper-container", id: "nswp" },
				React.createElement(
					"div",
					{ style: CssStyle.swiper, className: "swiper-wrapper" },
					React.createElement(
						"div",
						{ className: "swiper-slide" },
						navarr1
					),
					React.createElement(
						"div",
						{ className: "swiper-slide" },
						navarr2
					)
				),
				React.createElement("div", { className: "swiper-pagination" })
			);
		}
	
	});
	module.exports = Nav;
	
	var NavChild1 = React.createClass({
		displayName: "NavChild1",
	
		render: function render() {
			var navreset = this.props.navname;
			return React.createElement(
				"li",
				{ style: CssStyle.navli },
				React.createElement("img", { style: CssStyle.navimg, src: navreset.img }),
				React.createElement(
					"span",
					{ style: CssStyle.navspan },
					navreset.title
				)
			);
		}
	});
	var NavChild2 = React.createClass({
		displayName: "NavChild2",
	
		render: function render() {
			var navreset = this.props.navname;
			return React.createElement(
				"li",
				{ style: CssStyle.navli },
				React.createElement("img", { style: CssStyle.navimg, src: navreset.img }),
				React.createElement(
					"span",
					{ style: CssStyle.navspan },
					navreset.title
				)
			);
		}
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	var Ad = React.createClass({
		displayName: "Ad",
	
		getDefaultProps: function getDefaultProps() {
			return {
				"adimg": "./images/index/ad.png"
			};
		},
		render: function render() {
			//console.log(this.props.adimg)
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ style: CssStyle.adleft },
					React.createElement("img", { style: CssStyle.adimg, src: this.props.adimg })
				),
				React.createElement(
					"div",
					{ style: CssStyle.adright, className: "swiper-container", id: "adswp" },
					React.createElement(
						"div",
						{ className: "swiper-wrapper" },
						React.createElement(
							"div",
							{ className: "swiper-slide" },
							React.createElement(
								"span",
								{ style: CssStyle.adspan },
								"\u3010\u7535\u5F71\u7279\u60E0\u3011"
							),
							"\u4E00\u5927\u6CE2\u7ACB\u51CF\u6765\u88AD"
						),
						React.createElement(
							"div",
							{ className: "swiper-slide" },
							React.createElement(
								"span",
								{ style: CssStyle.adspan },
								"\u3010\u91D1\u9E21\u798F\u5229\u3011"
							),
							"\u5FEB\u6765\u4E70\u4E70\u4E70"
						)
					)
				)
			);
		},
		componentDidMount: function componentDidMount() {
			var Adswiper = new Swiper('#adswp', {
				direction: 'vertical',
				autoplay: 2000,
				autoplayDisableOnInteraction: true,
				loop: true
			});
		}
	
	});
	
	module.exports = Ad;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	var More = React.createClass({
		displayName: "More",
	
	
		getDefaultProps: function getDefaultProps() {
			return {};
		},
		getInitialState: function getInitialState() {
			return {
				"reset": [{
					"tip": "金鸡纳福",
					"title": "一大波福利来袭",
					"img": "./images/index/1.jpg"
				}, {
					"tip": "金鸡纳福",
					"title": "一大波福利来袭",
					"img": "./images/index/2.jpg"
				}, {
					"tip": "金鸡纳福",
					"title": "一大波福利来袭",
					"img": "./images/index/3.jpg"
				}, {
					"tip": "金鸡纳福",
					"title": "一大波福利来袭",
					"img": "./images/index/4.jpg"
				}, {
					"tip": "金鸡纳福",
					"title": "一大波福利来袭",
					"img": "./images/index/5.jpg"
				}, {
					"tip": "金鸡纳福",
					"title": "一大波福利来袭",
					"img": "./images/index/6.jpg"
				}, {
					"tip": "金鸡纳福",
					"title": "一大波福利来袭",
					"img": "./images/index/7.jpg"
				}]
			};
		},
		render: function render() {
			var morearr1 = [];
			var morearr2 = [];
			var mores = this.state.reset;
			//console.log(mores)
	
			if (mores) {
				for (var i = 0; i < 4; i++) {
					morearr1.push(React.createElement(More1, { name: mores[i] }));
				}
				for (var i = 4; i < 7; i++) {
					morearr2.push(React.createElement(More2, { name: mores[i] }));
				}
			}
	
			return React.createElement(
				"div",
				null,
				React.createElement(
					"ul",
					{ style: CssStyle.moretop },
					morearr1
				),
				React.createElement(
					"div",
					{ style: CssStyle.moredown },
					morearr2
				)
			);
		}
	});
	
	module.exports = More;
	
	var More1 = React.createClass({
		displayName: "More1",
	
		render: function render() {
			var reset = this.props.name;
			return React.createElement(
				"li",
				{ style: CssStyle.moreli },
				React.createElement(
					"div",
					{ style: CssStyle.morelileft },
					React.createElement(
						"h3",
						{ style: CssStyle.morelih3 },
						reset.tip
					),
					React.createElement(
						"span",
						{ style: CssStyle.morelispan },
						reset.title
					)
				),
				React.createElement(
					"div",
					{ style: CssStyle.moreliright },
					React.createElement("img", { src: reset.img, style: CssStyle.moreimg })
				)
			);
		}
	});
	
	var More2 = React.createClass({
		displayName: "More2",
	
		render: function render() {
			var reset = this.props.name;
			return React.createElement(
				"div",
				{ style: CssStyle.morediv },
				React.createElement(
					"h3",
					{ style: CssStyle.moredivh3 },
					reset.tip
				),
				React.createElement(
					"p",
					{ style: CssStyle.moredivp },
					reset.title
				),
				React.createElement("img", { src: reset.img, style: CssStyle.moreimg })
			);
		}
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	var Bg = React.createClass({
		displayName: "Bg",
	
		getDefaultProps: function getDefaultProps() {
			return {
				"src": "./images/index/bg.jpg"
			};
		},
		render: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement("img", { src: this.props.src, style: CssStyle.bgimg })
			);
		}
	});
	
	module.exports = Bg;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	var Movie = React.createClass({
		displayName: "Movie",
	
	
		getDefaultProps: function getDefaultProps() {
			return {
				"url": "./mock/movie.json"
			};
		},
		getInitialState: function getInitialState() {
			return {
				"reset": ""
			};
		},
		componentWillMount: function componentWillMount() {
			var that = this;
			$.ajax({
				url: this.props.url,
				dataType: "json",
				success: function success(res) {
					//console.log(res)
					that.setState({
						"reset": res
					});
				}
			});
		},
	
		render: function render() {
			var arr = [];
			var reset = this.state.reset;
	
			if (reset) {
				for (var i = 0; i < reset.length; i++) {
					arr.push(React.createElement(MovieChild, { name: reset[i] }));
				}
			}
	
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ style: CssStyle.mvtip },
					React.createElement(
						"span",
						{ style: CssStyle.mvtitle },
						"\u5168\u90E8\u7535\u5F71"
					),
					React.createElement(
						"span",
						{ style: CssStyle.mvmore },
						"\u5168\u90E8\u7535\u5F71 \u3009"
					)
				),
				React.createElement(
					"div",
					{ style: CssStyle.mvswp, className: "swiper-container", id: "Movieswp" },
					React.createElement(
						"div",
						{ className: "swiper-wrapper" },
						arr
					)
				)
			);
		}
	
	});
	module.exports = Movie;
	
	var MovieChild = React.createClass({
		displayName: "MovieChild",
	
		render: function render() {
			var reset = this.props.name;
			return React.createElement(
				"div",
				{ className: "swiper-slide", style: CssStyle.mvpage },
				React.createElement("img", { style: CssStyle.mvimg, src: reset.ImgSrc }),
				React.createElement(
					"p",
					{ style: CssStyle.mvname },
					reset.name
				),
				React.createElement(
					"p",
					{ style: CssStyle.mvgrade },
					reset.grade,
					"\u5206"
				)
			);
		},
		componentDidMount: function componentDidMount() {
	
			var swiper = new Swiper('#Movieswp', {
				slidesPerView: 4,
				paginationClickable: true,
				spaceBetween: 10,
				freeMode: true
			});
		}
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	var Like = React.createClass({
		displayName: "Like",
	
		render: function render() {
			return React.createElement(
				"div",
				{ style: CssStyle.likebox },
				React.createElement("div", { style: CssStyle.likeline }),
				React.createElement("div", { style: CssStyle.likecricle }),
				React.createElement(
					"div",
					{ style: CssStyle.liketitle },
					"\u731C\u4F60\u559C\u6B22"
				),
				React.createElement("div", { style: CssStyle.likecricle }),
				React.createElement("div", { style: CssStyle.likeline })
			);
		}
	});
	
	module.exports = Like;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	var List = React.createClass({
		displayName: "List",
	
		getDefaultProps: function getDefaultProps() {
			return {
				"url": "./mock/list.json"
			};
		},
		getInitialState: function getInitialState() {
			return {
				"reset": ""
			};
		},
		componentWillMount: function componentWillMount() {
			var that = this;
			$.ajax({
				url: this.props.url,
				dataType: "json",
				success: function success(res) {
					//console.log(res)
					that.setState({
						"reset": res
					});
				}
			});
		},
		render: function render() {
			var listarr = [];
			var reset = this.state.reset;
			if (reset) {
				for (var i = 0; i < reset.length; i++) {
					listarr.push(React.createElement(ListChild, { name: reset[i] }));
				}
			}
			return React.createElement(
				"ul",
				{ style: CssStyle.list },
				listarr,
				React.createElement(
					"div",
					{ style: CssStyle.listmore },
					"\u67E5\u770B\u66F4\u591A\u56E2\u8D2D"
				)
			);
		}
	});
	
	module.exports = List;
	
	var ListChild = React.createClass({
		displayName: "ListChild",
	
		render: function render() {
	
			var ListRes = this.props.name;
			//console.log(ListRes)
	
			return React.createElement(
				"li",
				{ style: CssStyle.listli },
				React.createElement(
					"div",
					{ style: CssStyle.listleft },
					React.createElement("img", { style: CssStyle.listimg, src: ListRes.ImgSrc })
				),
				React.createElement(
					"div",
					{ style: CssStyle.listright },
					React.createElement(
						"p",
						null,
						React.createElement(
							"span",
							{ style: CssStyle.listtitle },
							ListRes.title
						),
						React.createElement(
							"i",
							{ style: CssStyle.listkm },
							ListRes.distance
						)
					),
					React.createElement(
						"p",
						{ style: CssStyle.listaddress },
						"[",
						ListRes.address,
						"]",
						ListRes.situation
					),
					React.createElement(
						"p",
						null,
						React.createElement(
							"span",
							{ style: CssStyle.listprice },
							"\xA5",
							ListRes.price
						),
						React.createElement(
							"span",
							{ style: CssStyle.listoldprice },
							ListRes.oldprice
						),
						React.createElement(
							"i",
							{ style: CssStyle.listsell },
							"\u5DF2\u552E  ",
							ListRes.sell
						)
					)
				)
			);
		}
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map