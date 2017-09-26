(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("styledComponents"), require("react"), require("animate-css-styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["styledComponents", "react", "animate-css-styled-components"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("styledComponents"), require("react"), require("animate-css-styled-components")) : factory(root["styledComponents"], root["React"], root["animate-css-styled-components"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.clamp = function (x, y) {
    return x <= y ? x : y;
};

exports.shade = function (col, amt) {
    var usePound = false;
    if (col[0] === "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;else if (r < 0) r = 0;

    var b = (num >> 8 & 0x00ff) + amt;

    if (b > 255) b = 255;else if (b < 0) b = 0;

    var g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n            width: ", "em;\n            height: ", "em;\n            display: inline;\n            vertical-align: middle;\n        "], ["\n            width: ", "em;\n            height: ", "em;\n            display: inline;\n            vertical-align: middle;\n        "]),
    _templateObject2 = _taggedTemplateLiteral(["\n            fill: ", ";\n        "], ["\n            fill: ", ";\n        "]);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: "icon",
        value: function icon(name) {
            switch (name) {
                default:
                    break;
                case "bell":
                    return {
                        viewBox: "0 0 80 88.5",
                        path: "M63.3,36.8C51.9,12.3,45.9,3,27.3,3.4c-6.6,0.1-5-4.8-10.1-2.9c-5.1,1.9-0.7,4.6-5.9,8.9 C-3.2,21.2-1.9,32.2,4.9,58.5c2.8,11.1-6.8,11.6-3,22.3c2.8,7.8,23.4,11.1,45.1,3C68.7,75.8,82.4,59.8,79.6,52 C75.8,41.2,68.1,47.2,63.3,36.8z M44.6,77.2c-19.4,7.2-35.4,3-36,1.1C7.4,75.1,14.9,64.2,37,56c22.2-8.2,34.6-5.2,35.9-1.6 C73.7,56.6,64,70,44.6,77.2z M38.4,59.8c-10.1,3.8-17.2,8.1-21.8,12c3.2,2.9,9.2,3.6,15.2,1.4c7.6-2.8,12.3-9.3,10.5-14.5 c0-0.1-0.1-0.1-0.1-0.2C41,58.8,39.7,59.3,38.4,59.8z"
                    };
                case "gear":
                    return {
                        viewBox: "0 0 21.589 21.589",
                        path: "M18.622,8.371l-0.545-1.295c0,0,1.268-2.861,1.156-2.971l-1.679-1.639c-0.116-0.113-2.978,1.193-2.978,1.193l-1.32-0.533 c0,0-1.166-2.9-1.326-2.9H9.561c-0.165,0-1.244,2.906-1.244,2.906L6.999,3.667c0,0-2.922-1.242-3.034-1.131L2.289,4.177 C2.173,4.29,3.507,7.093,3.507,7.093L2.962,8.386c0,0-2.962,1.141-2.962,1.295v2.322c0,0.162,2.969,1.219,2.969,1.219l0.545,1.291 c0,0-1.268,2.859-1.157,2.969l1.678,1.643c0.114,0.111,2.977-1.195,2.977-1.195l1.321,0.535c0,0,1.166,2.898,1.327,2.898h2.369 c0.164,0,1.244-2.906,1.244-2.906l1.322-0.535c0,0,2.916,1.242,3.029,1.133l1.678-1.641c0.117-0.115-1.22-2.916-1.22-2.916 l0.544-1.293c0,0,2.963-1.143,2.963-1.299v-2.32C21.59,9.425,18.622,8.371,18.622,8.371z M14.256,10.794 c0,1.867-1.553,3.387-3.461,3.387c-1.906,0-3.461-1.52-3.461-3.387s1.555-3.385,3.461-3.385 C12.704,7.41,14.256,8.927,14.256,10.794z"
                    };
                case "menu":
                    return {
                        viewBox: "0 0 18 24",
                        path: "M16 17H2c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2S17.1 17 16 17zM16 10H2c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2S17.1 10 16 10zM16 3H2C.9 3 0 3.9 0 5s.9 2 2 2h14c1.1 0 2-.9 2-2S17.1 3 16 3z"
                    };
                case "close":
                    return {
                        viewBox: "0 0 1792 1792",
                        path: "M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
                    };
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                name = _props.name,
                size = _props.size,
                color = _props.color,
                theme = _props.theme;


            var icon = this.icon(name);

            var SVG = _styledComponents2.default.svg.attrs({
                x: "0px",
                y: "0px",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: icon.viewBox
            })(_templateObject, size ? size : 1, size ? size : 1);

            var Path = _styledComponents2.default.path.attrs({
                d: icon.path
            })(_templateObject2, color ? theme.colors[color] : "currentColor");

            return _react2.default.createElement(
                SVG,
                null,
                _react2.default.createElement(Path, null)
            );
        }
    }]);

    return Icon;
}(_react2.default.Component);

