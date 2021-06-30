(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_scala"],{

/***/ "./node_modules/refractor/lang/scala.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/scala.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scala; });
/* harmony import */ var _java_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./java.js */ "./node_modules/refractor/lang/java.js");
// @ts-nocheck

scala.displayName = 'scala'
scala.aliases = []

/** @type {import('../core.js').Syntax} */
function scala(Prism) {
  Prism.register(_java_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.scala = Prism.languages.extend('java', {
    'triple-quoted-string': {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string'
    },
    string: {
      pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    keyword:
      /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
    number:
      /\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,
    builtin:
      /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
    symbol: /'[^\d\s\\]\w*/
  })
  delete Prism.languages.scala['class-name']
  delete Prism.languages.scala['function']
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_scala.js.map