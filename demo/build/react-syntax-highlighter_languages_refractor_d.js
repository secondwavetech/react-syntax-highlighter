(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_d"],{

/***/ "./node_modules/refractor/lang/d.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/d.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return d; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

d.displayName = 'd'
d.aliases = []

/** @type {import('../core.js').Syntax} */
function d(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.d = Prism.languages.extend('clike', {
    comment: [
      {
        // Shebang
        pattern: /^\s*#!.+/,
        greedy: true
      },
      {
        pattern: RegExp(
          /(^|[^\\])/.source +
            '(?:' +
            [
              // /+ comment +/
              // Allow one level of nesting
              /\/\+(?:\/\+(?:[^+]|\+(?!\/))*\+\/|(?!\/\+)[\s\S])*?\+\//.source, // // comment
              /\/\/.*/.source, // /* comment */
              /\/\*[\s\S]*?\*\//.source
            ].join('|') +
            ')'
        ),
        lookbehind: true,
        greedy: true
      }
    ],
    string: [
      {
        pattern: RegExp(
          [
            // r"", x""
            /\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source, // q"[]", q"()", q"<>", q"{}"
            /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source, // q"IDENT
            // ...
            // IDENT"
            /\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source, // q"//", q"||", etc.
            // eslint-disable-next-line regexp/strict
            /\bq"(.)[\s\S]*?\2"/.source, // Characters
            // 'a', '\\', '\n', '\xFF', '\377', '\uFFFF', '\U0010FFFF', '\quot'
            /'(?:\\(?:\W|\w+)|[^\\])'/.source, // eslint-disable-next-line regexp/strict
            /(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source
          ].join('|'),
          'm'
        ),
        greedy: true
      },
      {
        pattern: /\bq\{(?:\{[^{}]*\}|[^{}])*\}/,
        greedy: true,
        alias: 'token-string'
      }
    ],
    // In order: $, keywords and special tokens, globally defined symbols
    keyword:
      /\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,
    number: [
      // The lookbehind and the negative look-ahead try to prevent bad highlighting of the .. operator
      // Hexadecimal numbers must be handled separately to avoid problems with exponent "e"
      /\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i,
      {
        pattern:
          /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i,
        lookbehind: true
      }
    ],
    operator:
      /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
  })
  Prism.languages.insertBefore('d', 'keyword', {
    property: /\B@\w*/
  })
  Prism.languages.insertBefore('d', 'function', {
    register: {
      // Iasm registers
      pattern:
        /\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
      alias: 'variable'
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_d.js.map