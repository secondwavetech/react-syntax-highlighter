(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_autoit"],{

/***/ "./node_modules/refractor/lang/autoit.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/autoit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return autoit; });
// @ts-nocheck
autoit.displayName = 'autoit'
autoit.aliases = []

/** @type {import('../core.js').Syntax} */
function autoit(Prism) {
  Prism.languages.autoit = {
    comment: [
      /;.*/,
      {
        // The multi-line comments delimiters can actually be commented out with ";"
        pattern:
          /(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:comments-end|ce)/m,
        lookbehind: true
      }
    ],
    url: {
      pattern: /(^[\t ]*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
      lookbehind: true
    },
    string: {
      pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
      greedy: true,
      inside: {
        variable: /([%$@])\w+\1/
      }
    },
    directive: {
      pattern: /(^[\t ]*)#\w+/m,
      lookbehind: true,
      alias: 'keyword'
    },
    function: /\b\w+(?=\()/,
    // Variables and macros
    variable: /[$@]\w+/,
    keyword:
      /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
    number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
    boolean: /\b(?:True|False)\b/i,
    operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
    punctuation: /[\[\]().,:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_autoit.js.map