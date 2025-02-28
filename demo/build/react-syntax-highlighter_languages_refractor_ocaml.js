(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_ocaml"],{

/***/ "./node_modules/refractor/lang/ocaml.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/ocaml.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ocaml; });
// @ts-nocheck
ocaml.displayName = 'ocaml'
ocaml.aliases = []

/** @type {import('../core.js').Syntax} */
function ocaml(Prism) {
  Prism.languages.ocaml = {
    comment: /\(\*[\s\S]*?\*\)/,
    string: [
      {
        pattern: /"(?:\\.|[^\\\r\n"])*"/,
        greedy: true
      },
      {
        pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
        greedy: true
      }
    ],
    number:
      /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
    directive: {
      pattern: /\B#\w+/,
      alias: 'important'
    },
    label: {
      pattern: /\B~\w+/,
      alias: 'function'
    },
    'type-variable': {
      pattern: /\B'\w+/,
      alias: 'function'
    },
    variant: {
      pattern: /`\w+/,
      alias: 'variable'
    },
    module: {
      pattern: /\b[A-Z]\w+/,
      alias: 'variable'
    },
    // For the list of keywords and operators,
    // see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
    keyword:
      /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
    boolean: /\b(?:false|true)\b/,
    // Custom operators are allowed
    operator:
      /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
    punctuation: /[(){}\[\]|.,:;]|\b_\b/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ocaml.js.map