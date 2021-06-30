(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_editorconfig"],{

/***/ "./node_modules/refractor/lang/editorconfig.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/editorconfig.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return editorconfig; });
// @ts-nocheck
editorconfig.displayName = 'editorconfig'
editorconfig.aliases = []

/** @type {import('../core.js').Syntax} */
function editorconfig(Prism) {
  Prism.languages.editorconfig = {
    // https://editorconfig-specification.readthedocs.io/en/latest/
    comment: /[;#].*/,
    section: {
      pattern: /(^[ \t]*)\[.+\]/m,
      lookbehind: true,
      alias: 'keyword',
      inside: {
        regex: /\\\\[\[\]{},!?.*]/,
        // Escape special characters with '\\'
        operator: /[!?]|\.\.|\*{1,2}/,
        punctuation: /[\[\]{},]/
      }
    },
    property: {
      pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
      lookbehind: true
    },
    value: {
      pattern: /=.*/,
      alias: 'string',
      inside: {
        punctuation: /^=/
      }
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_editorconfig.js.map