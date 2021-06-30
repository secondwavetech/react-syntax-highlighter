(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_solidity"],{

/***/ "./node_modules/refractor/lang/solidity.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/solidity.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return solidity; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

solidity.displayName = 'solidity'
solidity.aliases = ['sol']

/** @type {import('../core.js').Syntax} */
function solidity(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.solidity = Prism.languages.extend('clike', {
    'class-name': {
      pattern:
        /(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,
      lookbehind: true
    },
    keyword:
      /\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,
    operator: /=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/
  })
  Prism.languages.insertBefore('solidity', 'keyword', {
    builtin:
      /\b(?:address|bool|string|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|byte|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/
  })
  Prism.languages.insertBefore('solidity', 'number', {
    version: {
      pattern: /([<>]=?|\^)\d+\.\d+\.\d+\b/,
      lookbehind: true,
      alias: 'number'
    }
  })
  Prism.languages.sol = Prism.languages.solidity
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_solidity.js.map