exports.default = (0, _styledComponents.withTheme)(Icon);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(6);

Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button).default;
  }
});

var _column = __webpack_require__(7);

Object.defineProperty(exports, "Column", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_column).default;
  }
});

var _dropdown = __webpack_require__(8);

Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dropdown).default;
  }
});

var _icon = __webpack_require__(4);

Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_icon).default;
  }
});

var _modal = __webpack_require__(9);

Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

var _panel = __webpack_require__(10);

Object.defineProperty(exports, "Panel", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_panel).default;
  }
});

var _row = __webpack_require__(11);

Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_row).default;
  }
});

var _tile = __webpack_require__(12);

Object.defineProperty(exports, "Tile", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tile).default;
  }
});

var _tooltip = __webpack_require__(13);

Object.defineProperty(exports, "Tooltip", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltip).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    width: ", ";\n    min-height: ", "em;\n    background: ", ";\n    color: ", ";\n    margin: 0 ", "\n        ", "em\n        ", "em;\n    padding: 0 1em;\n    border-style: solid;\n    border-width: 0.1em;\n    border-color: ", ";\n    border-radius: ", "em;\n    float: ", ";\n    font-size: 1em;\n    transition: color .25s, background .25s, border .25s;\n\n    /* disabled button styling */\n    ", ";\n\n    /*centered button styling*/\n    ", ";\n"], ["\n    width: ", ";\n    min-height: ", "em;\n    background: ", ";\n    color: ", ";\n    margin: 0 ", "\n        ", "em\n        ", "em;\n    padding: 0 1em;\n    border-style: solid;\n    border-width: 0.1em;\n    border-color: ", ";\n    border-radius: ", "em;\n    float: ", ";\n    font-size: 1em;\n    transition: color .25s, background .25s, border .25s;\n\n    /* disabled button styling */\n    ", ";\n\n    /*centered button styling*/\n    ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    &:hover {\n        background: ", ";\n        color: ", ";\n        border-color: ", ";\n        cursor: pointer;\n    }   \n            "], ["\n    &:hover {\n        background: ", ";\n        color: ", ";\n        border-color: ", ";\n        cursor: pointer;\n    }   \n            "]),
    _templateObject3 = _taggedTemplateLiteral(["\n        opacity: 0.5;    \n        cursor: not-allowed;\n            "], ["\n        opacity: 0.5;    \n        cursor: not-allowed;\n            "]),
    _templateObject4 = _taggedTemplateLiteral(["display: block; margin: auto"], ["display: block; margin: auto"]);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _functions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var background = function background(props) {
    return props.color ? props.theme.colors[props.color] : props.theme.colors.accent;
};

var sizes = {
    small: "1",
    regular: function regular(props) {
        return props.theme.inputHeight;
    },
    large: "3"
};

var spacing = "0.4em";

