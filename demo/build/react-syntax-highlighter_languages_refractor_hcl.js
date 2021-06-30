(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_hcl"],{

/***/ "./node_modules/refractor/lang/hcl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/hcl.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hcl; });
// @ts-nocheck
hcl.displayName = 'hcl'
hcl.aliases = []

/** @type {import('../core.js').Syntax} */
function hcl(Prism) {
  Prism.languages.hcl = {
    comment: /(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,
    heredoc: {
      pattern: /<<-?(\w+\b)[\s\S]*?^[ \t]*\1/m,
      greedy: true,
      alias: 'string'
    },
    keyword: [
      {
        pattern:
          /(?:resource|data)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+\{)/i,
        inside: {
          type: {
            pattern: /(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i,
            lookbehind: true,
            alias: 'variable'
          }
        }
      },
      {
        pattern:
          /(?:provider|provisioner|variable|output|module|backend)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?=\{)/i,
        inside: {
          type: {
            pattern:
              /(provider|provisioner|variable|output|module|backend)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i,
            lookbehind: true,
            alias: 'variable'
          }
        }
      },
      /[\w-]+(?=\s+\{)/
    ],
    property: [/[-\w\.]+(?=\s*=(?!=))/, /"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/],
    string: {
      pattern:
        /"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+(?!\$)|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/,
          lookbehind: true,
          inside: {
            type: {
              pattern:
                /(\b(?:terraform|var|self|count|module|path|data|local)\b\.)[\w\*]+/i,
              lookbehind: true,
              alias: 'variable'
            },
            keyword: /\b(?:terraform|var|self|count|module|path|data|local)\b/i,
            function: /\w+(?=\()/,
            string: {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: true
            },
            number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
            punctuation: /[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/
          }
        }
      }
    },
    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
    boolean: /\b(?:true|false)\b/i,
    punctuation: /[=\[\]{}]/
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_hcl.js.map