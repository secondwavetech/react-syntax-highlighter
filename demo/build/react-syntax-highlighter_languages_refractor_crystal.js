(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_crystal"],{

/***/ "./node_modules/refractor/lang/crystal.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/crystal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return crystal; });
/* harmony import */ var _ruby_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ruby.js */ "./node_modules/refractor/lang/ruby.js");
// @ts-nocheck

crystal.displayName = 'crystal'
crystal.aliases = []

/** @type {import('../core.js').Syntax} */
function crystal(Prism) {
  Prism.register(_ruby_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    Prism.languages.crystal = Prism.languages.extend('ruby', {
      keyword: [
        /\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/,
        {
          pattern: /(\.\s*)(?:is_a|responds_to)\?/,
          lookbehind: true
        }
      ],
      number:
        /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/
    })
    Prism.languages.insertBefore('crystal', 'string', {
      attribute: {
        pattern: /@\[.+?\]/,
        alias: 'attr-name',
        inside: {
          delimiter: {
            pattern: /^@\[|\]$/,
            alias: 'tag'
          },
          rest: Prism.languages.crystal
        }
      },
      expansion: [
        {
          pattern: /\{\{.+?\}\}/,
          inside: {
            delimiter: {
              pattern: /^\{\{|\}\}$/,
              alias: 'tag'
            },
            rest: Prism.languages.crystal
          }
        },
        {
          pattern: /\{%.+?%\}/,
          inside: {
            delimiter: {
              pattern: /^\{%|%\}$/,
              alias: 'tag'
            },
            rest: Prism.languages.crystal
          }
        }
      ]
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_crystal.js.map