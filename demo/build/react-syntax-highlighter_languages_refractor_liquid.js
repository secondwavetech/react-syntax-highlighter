(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_liquid"],{

/***/ "./node_modules/refractor/lang/liquid.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/liquid.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return liquid; });
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
// @ts-nocheck

liquid.displayName = 'liquid'
liquid.aliases = []

/** @type {import('../core.js').Syntax} */
function liquid(Prism) {
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.liquid = {
    comment: {
      pattern: /(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,
      lookbehind: true
    },
    delimiter: {
      pattern: /^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,
      alias: 'punctuation'
    },
    string: {
      pattern: /"[^"]*"|'[^']*'/,
      greedy: true
    },
    keyword:
      /\b(?:as|assign|break|continue|cycle|decrement|echo|else|elsif|(?:end)?(?:capture|case|comment|for|form|if|paginate|style|raw|tablerow|unless)|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,
    function: [
      {
        pattern: /(\|\s*)\w+/,
        lookbehind: true,
        alias: 'filter'
      },
      {
        // array functions
        pattern: /(\.\s*)(?:first|last|size)/,
        lookbehind: true
      }
    ],
    boolean: /\b(?:true|false|nil)\b/,
    range: {
      pattern: /\.\./,
      alias: 'operator'
    },
    // https://github.com/Shopify/liquid/blob/698f5e0d967423e013f6169d9111bd969bd78337/lib/liquid/lexer.rb#L21
    number: /\b\d+(?:\.\d+)?\b/,
    operator: /[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|or|contains(?=\s))\b/,
    punctuation: /[.,\[\]()]/
  }
  Prism.hooks.add('before-tokenize', function (env) {
    var liquidPattern =
      /\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g
    var insideRaw = false
    Prism.languages['markup-templating'].buildPlaceholders(
      env,
      'liquid',
      liquidPattern,
      function (match) {
        var tagMatch = /^\{%-?\s*(\w+)/.exec(match)
        if (tagMatch) {
          var tag = tagMatch[1]
          if (tag === 'raw' && !insideRaw) {
            insideRaw = true
            return true
          } else if (tag === 'endraw') {
            insideRaw = false
            return true
          }
        }
        return !insideRaw
      }
    )
  })
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'liquid')
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_liquid.js.map