(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_csp"],{

/***/ "./node_modules/refractor/lang/csp.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/csp.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return csp; });
// @ts-nocheck
csp.displayName = 'csp'
csp.aliases = []

/** @type {import('../core.js').Syntax} */
function csp(Prism) {
  /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/csp-cheat-sheet/
   *
   * Supports the following:
   *  - CSP Level 1
   *  - CSP Level 2
   *  - CSP Level 3
   */
  Prism.languages.csp = {
    directive: {
      pattern:
        /(^|[^-\da-z])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[^-\da-z]|$)/i,
      lookbehind: true,
      alias: 'keyword'
    },
    safe: {
      // CSP2 hashes and nonces are base64 values. CSP3 accepts both base64 and base64url values.
      // See https://tools.ietf.org/html/rfc4648#section-4
      // See https://tools.ietf.org/html/rfc4648#section-5
      pattern:
        /'(?:deny|none|report-sample|self|strict-dynamic|top-only|(?:nonce|sha(?:256|384|512))-[-+/\w=]+)'/i,
      alias: 'selector'
    },
    unsafe: {
      pattern:
        /(?:'unsafe-(?:allow-redirects|dynamic|eval|hash-attributes|hashed-attributes|hashes|inline)'|\*)/i,
      alias: 'function'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_csp.js.map