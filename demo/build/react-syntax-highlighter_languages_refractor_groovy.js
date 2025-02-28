(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_groovy"],{

/***/ "./node_modules/refractor/lang/groovy.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/groovy.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return groovy; });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

groovy.displayName = 'groovy'
groovy.aliases = []

/** @type {import('../core.js').Syntax} */
function groovy(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.groovy = Prism.languages.extend('clike', {
    string: [
      {
        // https://groovy-lang.org/syntax.html#_dollar_slashy_string
        pattern:
          /("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
        greedy: true
      },
      {
        // TODO: Slash strings (e.g. /foo/) can contain line breaks but this will cause a lot of trouble with
        // simple division (see JS regex), so find a fix maybe?
        pattern: /(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      }
    ],
    keyword:
      /\b(?:as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
    number:
      /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,
    operator: {
      pattern:
        /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
      lookbehind: true
    },
    punctuation: /\.+|[{}[\];(),:$]/
  })
  Prism.languages.insertBefore('groovy', 'string', {
    shebang: {
      pattern: /#!.+/,
      alias: 'comment'
    }
  })
  Prism.languages.insertBefore('groovy', 'punctuation', {
    'spock-block': /\b(?:setup|given|when|then|and|cleanup|expect|where):/
  })
  Prism.languages.insertBefore('groovy', 'function', {
    annotation: {
      pattern: /(^|[^.])@\w+/,
      lookbehind: true,
      alias: 'punctuation'
    }
  }) // Handle string interpolation
  Prism.hooks.add('wrap', function (env) {
    if (env.language === 'groovy' && env.type === 'string') {
      var delimiter = env.content.value[0]
      if (delimiter != "'") {
        var pattern = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/
        if (delimiter === '$') {
          pattern = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/
        } // To prevent double HTML-encoding we have to decode env.content first
        env.content.value = env.content.value
          .replace(/&lt;/g, '<')
          .replace(/&amp;/g, '&')
        env.content = Prism.highlight(env.content.value, {
          expression: {
            pattern: pattern,
            lookbehind: true,
            inside: Prism.languages.groovy
          }
        })
        env.classes.push(delimiter === '/' ? 'regex' : 'gstring')
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_groovy.js.map