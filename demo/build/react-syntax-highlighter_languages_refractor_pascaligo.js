(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_pascaligo"],{

/***/ "./node_modules/refractor/lang/pascaligo.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/pascaligo.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pascaligo; });
// @ts-nocheck
pascaligo.displayName = 'pascaligo'
pascaligo.aliases = []

/** @type {import('../core.js').Syntax} */
function pascaligo(Prism) {
  ;(function (Prism) {
    // Pascaligo is a layer 2 smart contract language for the tezos blockchain
    var braces = /\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source
    var type = /(?:\b\w+(?:<braces>)?|<braces>)/.source.replace(
      /<braces>/g,
      function () {
        return braces
      }
    )
    var pascaligo = (Prism.languages.pascaligo = {
      comment: /\(\*[\s\S]+?\*\)|\/\/.*/,
      string: {
        pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,
        greedy: true
      },
      'class-name': [
        {
          pattern: RegExp(
            /(\btype\s+\w+\s+is\s+)<type>/.source.replace(
              /<type>/g,
              function () {
                return type
              }
            ),
            'i'
          ),
          lookbehind: true,
          inside: null // see below
        },
        {
          pattern: RegExp(
            /<type>(?=\s+is\b)/.source.replace(/<type>/g, function () {
              return type
            }),
            'i'
          ),
          inside: null // see below
        },
        {
          pattern: RegExp(
            /(:\s*)<type>/.source.replace(/<type>/g, function () {
              return type
            })
          ),
          lookbehind: true,
          inside: null // see below
        }
      ],
      keyword: {
        pattern:
          /(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,
        lookbehind: true
      },
      boolean: {
        pattern: /(^|[^&])\b(?:True|False)\b/i,
        lookbehind: true
      },
      builtin: {
        pattern: /(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,
        lookbehind: true
      },
      function: /\b\w+(?=\s*\()/i,
      number: [
        // Hexadecimal, octal and binary
        /%[01]+|&[0-7]+|\$[a-f\d]+/i, // Decimal
        /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i
      ],
      operator:
        /->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,
      punctuation: /\(\.|\.\)|[()\[\]:;,.{}]/
    })
    var classNameInside = [
      'comment',
      'keyword',
      'builtin',
      'operator',
      'punctuation'
    ].reduce(function (accum, key) {
      accum[key] = pascaligo[key]
      return accum
    }, {})
    pascaligo['class-name'].forEach(function (p) {
      p.inside = classNameInside
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_pascaligo.js.map