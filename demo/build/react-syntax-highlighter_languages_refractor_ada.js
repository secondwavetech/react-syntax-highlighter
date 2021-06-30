(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_ada"],{

/***/ "./node_modules/refractor/lang/ada.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ada.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ada; });
// @ts-nocheck
ada.displayName = 'ada'
ada.aliases = []

/** @type {import('../core.js').Syntax} */
function ada(Prism) {
  Prism.languages.ada = {
    comment: /--.*/,
    string: /"(?:""|[^"\r\f\n])*"/i,
    number: [
      {
        pattern:
          /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i
      },
      {
        pattern: /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i
      }
    ],
    'attr-name': /\b'\w+/i,
    keyword:
      /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
    boolean: /\b(?:true|false)\b/i,
    operator: /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
    punctuation: /\.\.?|[,;():]/,
    char: /'.'/,
    variable: /\b[a-z](?:\w)*\b/i
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ada.js.map