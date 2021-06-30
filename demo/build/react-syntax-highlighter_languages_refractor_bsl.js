(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_bsl"],{

/***/ "./node_modules/refractor/lang/bsl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/bsl.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bsl; });
// @ts-nocheck
bsl.displayName = 'bsl'
bsl.aliases = ['oscript']

/** @type {import('../core.js').Syntax} */
function bsl(Prism) {
  /* eslint-disable no-misleading-character-class */
  // 1C:Enterprise
  // https://github.com/Diversus23/
  //
  Prism.languages.bsl = {
    comment: /\/\/.*/,
    string: [
      // Строки
      // Strings
      {
        pattern: /"(?:[^"]|"")*"(?!")/,
        greedy: true
      }, // Дата и время
      // Date & time
      {
        pattern: /'(?:[^'\r\n\\]|\\.)*'/
      }
    ],
    keyword: [
      {
        // RU
        pattern:
          /(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:пока|для|новый|прервать|попытка|исключение|вызватьисключение|иначе|конецпопытки|неопределено|функция|перем|возврат|конецфункции|если|иначеесли|процедура|конецпроцедуры|тогда|знач|экспорт|конецесли|из|каждого|истина|ложь|по|цикл|конеццикла|выполнить)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,
        lookbehind: true
      },
      {
        // EN
        pattern:
          /\b(?:while|for|new|break|try|except|raise|else|endtry|undefined|function|var|return|endfunction|null|if|elseif|procedure|endprocedure|then|val|export|endif|in|each|true|false|to|do|enddo|execute)\b/i
      }
    ],
    number: {
      pattern:
        /(^(?=\d)|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\d+(?:\.\d*)?|\.\d+)(?:E[+-]?\d+)?/i,
      lookbehind: true
    },
    operator: [
      /[<>+\-*/]=?|[%=]/, // RU
      {
        pattern:
          /(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:и|или|не)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,
        lookbehind: true
      }, // EN
      {
        pattern: /\b(?:and|or|not)\b/i
      }
    ],
    punctuation: /\(\.|\.\)|[()\[\]:;,.]/,
    directive: [
      // Теги препроцессора вида &Клиент, &Сервер, ...
      // Preprocessor tags of the type &Client, &Server, ...
      {
        pattern: /^(\s*)&.*/m,
        lookbehind: true,
        alias: 'important'
      }, // Инструкции препроцессора вида:
      // #Если Сервер Тогда
      // ...
      // #КонецЕсли
      // Preprocessor instructions of the form:
      // #If Server Then
      // ...
      // #EndIf
      {
        pattern: /^\s*#.*/gm,
        alias: 'important'
      }
    ]
  }
  Prism.languages.oscript = Prism.languages['bsl']
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_bsl.js.map