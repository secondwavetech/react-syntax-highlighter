(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_json5"],{

/***/ "./node_modules/refractor/lang/json5.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/json5.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return json5; });
/* harmony import */ var _json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json.js */ "./node_modules/refractor/lang/json.js");
// @ts-nocheck

json5.displayName = 'json5'
json5.aliases = []

/** @type {import('../core.js').Syntax} */
function json5(Prism) {
  Prism.register(_json_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    var string = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/
    Prism.languages.json5 = Prism.languages.extend('json', {
      property: [
        {
          pattern: RegExp(string.source + '(?=\\s*:)'),
          greedy: true
        },
        {
          pattern:
            /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
          alias: 'unquoted'
        }
      ],
      string: {
        pattern: string,
        greedy: true
      },
      number:
        /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_json5.js.map