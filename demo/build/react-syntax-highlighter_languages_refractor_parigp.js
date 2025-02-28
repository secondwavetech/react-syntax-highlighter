(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_parigp"],{

/***/ "./node_modules/refractor/lang/parigp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/parigp.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parigp; });
// @ts-nocheck
parigp.displayName = 'parigp'
parigp.aliases = []

/** @type {import('../core.js').Syntax} */
function parigp(Prism) {
  Prism.languages.parigp = {
    comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
    string: {
      pattern: /"(?:[^"\\\r\n]|\\.)*"/,
      greedy: true
    },
    // PARI/GP does not care about white spaces at all
    // so let's process the keywords to build an appropriate regexp
    // (e.g. "b *r *e *a *k", etc.)
    keyword: (function () {
      var keywords = [
        'breakpoint',
        'break',
        'dbg_down',
        'dbg_err',
        'dbg_up',
        'dbg_x',
        'forcomposite',
        'fordiv',
        'forell',
        'forpart',
        'forprime',
        'forstep',
        'forsubgroup',
        'forvec',
        'for',
        'iferr',
        'if',
        'local',
        'my',
        'next',
        'return',
        'until',
        'while'
      ]
      keywords = keywords
        .map(function (keyword) {
          return keyword.split('').join(' *')
        })
        .join('|')
      return RegExp('\\b(?:' + keywords + ')\\b')
    })(),
    function: /\b\w(?:[\w ]*\w)?(?= *\()/,
    number: {
      // The lookbehind and the negative lookahead prevent from breaking the .. operator
      pattern:
        /((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i,
      lookbehind: true
    },
    operator:
      /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
    punctuation: /[\[\]{}().,:;|]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_parigp.js.map