var Button = _styledComponents2.default.button(_templateObject, function (props) {
    return props.expanded ? "100%" : "auto";
}, function (props) {
    return props.size ? sizes[props.size] : sizes.regular;
}, function (props) {
    return props.hollow ? "transparent" : background;
}, function (props) {
    return props.hollow ? background : "white";
}, function (props) {
    return props.expanded || props.right ? 0 : spacing;
}, function (props) {
    return props.theme.margin;
}, function (props) {
    return props.right ? spacing : 0;
}, background, function (props) {
    return props.theme.radius;
}, function (props) {
    return props.right ? "right" : "none";
}, function (props) {
    return !props.disabled ? (0, _styledComponents.css)(_templateObject2, function (props) {
        return !props.hollow && (0, _functions.shade)(background(props), -40);
    }, function (props) {
        return props.hollow && (0, _functions.shade)(background(props), -40);
    }, function (props) {
        return (0, _functions.shade)(background(props), -40);
    }) : (0, _styledComponents.css)(_templateObject3);
}, function (props) {
    return props.centered && (0, _styledComponents.css)(_templateObject4);
});

exports.default = Button;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n        @media (min-width: ", "em) {\n            ", ";\n        }\n    "], ["\n        @media (min-width: ", "em) {\n            ", ";\n        }\n    "]),
    _templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 0 ", "em;\n\n    /*responsive*/\n    ", ";\n\n    /* Centered */\n    ", ";\n"], ["\n    width: 100%;\n    padding: 0 ", "em;\n\n    /*responsive*/\n    ", ";\n\n    /* Centered */\n    ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteral(["width: ", "%;"], ["width: ", "%;"]),
    _templateObject4 = _taggedTemplateLiteral(["margin: auto;"], ["margin: auto;"]),
    _templateObject5 = _taggedTemplateLiteral(["float: left;"], ["float: left;"]);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _functions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizes = {
    small: 0,
    medium: 350,
    large: 700,
    xlarge: 1050
};

// Width to percentage
var widthPercentage = function widthPercentage(width) {
    return (0, _functions.clamp)(Math.floor(width), 12) / 12 * 100;
};

// Iterate through the sizes and create a media template
var media = Object.keys(sizes).reduce(function (acc, label) {
    acc[label] = function () {
        return (0, _styledComponents.css)(_templateObject, sizes[label] / 12, _styledComponents.css.apply(undefined, arguments));
    };

    return acc;
}, {});

// The Column - loop through all breakpoints and insert into media query
var Column = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.collapse ? 0 : props.theme.padding / 2;
}, function (props) {
    return Object.keys(sizes).map(function (key) {
        return props[key] && media[key](_templateObject3, widthPercentage(props[key]));
    });
}, function (props) {
    return props.centered ? (0, _styledComponents.css)(_templateObject4) : (0, _styledComponents.css)(_templateObject5);
});

exports.default = Column;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n            position: relative;\n            display: inline-block;\n        "], ["\n            position: relative;\n            display: inline-block;\n        "]),
    _templateObject2 = _taggedTemplateLiteral(["\n            position: absolute;\n            background: ", ";\n            ", ";\n        "], ["\n            position: absolute;\n            background: ", ";\n            ", ";\n        "]),
    _templateObject3 = _taggedTemplateLiteral(["right: 0;"], ["right: 0;"]),
    _templateObject4 = _taggedTemplateLiteral(["left: 0;"], ["left: 0;"]),
    _templateObject5 = _taggedTemplateLiteral(["\n            min-width: 200px;\n            background: ", ";\n            border-bottom: 1px solid ", ";\n            padding: ", "em ", "em;\n            cursor: pointer;\n            &:hover {\n                background: ", ";\n            }\n        "], ["\n            min-width: 200px;\n            background: ", ";\n            border-bottom: 1px solid ", ";\n            padding: ", "em ", "em;\n            cursor: pointer;\n            &:hover {\n                background: ", ";\n            }\n        "]);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animateCssStyledComponents = __webpack_require__(3);

