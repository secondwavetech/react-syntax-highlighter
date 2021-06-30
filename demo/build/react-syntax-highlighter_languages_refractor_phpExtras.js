(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_phpExtras"],{

/***/ "./node_modules/refractor/lang/php-extras.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/php-extras.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return phpExtras; });
/* harmony import */ var _php_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./php.js */ "./node_modules/refractor/lang/php.js");
// @ts-nocheck

phpExtras.displayName = 'php-extras'
phpExtras.aliases = []

/** @type {import('../core.js').Syntax} */
function phpExtras(Prism) {
  Prism.register(_php_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.insertBefore('php', 'variable', {
    this: /\$this\b/,
    global:
      /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
    scope: {
      pattern: /\b[\w\\]+::/,
      inside: {
        keyword: /static|self|parent/,
        punctuation: /::|\\/
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_phpExtras.js.map