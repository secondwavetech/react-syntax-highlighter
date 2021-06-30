(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_protobuf"],{

/***/ "./node_modules/refractor/lang/protobuf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/protobuf.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return protobuf; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

protobuf.displayName = 'protobuf'
protobuf.aliases = []

/** @type {import('../core.js').Syntax} */
function protobuf(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    var builtinTypes =
      /\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/
    Prism.languages.protobuf = Prism.languages.extend('clike', {
      'class-name': [
        {
          pattern:
            /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
          lookbehind: true
        },
        {
          pattern:
            /(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,
          lookbehind: true
        }
      ],
      keyword:
        /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,
      function: /\b[a-z_]\w*(?=\s*\()/i
    })
    Prism.languages.insertBefore('protobuf', 'operator', {
      map: {
        pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,
        alias: 'class-name',
        inside: {
          punctuation: /[<>.,]/,
          builtin: builtinTypes
        }
      },
      builtin: builtinTypes,
      'positional-class-name': {
        pattern: /(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,
        alias: 'class-name',
        inside: {
          punctuation: /\./
        }
      },
      annotation: {
        pattern: /(\[\s*)[a-z_]\w*(?=\s*=)/i,
        lookbehind: true
      }
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_protobuf.js.map