var _functions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

        _this.state = {
            visible: false
        };
        return _this;
    }

    _createClass(Dropdown, [{
        key: "_onMouseEnter",
        value: function _onMouseEnter() {
            this.setState({ visible: true });
        }
    }, {
        key: "_onMouseLeave",
        value: function _onMouseLeave() {
            this.setState({ visible: false });
        }
    }, {
        key: "_renderItems",
        value: function _renderItems(DropdownItem, items) {
            var result = [];
            for (var i = 0; i < items.length; i++) {
                var props = items[i].props;
                result.push(_react2.default.createElement(
                    DropdownItem,
                    _extends({ key: i }, props),
                    items[i].children
                ));
            }

            return result;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var theme = this.props.theme;


            var DropdownContainer = _styledComponents2.default.span(_templateObject);

            var DropdownMenu = _styledComponents2.default.div(_templateObject2, theme.colors.white, this.props.right ? (0, _styledComponents.css)(_templateObject3) : (0, _styledComponents.css)(_templateObject4));

            var DropdownItem = _styledComponents2.default.div(_templateObject5, theme.colors.lightGray, theme.colors.white, theme.padding / 2, theme.padding, (0, _functions.shade)(theme.colors.lightGray, -20));

            return _react2.default.createElement(
                DropdownContainer,
                {
                    onMouseEnter: function onMouseEnter() {
                        return _this2._onMouseEnter();
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2._onMouseLeave();
                    }
                },
                this.props.children,
                this.state.visible && _react2.default.createElement(
                    DropdownMenu,
                    { ref: function ref(dropdown) {
                            return _this2.dropdown = dropdown;
                        } },
                    this.props.items && this._renderItems(DropdownItem, this.props.items)
                )
            );
        }
    }]);

    return Dropdown;
}(_react2.default.Component);

exports.default = (0, _styledComponents.withTheme)(Dropdown);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n            top: 0;\n            left: 0;\n            right: 0;\n            width: 100%;\n            height: 100%;\n            overflow: auto;\n            position: fixed;\n            padding: 0 ", "rem;\n            background: rgba(0, 0, 0, 0.6);\n            z-index: 999;\n        "], ["\n            top: 0;\n            left: 0;\n            right: 0;\n            width: 100%;\n            height: 100%;\n            overflow: auto;\n            position: fixed;\n            padding: 0 ", "rem;\n            background: rgba(0, 0, 0, 0.6);\n            z-index: 999;\n        "]),
    _templateObject2 = _taggedTemplateLiteral(["\n            max-width: 40em;\n            margin: 6em auto;\n            overflow: hidden;\n            position: relative;\n            border-radius: ", "em;\n            background: ", ";\n            padding: ", "em ", "rem 0;\n        "], ["\n            max-width: 40em;\n            margin: 6em auto;\n            overflow: hidden;\n            position: relative;\n            border-radius: ", "em;\n            background: ", ";\n            padding: ", "em ", "rem 0;\n        "]),
    _templateObject3 = _taggedTemplateLiteral(["\n            top: 0;\n            right: 0;\n            padding: 0;\n            opacity: 0.5;\n            cursor: pointer;\n            position: absolute;\n            margin: ", "rem;\n            color: ", ";\n        "], ["\n            top: 0;\n            right: 0;\n            padding: 0;\n            opacity: 0.5;\n            cursor: pointer;\n            position: absolute;\n            margin: ", "rem;\n            color: ", ";\n        "]);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon = __webpack_require__(4);

var _icon2 = _interopRequireDefault(_icon);

