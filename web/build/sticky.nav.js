/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/sticky.nav/sticky.nav.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/sticky.nav/sticky.nav.js":
/*!********************************************!*\
  !*** ./assets/js/sticky.nav/sticky.nav.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  // Custom \n  var stickyToggle = function stickyToggle(sticky, stickyWrapper, scrollElement) {\n    var stickyHeight = sticky.outerHeight();\n    var stickyParentWidth = sticky.parent().innerWidth();\n    var stickyTop = stickyWrapper.offset().top;\n\n    if (scrollElement.scrollTop() >= stickyTop) {\n      stickyWrapper.height(stickyHeight);\n      sticky.width(stickyParentWidth);\n      sticky.addClass(\"is-sticky\");\n    } else {\n      sticky.removeClass(\"is-sticky\");\n      stickyWrapper.height('auto');\n    }\n  }; // Find all data-toggle=\"sticky-onscroll\" elements\n\n\n  $('[data-toggle=\"sticky-onscroll\"]').each(function () {\n    var sticky = $(this);\n    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page\n\n    sticky.before(stickyWrapper);\n    sticky.addClass('sticky'); // Scroll & resize events\n\n    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {\n      stickyToggle(sticky, stickyWrapper, $(this));\n    }); // On page load\n\n    stickyToggle(sticky, stickyWrapper, $(this));\n  });\n}); // Компенсация высоты строки липкой навигации\n\n(function (document, history, location) {\n  var HISTORY_SUPPORT = !!(history && history.pushState);\n  var anchorScrolls = {\n    ANCHOR_REGEX: /^#[^ ]+$/,\n    OFFSET_HEIGHT_PX: 42,\n\n    /**\r\n     * Establish events, and fix initial scroll position if a hash is provided.\r\n     */\n    init: function init() {\n      this.scrollToCurrent();\n      $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));\n      $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));\n    },\n\n    /**\r\n     * Return the offset amount to deduct from the normal scroll position.\r\n     * Modify as appropriate to allow for dynamic calculations\r\n     */\n    getFixedOffset: function getFixedOffset() {\n      return this.OFFSET_HEIGHT_PX;\n    },\n\n    /**\r\n     * If the provided href is an anchor which resolves to an element on the\r\n     * page, scroll to it.\r\n     * @param  {String} href\r\n     * @return {Boolean} - Was the href an anchor.\r\n     */\n    scrollIfAnchor: function scrollIfAnchor(href, pushToHistory) {\n      var match, anchorOffset;\n\n      if (!this.ANCHOR_REGEX.test(href)) {\n        return false;\n      }\n\n      match = document.getElementById(href.slice(1));\n\n      if (match) {\n        anchorOffset = $(match).offset().top - this.getFixedOffset();\n        $('html, body').animate({\n          scrollTop: anchorOffset\n        }); // Add the state to history as-per normal anchor links\n\n        if (HISTORY_SUPPORT && pushToHistory) {\n          history.pushState({}, document.title, location.pathname + href);\n        }\n      }\n\n      return !!match;\n    },\n\n    /**\r\n     * Attempt to scroll to the current location's hash.\r\n     */\n    scrollToCurrent: function scrollToCurrent(e) {\n      if (this.scrollIfAnchor(window.location.hash) && e) {\n        e.preventDefault();\n      }\n    },\n\n    /**\r\n     * If the click event's target was an anchor, fix the scroll position.\r\n     */\n    delegateAnchors: function delegateAnchors(e) {\n      var elem = e.target;\n\n      if (this.scrollIfAnchor(elem.getAttribute('href'), true)) {\n        e.preventDefault();\n      }\n    }\n  };\n  $(window).on('load', $.proxy(anchorScrolls, 'init'));\n})(window.document, window.history, window.location);\n\n//# sourceURL=webpack:///./assets/js/sticky.nav/sticky.nav.js?");

/***/ })

/******/ });