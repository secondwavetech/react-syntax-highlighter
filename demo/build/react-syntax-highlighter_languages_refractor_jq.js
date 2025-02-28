(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_jq"],{

/***/ "./node_modules/refractor/lang/jq.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/jq.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jq; });
// @ts-nocheck
jq.displayName = 'jq'
jq.aliases = []

/** @type {import('../core.js').Syntax} */
function jq(Prism) {
  ;(function (Prism) {
    var interpolation = /\\\((?:[^()]|\([^()]*\))*\)/.source
    var string = RegExp(
      /"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g, function () {
        return interpolation
      })
    )
    var stringInterpolation = {
      interpolation: {
        pattern: RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + interpolation),
        lookbehind: true,
        inside: {
          content: {
            pattern: /^(\\\()[\s\S]+(?=\)$)/,
            lookbehind: true,
            inside: null // see below
          },
          punctuation: /^\\\(|\)$/
        }
      }
    }
    var jq = (Prism.languages.jq = {
      comment: /#.*/,
      property: {
        pattern: RegExp(string.source + /(?=\s*:(?!:))/.source),
        greedy: true,
        inside: stringInterpolation
      },
      string: {
        pattern: string,
        greedy: true,
        inside: stringInterpolation
      },
      function: {
        pattern: /(\bdef\s+)[a-z_]\w+/i,
        lookbehind: true
      },
      variable: /\B\$\w+/,
      'property-literal': {
        pattern: /\b[a-z_]\w*(?=\s*:(?!:))/i,
        alias: 'property'
      },
      keyword:
        /\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,
      boolean: /\b(?:true|false)\b/,
      number: /(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,
      operator: [
        {
          pattern: /\|=?/,
          alias: 'pipe'
        },
        /\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|or|not)\b/
      ],
      'c-style-function': {
        pattern: /\b[a-z_]\w*(?=\s*\()/i,
        alias: 'function'
      },
      punctuation: /::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,
      dot: {
        pattern: /\./,
        alias: 'important'
      }
    })
    stringInterpolation.interpolation.inside.content.inside = jq
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jq.js.map