var _animateCssStyledComponents = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    // Modal must start closed
    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.state = {
            visible: false
        };
        return _this;
    }

    _createClass(Modal, [{
        key: "_closeModal",
        value: function _closeModal(cb) {
            var _this2 = this;

            this._toggleModal();
            setTimeout(function () {
                _this2._toggleModal(); // Reset visibility
                cb && cb(); // Run callback
            }, 250);
        }
    }, {
        key: "_toggleModal",
        value: function _toggleModal() {
            this.setState({ visible: !this.state.visible });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                theme = _props.theme,
                visible = _props.visible;

            // Set to animate in / out based on visibility

            var animation = {
                fade: !this.state.visible ? _animateCssStyledComponents.FadeIn : _animateCssStyledComponents.FadeOut,
                zoom: !this.state.visible ? _animateCssStyledComponents.ZoomIn : _animateCssStyledComponents.ZoomOut
            };

            // Lock body scroll if is visible
            try {
                document.getElementsByTagName("BODY")[0].style.overflow = visible ? "hidden" : "auto";
            } catch (err) {}

            var ModalWrapper = animation.fade.extend(_templateObject, theme.padding);
            var ModalInner = animation.zoom.extend(_templateObject2, theme.radius, theme.colors.white, theme.padding, theme.padding / 2);
            var ModalCloseButton = _styledComponents2.default.div.attrs({
                role: "button"
            })(_templateObject3, theme.margin, theme.colors.black);

            return visible ? _react2.default.createElement(
                ModalWrapper,
                {
                    duration: "0.25s",
                    onClick: function onClick() {
                        return _this3._closeModal(_this3.props.onClose);
                    }
                },
                _react2.default.createElement(
                    ModalInner,
                    { duration: "0.25s", onClick: function onClick(e) {
                            return e.stopPropagation();
                        } },
                    _react2.default.createElement(
                        ModalCloseButton,
                        {
                            onClick: function onClick() {
                                return _this3._closeModal(_this3.props.onClose);
                            }
                        },
                        _react2.default.createElement(_icon2.default, { name: "close", size: "1.8" })
                    ),
                    this.props.children
                )
            ) : null;
        }
    }]);

    return Modal;
}(_react2.default.Component);

exports.default = (0, _styledComponents.withTheme)(Modal);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    height: 100%;\n    padding: ", "em ", "em 0 ", "em;\n    background-color ", ";\n    overflow: hidden;\n    margin-bottom: ", "em;\n"], ["\n    height: 100%;\n    padding: ", "em ", "em 0 ", "em;\n    background-color ", ";\n    overflow: hidden;\n    margin-bottom: ", "em;\n"]);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Panel = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.padding;
}, function (props) {
    return props.theme.padding;
}, function (props) {
    return props.theme.padding;
}, function (props) {
    return props.theme.colors.lightGray;
}, function (props) {
    return props.theme.margin;
});

exports.default = Panel;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    max-width: ", ";\n    margin: auto;\n    overflow: hidden;\n"], ["\n    max-width: ", ";\n    margin: auto;\n    overflow: hidden;\n"]);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var width = 1400;

var Row = _styledComponents2.default.div(_templateObject, function (props) {
    return props.expanded ? "100%" : width + "px";
});

exports.default = Row;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n            width: 100%;\n            background: ", ";\n            overflow: hidden;\n            float: left;\n            margin: 0 0 ", "em;\n            position: relative;\n            ", ";\n        "], ["\n            width: 100%;\n            background: ", ";\n            overflow: hidden;\n            float: left;\n            margin: 0 0 ", "em;\n            position: relative;\n            ", ";\n        "]),
    _templateObject2 = _taggedTemplateLiteral(["\n                    padding: ", "em ", "em 0;\n                "], ["\n                    padding: ", "em ", "em 0;\n                "]),
    _templateObject3 = _taggedTemplateLiteral(["\n            width: ", "px;\n            height: ", "px;\n            padding: ", "em ", "em 0;\n            overflow: hidden;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n        "], ["\n            width: ", "px;\n            height: ", "px;\n            padding: ", "em ", "em 0;\n            overflow: hidden;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n        "]);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tile = function (_React$Component) {
    _inherits(Tile, _React$Component);

    function Tile(props) {
        _classCallCheck(this, Tile);

        var _this = _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).call(this, props));

        _this.state = {
            tilesize: Number.isInteger(_this.props.responsiveScale) ? _this.props.responsiveScale : 300
        };
        return _this;
    }

    _createClass(Tile, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            window.addEventListener("resize", this.updateDimensions.bind(this));

            this.updateDimensions();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.updateDimensions.bind(this));
        }
    }, {
        key: "updateDimensions",
        value: function updateDimensions() {
            // Make square
            var height = Math.round(this.tileElement.clientWidth);
            var tilesize = this.state.tilesize;
            this.setState({ height: height });

            console.log(tilesize);

            // Scaling
            if (this.props.responsiveScale) {
                var scale = height / this.state.tilesize;
                this.setState({ scale: scale });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                square = _props.square,
                theme = _props.theme,
                responsiveScale = _props.responsiveScale;


            var Tile = _styledComponents2.default.div(_templateObject, theme.colors.lightGray, theme.margin, !responsiveScale && (0, _styledComponents.css)(_templateObject2, theme.padding, theme.padding / 2));

            var ResponsiveScale = _styledComponents2.default.div(_templateObject3, this.state.tilesize, this.state.tilesize, theme.padding, theme.padding / 2);

            var children = responsiveScale ? _react2.default.createElement(
                ResponsiveScale,
                {
                    style: {
                        transform: "translate(-50%, -50%) scale(" + this.state.scale + ")"
                    }
                },
                this.props.children
            ) : this.props.children;

            return _react2.default.createElement(
                Tile,
                {
                    innerRef: function innerRef(tileElement) {
                        return _this2.tileElement = tileElement;
                    },
                    style: { height: this.state.height }
                },
                children
            );
        }
    }]);

    return Tile;
}(_react2.default.Component);

