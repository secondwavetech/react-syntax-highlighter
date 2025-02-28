(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_dnsZoneFile"],{

/***/ "./node_modules/refractor/lang/dns-zone-file.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/dns-zone-file.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dnsZoneFile; });
// @ts-nocheck
dnsZoneFile.displayName = 'dns-zone-file'
dnsZoneFile.aliases = ['dns-zone']

/** @type {import('../core.js').Syntax} */
function dnsZoneFile(Prism) {
  Prism.languages['dns-zone-file'] = {
    comment: /;.*/,
    string: {
      pattern: /"(?:\\.|[^"\\\r\n])*"/,
      greedy: true
    },
    variable: [
      {
        pattern: /(^\$ORIGIN[ \t]+)\S+/m,
        lookbehind: true
      },
      {
        pattern: /(^|\s)@(?=\s|$)/,
        lookbehind: true
      }
    ],
    keyword: /^\$(?:ORIGIN|INCLUDE|TTL)(?=\s|$)/m,
    class: {
      // https://tools.ietf.org/html/rfc1035#page-13
      pattern: /(^|\s)(?:IN|CH|CS|HS)(?=\s|$)/,
      lookbehind: true,
      alias: 'keyword'
    },
    type: {
      // https://en.wikipedia.org/wiki/List_of_DNS_record_types
      pattern:
        /(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,
      lookbehind: true,
      alias: 'keyword'
    },
    punctuation: /[()]/
  }
  Prism.languages['dns-zone'] = Prism.languages['dns-zone-file']
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_dnsZoneFile.js.map