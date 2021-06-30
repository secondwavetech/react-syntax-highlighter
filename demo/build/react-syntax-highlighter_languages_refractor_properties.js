(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_properties"],{

/***/ "./node_modules/refractor/lang/properties.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/properties.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return properties; });
// @ts-nocheck
properties.displayName = 'properties'
properties.aliases = []

/** @type {import('../core.js').Syntax} */
function properties(Prism) {
  Prism.languages.properties = {
    comment: /^[ \t]*[#!].*$/m,
    'attr-value': {
      pattern:
        /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
      lookbehind: true
    },
    'attr-name': /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,
    punctuation: /[=:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_properties.js.map