exports.default = (0, _styledComponents.withTheme)(Tile);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n            color: ", ";\n            background: ", ";\n            padding: ", "em ", "em;\n            border-radius: ", "em;\n            transform: translateX(-50%);\n            position: absolute;\n            opacity: 0.9;\n            &:after {\n                content: \" \";\n                position: absolute;\n                bottom: -9px;\n                border-top: 10px ", " solid;\n                border-left: 10px solid transparent;\n                border-right: 10px solid transparent;\n                left: 50%;\n                margin-right: -50%;\n                transform: translateX(-50%);\n            }\n        "], ["\n            color: ", ";\n            background: ", ";\n            padding: ", "em ", "em;\n            border-radius: ", "em;\n            transform: translateX(-50%);\n            position: absolute;\n            opacity: 0.9;\n            &:after {\n                content: \" \";\n                position: absolute;\n                bottom: -9px;\n                border-top: 10px ", " solid;\n                border-left: 10px solid transparent;\n                border-right: 10px solid transparent;\n                left: 50%;\n                margin-right: -50%;\n                transform: translateX(-50%);\n            }\n        "]);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animateCssStyledComponents = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip(props) {
        _classCallCheck(this, Tooltip);

        var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

        _this.state = {
            x: 0,
            y: 0,
            visible: false
        };
        return _this;
    }

    // Update position of the tooltip


    _createClass(Tooltip, [{
        key: "_onMouseMove",
        value: function _onMouseMove(e) {
            var height = this.tooltipElement ? this.tooltipElement.clientHeight : 9999;

            this.setState({
                x: e.pageX,
                y: e.pageY,
                visible: true,
                height: height
            });
        }

        // Remove the tooltip when not hovering

    }, {
        key: "_onMouseLeave",
        value: function _onMouseLeave() {
            this.setState({ visible: false });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var theme = this.props.theme;


            var TooltipText = _styledComponents2.default.div(_templateObject, theme.colors.white, theme.colors.primary, theme.padding / 2, theme.padding, theme.radius, theme.colors.primary);

            var coords = {
                top: this.state.y - (this.state.height + 40),
                left: this.state.x
            };

            return _react2.default.createElement(
                "span",
                {
                    onMouseMove: function onMouseMove(e) {
                        return _this2._onMouseMove(e);
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2._onMouseLeave();
                    }
                },
                this.state.visible && _react2.default.createElement(
                    TooltipText,
                    {
                        style: coords,
                        onMouseMove: function onMouseMove(e) {
                            return e.stopPropagation();
                        },
                        innerRef: function innerRef(tooltipElement) {
                            return _this2.tooltipElement = tooltipElement;
                        }
                    },
                    this.props.text
                ),
                this.props.children
            );
        }
    }]);

    return Tooltip;
}(_react2.default.Component);

exports.default = (0, _styledComponents.withTheme)(Tooltip);

/***/ })
/******/ ]);
});