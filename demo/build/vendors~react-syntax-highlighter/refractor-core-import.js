(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~react-syntax-highlighter/refractor-core-import"],{

/***/ "./node_modules/character-entities-legacy/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/character-entities-legacy/index.js ***!
  \*********************************************************/
/*! exports provided: characterEntitiesLegacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterEntitiesLegacy", function() { return characterEntitiesLegacy; });
var characterEntitiesLegacy = {
  AElig: 'Æ',
  AMP: '&',
  Aacute: 'Á',
  Acirc: 'Â',
  Agrave: 'À',
  Aring: 'Å',
  Atilde: 'Ã',
  Auml: 'Ä',
  COPY: '©',
  Ccedil: 'Ç',
  ETH: 'Ð',
  Eacute: 'É',
  Ecirc: 'Ê',
  Egrave: 'È',
  Euml: 'Ë',
  GT: '>',
  Iacute: 'Í',
  Icirc: 'Î',
  Igrave: 'Ì',
  Iuml: 'Ï',
  LT: '<',
  Ntilde: 'Ñ',
  Oacute: 'Ó',
  Ocirc: 'Ô',
  Ograve: 'Ò',
  Oslash: 'Ø',
  Otilde: 'Õ',
  Ouml: 'Ö',
  QUOT: '"',
  REG: '®',
  THORN: 'Þ',
  Uacute: 'Ú',
  Ucirc: 'Û',
  Ugrave: 'Ù',
  Uuml: 'Ü',
  Yacute: 'Ý',
  aacute: 'á',
  acirc: 'â',
  acute: '´',
  aelig: 'æ',
  agrave: 'à',
  amp: '&',
  aring: 'å',
  atilde: 'ã',
  auml: 'ä',
  brvbar: '¦',
  ccedil: 'ç',
  cedil: '¸',
  cent: '¢',
  copy: '©',
  curren: '¤',
  deg: '°',
  divide: '÷',
  eacute: 'é',
  ecirc: 'ê',
  egrave: 'è',
  eth: 'ð',
  euml: 'ë',
  frac12: '½',
  frac14: '¼',
  frac34: '¾',
  gt: '>',
  iacute: 'í',
  icirc: 'î',
  iexcl: '¡',
  igrave: 'ì',
  iquest: '¿',
  iuml: 'ï',
  laquo: '«',
  lt: '<',
  macr: '¯',
  micro: 'µ',
  middot: '·',
  nbsp: ' ',
  not: '¬',
  ntilde: 'ñ',
  oacute: 'ó',
  ocirc: 'ô',
  ograve: 'ò',
  ordf: 'ª',
  ordm: 'º',
  oslash: 'ø',
  otilde: 'õ',
  ouml: 'ö',
  para: '¶',
  plusmn: '±',
  pound: '£',
  quot: '"',
  raquo: '»',
  reg: '®',
  sect: '§',
  shy: '­',
  sup1: '¹',
  sup2: '²',
  sup3: '³',
  szlig: 'ß',
  thorn: 'þ',
  times: '×',
  uacute: 'ú',
  ucirc: 'û',
  ugrave: 'ù',
  uml: '¨',
  uuml: 'ü',
  yacute: 'ý',
  yen: '¥',
  yuml: 'ÿ'
}


/***/ }),

/***/ "./node_modules/character-reference-invalid/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/character-reference-invalid/index.js ***!
  \***********************************************************/
/*! exports provided: characterReferenceInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterReferenceInvalid", function() { return characterReferenceInvalid; });
var characterReferenceInvalid = {
  0: '�',
  128: '€',
  130: '‚',
  131: 'ƒ',
  132: '„',
  133: '…',
  134: '†',
  135: '‡',
  136: 'ˆ',
  137: '‰',
  138: 'Š',
  139: '‹',
  140: 'Œ',
  142: 'Ž',
  145: '‘',
  146: '’',
  147: '“',
  148: '”',
  149: '•',
  150: '–',
  151: '—',
  152: '˜',
  153: '™',
  154: 'š',
  155: '›',
  156: 'œ',
  158: 'ž',
  159: 'Ÿ'
}


/***/ }),

/***/ "./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/*! exports provided: parse, stringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/**
 * @typedef {Object} StringifyOptions
 * @property {boolean} [padLeft=true] Whether to pad a space before a token (`boolean`, default: `true`).
 * @property {boolean} [padRight=false] Whether to pad a space after a token (`boolean`, default: `false`).
 */

/**
 * Parse comma separated tokens to an array.
 *
 * @param {string} value
 * @returns {Array.<string>}
 */
function parse(value) {
  /** @type {Array.<string>} */
  var tokens = []
  var input = String(value || '')
  var index = input.indexOf(',')
  var start = 0
  /** @type {boolean} */
  var end
  /** @type {string} */
  var token

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    token = input.slice(start, index).trim()

    if (token || !end) {
      tokens.push(token)
    }

    start = index + 1
    index = input.indexOf(',', start)
  }

  return tokens
}

/**
 * Serialize an array of strings to comma separated tokens.
 *
 * @param {Array.<string|number>} values
 * @param {StringifyOptions} [options]
 * @returns {string}
 */
function stringify(values, options) {
  var settings = options || {}

  // Ensure the last empty entry is seen.
  if (values[values.length - 1] === '') {
    values = values.concat('')
  }

  return values
    .join(
      (settings.padRight ? ' ' : '') +
        ',' +
        (settings.padLeft === false ? '' : ' ')
    )
    .trim()
}


/***/ }),

/***/ "./node_modules/hast-util-parse-selector/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hast-util-parse-selector/index.js ***!
  \********************************************************/
/*! exports provided: parseSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSelector", function() { return parseSelector; });
/**
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Element} Element
 */

var search = /[#.]/g

/**
 * Create a hast element from a simple CSS selector.
 *
 * @param selector A simple CSS selector.
 *   Can contain a tag-name (`foo`), classes (`.bar`), and an ID (`#baz`).
 *   Multiple classes are allowed.
 *   Uses the last ID if multiple IDs are found.
 * @param [defaultTagName='div'] Tag name to use if `selector` does not specify one.
 */
const parseSelector =
  /**
   * @type {(
   *  <Selector extends string, DefaultTagName extends string = 'div'>(selector?: Selector, defaultTagName?: DefaultTagName) => Element & {tagName: import('./extract.js').ExtractTagName<Selector, DefaultTagName>}
   * )}
   */
  (
    /**
     * @param {string} [selector]
     * @param {string} [defaultTagName='div']
     * @returns {Element}
     */
    function (selector, defaultTagName = 'div') {
      var value = selector || ''
      /** @type {Properties} */
      var props = {}
      var start = 0
      /** @type {string} */
      var subvalue
      /** @type {string} */
      var previous
      /** @type {RegExpMatchArray} */
      var match

      while (start < value.length) {
        search.lastIndex = start
        match = search.exec(value)
        subvalue = value.slice(start, match ? match.index : value.length)

        if (subvalue) {
          if (!previous) {
            defaultTagName = subvalue
          } else if (previous === '#') {
            props.id = subvalue
          } else if (Array.isArray(props.className)) {
            props.className.push(subvalue)
          } else {
            props.className = [subvalue]
          }

          start += subvalue.length
        }

        if (match) {
          previous = match[0]
          start++
        }
      }

      return {
        type: 'element',
        tagName: defaultTagName,
        properties: props,
        children: []
      }
    }
  )


/***/ }),

/***/ "./node_modules/hastscript/index.js":
/*!******************************************!*\
  !*** ./node_modules/hastscript/index.js ***!
  \******************************************/
/*! exports provided: h, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index.js */ "./node_modules/hastscript/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/**
 * @typedef {import('./lib/index.js').Child} Child Acceptable child value
 * @typedef {import('./lib/index.js').Properties} Properties Acceptable properties value.
 */




/***/ }),

/***/ "./node_modules/hastscript/lib/core.js":
/*!*********************************************!*\
  !*** ./node_modules/hastscript/lib/core.js ***!
  \*********************************************/
/*! exports provided: core */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "core", function() { return core; });
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/index.js");
/* harmony import */ var hast_util_parse_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hast-util-parse-selector */ "./node_modules/hast-util-parse-selector/index.js");
/* harmony import */ var space_separated_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! space-separated-tokens */ "./node_modules/space-separated-tokens/index.js");
/* harmony import */ var comma_separated_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! comma-separated-tokens */ "./node_modules/comma-separated-tokens/index.js");
/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {Root['children'][number]} Child
 * @typedef {Child|Root} Node
 * @typedef {import('property-information').Info} Info
 * @typedef {import('property-information').Schema} Schema
 *
 * @typedef {Root|Element} HResult
 * @typedef {string|number} HStyleValue
 * @typedef {Object.<string, HStyleValue>} HStyle
 * @typedef {string|number|boolean|null|undefined} HPrimitiveValue
 * @typedef {Array.<string|number>} HArrayValue
 * @typedef {HPrimitiveValue|HArrayValue} HPropertyValue
 * @typedef {{[property: string]: HPropertyValue|HStyle}} HProperties
 *
 * @typedef {string|number|null|undefined} HPrimitiveChild
 * @typedef {Array.<Node|HPrimitiveChild>} HArrayChild
 * @typedef {Node|HPrimitiveChild|HArrayChild} HChild
 */






var buttonTypes = new Set(['menu', 'submit', 'reset', 'button'])

var own = {}.hasOwnProperty

/**
 * @param {Schema} schema
 * @param {string} defaultTagName
 * @param {Array.<string>} [caseSensitive]
 */
function core(schema, defaultTagName, caseSensitive) {
  var adjust = caseSensitive && createAdjustMap(caseSensitive)

  const h =
    /**
     * @type {{
     *   (): Root
     *   (selector: null|undefined, ...children: HChild[]): Root
     *   (selector: string, properties: HProperties, ...children: HChild[]): Element
     *   (selector: string, ...children: HChild[]): Element
     * }}
     */
    (
      /**
       * Hyperscript compatible DSL for creating virtual hast trees.
       *
       * @param {string|null} [selector]
       * @param {HProperties|HChild} [properties]
       * @param {HChild[]} children
       * @returns {HResult}
       */
      function (selector, properties, ...children) {
        var index = -1
        /** @type {HResult} */
        var node
        /** @type {string} */
        var key

        if (selector === undefined || selector === null) {
          node = {type: 'root', children: []}
          // @ts-ignore Properties are not supported for roots.
          children.unshift(properties)
        } else {
          node = Object(hast_util_parse_selector__WEBPACK_IMPORTED_MODULE_1__["parseSelector"])(selector, defaultTagName)
          // Normalize the name.
          node.tagName = node.tagName.toLowerCase()
          if (adjust && own.call(adjust, node.tagName)) {
            node.tagName = adjust[node.tagName]
          }

          // Handle props.
          if (isProperties(properties, node.tagName)) {
            for (key in properties) {
              if (own.call(properties, key)) {
                // @ts-ignore `node.properties` is set.
                addProperty(schema, node.properties, key, properties[key])
              }
            }
          } else {
            children.unshift(properties)
          }
        }

        // Handle children.
        while (++index < children.length) {
          addChild(node.children, children[index])
        }

        if (node.tagName === 'template') {
          node.content = {type: 'root', children: node.children}
          node.children = []
        }

        return node
      }
    )

  return h
}

/**
 * @param {HProperties|HChild} value
 * @param {string} name
 * @returns {value is HProperties}
 */
function isProperties(value, name) {
  if (
    value === null ||
    value === undefined ||
    typeof value !== 'object' ||
    Array.isArray(value)
  ) {
    return false
  }

  if (name === 'input' || !value.type || typeof value.type !== 'string') {
    return true
  }

  if (Array.isArray(value.children)) {
    return false
  }

  if (name === 'button') {
    return buttonTypes.has(value.type.toLowerCase())
  }

  return !('value' in value)
}

/**
 * @param {Schema} schema
 * @param {Properties} properties
 * @param {string} key
 * @param {HStyle|HPropertyValue} value
 * @returns {void}
 */
function addProperty(schema, properties, key, value) {
  var info = Object(property_information__WEBPACK_IMPORTED_MODULE_0__["find"])(schema, key)
  var index = -1
  /** @type {HPropertyValue} */
  var result
  /** @type {Array.<string|number>} */
  var finalResult

  // Ignore nullish and NaN values.
  if (value === undefined || value === null) return

  if (typeof value === 'number') {
    // Ignore NaN.
    if (Number.isNaN(value)) return

    result = value
  }
  // Booleans.
  else if (typeof value === 'boolean') {
    result = value
  }
  // Handle list values.
  else if (typeof value === 'string') {
    if (info.spaceSeparated) {
      result = Object(space_separated_tokens__WEBPACK_IMPORTED_MODULE_2__["parse"])(value)
    } else if (info.commaSeparated) {
      result = Object(comma_separated_tokens__WEBPACK_IMPORTED_MODULE_3__["parse"])(value)
    } else if (info.commaOrSpaceSeparated) {
      result = Object(space_separated_tokens__WEBPACK_IMPORTED_MODULE_2__["parse"])(Object(comma_separated_tokens__WEBPACK_IMPORTED_MODULE_3__["parse"])(value).join(' '))
    } else {
      result = parsePrimitive(info, info.property, value)
    }
  } else if (Array.isArray(value)) {
    result = value.concat()
  } else {
    result = info.property === 'style' ? style(value) : String(value)
  }

  if (Array.isArray(result)) {
    finalResult = []

    while (++index < result.length) {
      // @ts-ignore Assume no booleans in array.
      finalResult[index] = parsePrimitive(info, info.property, result[index])
    }

    result = finalResult
  }

  // Class names (which can be added both on the `selector` and here).
  if (info.property === 'className' && Array.isArray(properties.className)) {
    // @ts-ignore Assume no booleans in `className`.
    result = properties.className.concat(result)
  }

  properties[info.property] = result
}

/**
 * @param {Array.<Child>} nodes
 * @param {HChild} value
 * @returns {void}
 */
function addChild(nodes, value) {
  var index = -1

  if (value === undefined || value === null) {
    // Empty.
  } else if (typeof value === 'string' || typeof value === 'number') {
    nodes.push({type: 'text', value: String(value)})
  } else if (Array.isArray(value)) {
    while (++index < value.length) {
      addChild(nodes, value[index])
    }
  } else if (typeof value === 'object' && 'type' in value) {
    if (value.type === 'root') {
      // @ts-ignore it looks like a root, TS…
      addChild(nodes, value.children)
    } else {
      nodes.push(value)
    }
  } else {
    throw new Error('Expected node, nodes, or string, got `' + value + '`')
  }
}

/**
 * Parse a single primitives.
 *
 * @param {Info} info
 * @param {string} name
 * @param {HPrimitiveValue} value
 * @returns {HPrimitiveValue}
 */
function parsePrimitive(info, name, value) {
  if (typeof value === 'string') {
    if (info.number && value && !Number.isNaN(Number(value))) {
      return Number(value)
    }

    if (
      (info.boolean || info.overloadedBoolean) &&
      (value === '' || Object(property_information__WEBPACK_IMPORTED_MODULE_0__["normalize"])(value) === Object(property_information__WEBPACK_IMPORTED_MODULE_0__["normalize"])(name))
    ) {
      return true
    }
  }

  return value
}

/**
 * @param {HStyle} value
 * @returns {string}
 */
function style(value) {
  /** @type {Array.<string>} */
  var result = []
  /** @type {string} */
  var key

  for (key in value) {
    if (own.call(value, key)) {
      result.push([key, value[key]].join(': '))
    }
  }

  return result.join('; ')
}

/**
 * @param {Array.<string>} values
 * @returns {Object.<string, string>}
 */
function createAdjustMap(values) {
  /** @type {Object.<string, string>} */
  var result = {}
  var index = -1

  while (++index < values.length) {
    result[values[index].toLowerCase()] = values[index]
  }

  return result
}


/***/ }),

/***/ "./node_modules/hastscript/lib/html.js":
/*!*********************************************!*\
  !*** ./node_modules/hastscript/lib/html.js ***!
  \*********************************************/
/*! exports provided: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/index.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ "./node_modules/hastscript/lib/core.js");
/**
 * @typedef {import('./core.js').HChild} Child Acceptable child value
 * @typedef {import('./core.js').HProperties} Properties Acceptable properties value.
 *
 * @typedef {import('./jsx-classic').Element} h.JSX.Element
 * @typedef {import('./jsx-classic').IntrinsicAttributes} h.JSX.IntrinsicAttributes
 * @typedef {import('./jsx-classic').IntrinsicElements} h.JSX.IntrinsicElements
 * @typedef {import('./jsx-classic').ElementChildrenAttribute} h.JSX.ElementChildrenAttribute
 */




const h = Object(_core_js__WEBPACK_IMPORTED_MODULE_1__["core"])(property_information__WEBPACK_IMPORTED_MODULE_0__["html"], 'div')


/***/ }),

/***/ "./node_modules/hastscript/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/hastscript/lib/index.js ***!
  \**********************************************/
/*! exports provided: h, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ "./node_modules/hastscript/lib/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _html_js__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony import */ var _svg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg.js */ "./node_modules/hastscript/lib/svg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _svg_js__WEBPACK_IMPORTED_MODULE_1__["s"]; });

/**
 * @typedef {import('./core.js').HChild} Child Acceptable child value
 * @typedef {import('./core.js').HProperties} Properties Acceptable properties value.
 */





/***/ }),

/***/ "./node_modules/hastscript/lib/svg-case-sensitive-tag-names.js":
/*!*********************************************************************!*\
  !*** ./node_modules/hastscript/lib/svg-case-sensitive-tag-names.js ***!
  \*********************************************************************/
/*! exports provided: svgCaseSensitiveTagNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgCaseSensitiveTagNames", function() { return svgCaseSensitiveTagNames; });
const svgCaseSensitiveTagNames = [
  'altGlyph',
  'altGlyphDef',
  'altGlyphItem',
  'animateColor',
  'animateMotion',
  'animateTransform',
  'clipPath',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'foreignObject',
  'glyphRef',
  'linearGradient',
  'radialGradient',
  'solidColor',
  'textArea',
  'textPath'
]


/***/ }),

/***/ "./node_modules/hastscript/lib/svg.js":
/*!********************************************!*\
  !*** ./node_modules/hastscript/lib/svg.js ***!
  \********************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return s; });
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/index.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ "./node_modules/hastscript/lib/core.js");
/* harmony import */ var _svg_case_sensitive_tag_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg-case-sensitive-tag-names.js */ "./node_modules/hastscript/lib/svg-case-sensitive-tag-names.js");
/**
 * @typedef {import('./core.js').HChild} Child Acceptable child value
 * @typedef {import('./core.js').HProperties} Properties Acceptable properties value.
 *
 * @typedef {import('./jsx-classic').Element} s.JSX.Element
 * @typedef {import('./jsx-classic').IntrinsicAttributes} s.JSX.IntrinsicAttributes
 * @typedef {import('./jsx-classic').IntrinsicElements} s.JSX.IntrinsicElements
 * @typedef {import('./jsx-classic').ElementChildrenAttribute} s.JSX.ElementChildrenAttribute
 */





const s = Object(_core_js__WEBPACK_IMPORTED_MODULE_1__["core"])(property_information__WEBPACK_IMPORTED_MODULE_0__["svg"], 'g', _svg_case_sensitive_tag_names_js__WEBPACK_IMPORTED_MODULE_2__["svgCaseSensitiveTagNames"])


/***/ }),

/***/ "./node_modules/is-alphabetical/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-alphabetical/index.js ***!
  \***********************************************/
/*! exports provided: isAlphabetical */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlphabetical", function() { return isAlphabetical; });
/**
 * Check if the given character code, or the character code at the first
 * character, is alphabetical.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is alphabetical.
 */
function isAlphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}


/***/ }),

/***/ "./node_modules/is-alphanumerical/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-alphanumerical/index.js ***!
  \*************************************************/
/*! exports provided: isAlphanumerical */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlphanumerical", function() { return isAlphanumerical; });
/* harmony import */ var is_alphabetical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js");
/* harmony import */ var is_decimal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");



/**
 * Check if the given character code, or the character code at the first
 * character, is alphanumerical.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is alphanumerical.
 */
function isAlphanumerical(character) {
  return Object(is_alphabetical__WEBPACK_IMPORTED_MODULE_0__["isAlphabetical"])(character) || Object(is_decimal__WEBPACK_IMPORTED_MODULE_1__["isDecimal"])(character)
}


/***/ }),

/***/ "./node_modules/is-decimal/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-decimal/index.js ***!
  \******************************************/
/*! exports provided: isDecimal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDecimal", function() { return isDecimal; });
/**
 * Check if the given character code, or the character code at the first
 * character, is decimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is a decimal
 */
function isDecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}


/***/ }),

/***/ "./node_modules/is-hexadecimal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-hexadecimal/index.js ***!
  \**********************************************/
/*! exports provided: isHexadecimal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHexadecimal", function() { return isHexadecimal; });
/**
 * Check if the given character code, or the character code at the first
 * character, is hexadecimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is hexadecimal
 */
function isHexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}


/***/ }),

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.browser.js ***!
  \**************************************************************/
/*! exports provided: decodeEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeEntity", function() { return decodeEntity; });
/* eslint-env browser */

var semicolon = 59 // `;`
/** @type {HTMLElement} */
var element

/**
 * @param {string} characters
 * @returns {string|false}
 */
function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  /** @type {string} */
  var char

  element = element || document.createElement('i')
  element.innerHTML = entity
  char = element.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of `&notit;`
  // will result in the string `¬it;`.
  // When we encounter a trailing semicolon after parsing and the entity to
  // decode was not a semicolon (`&semi;`), we can assume that the matching was
  // incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "./node_modules/parse-entities/index.js":
/*!**********************************************!*\
  !*** ./node_modules/parse-entities/index.js ***!
  \**********************************************/
/*! exports provided: parseEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEntities", function() { return parseEntities; });
/* harmony import */ var character_entities_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! character-entities-legacy */ "./node_modules/character-entities-legacy/index.js");
/* harmony import */ var character_reference_invalid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! character-reference-invalid */ "./node_modules/character-reference-invalid/index.js");
/* harmony import */ var is_decimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");
/* harmony import */ var is_hexadecimal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! is-hexadecimal */ "./node_modules/is-hexadecimal/index.js");
/* harmony import */ var is_alphanumerical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! is-alphanumerical */ "./node_modules/is-alphanumerical/index.js");
/* harmony import */ var _decode_entity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decode-entity.js */ "./node_modules/parse-entities/decode-entity.browser.js");







/**
 * @template {typeof globalThis} WarningContext
 * @template {typeof globalThis} ReferenceContext
 * @template {typeof globalThis} TextContext
 * @typedef {Object} ParseEntitiesOptions
 * @property {string} [additional=''] Additional character to accept. This allows other characters, without error, when following an ampersand
 * @property {boolean} [attribute=false] Whether to parse `value` as an attribute value
 * @property {boolean} [nonTerminated=true] Whether to allow non-terminated entities. For example, `&copycat` for `©cat`. This behaviour is spec-compliant but can lead to unexpected results
 * @property {Position | Point} [position] Starting `position` of `value` (`Point` or `Position`). Useful when dealing with values nested in some sort of syntax tree
 * @property {WarningContext} warningContext Context used when calling `warning`
 * @property {WarningHandler<WarningContext>} warning Warning handler
 * @property {ReferenceContext} referenceContext Context used when calling `reference`
 * @property {ReferenceHandler<ReferenceContext>} reference Reference handler
 * @property {TextContext} textContext Context used when calling `text`
 * @property {TextHandler<TextContext>} text Text handler
 */

/**
 * @typedef {Object} Position
 * @property {Point} start
 * @property {Point} [end]
 * @property {number[]} [indent]
 */

/**
 * @typedef {Object} Point
 * @property {number} line
 * @property {number} column
 * @property {number} offset
 */

/**
 * @template {typeof globalThis} Context
 * @callback WarningHandler
 * @this {Context} `this` refers to `warningContext` given to `parseEntities`
 * @param {string} reason Human-readable reason for triggering a parse error.
 * @param {Point} point Place at which the parse error occurred.
 * @param {number} code Identifier of reason for triggering a parse error.
 * @returns {void}
 */

/**
 * @template {typeof globalThis} Context
 * @callback ReferenceHandler
 * @this {Context} `this` refers to `referenceContext` given to `parseEntities`.
 * @param {string} value String of content.
 * @param {Position} position Place at which `value` starts and ends.
 * @param {string} source Source of character reference.
 * @returns {void}
 */

/**
 * @template {typeof globalThis} Context
 * @callback TextHandler
 * @this {Context} `this` refers to `textContext` given to `parseEntities`.
 * @param {string} value String of content.
 * @param {Position} position Place at which `value` starts and ends.
 * @returns {void}
 */

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode

// Warning messages.
var messages = [
  undefined,
  /* 1: Non terminated (named) */
  'Named character references must be terminated by a semicolon',
  /* 2: Non terminated (numeric) */
  'Numeric character references must be terminated by a semicolon',
  /* 3: Empty (named) */
  'Named character references cannot be empty',
  /* 4: Empty (numeric) */
  'Numeric character references cannot be empty',
  /* 5: Unknown (named) */
  'Named character references must be known',
  /* 6: Disallowed (numeric) */
  'Numeric character references cannot be disallowed',
  /* 7: Prohibited (numeric) */
  'Numeric character references cannot be outside the permissible Unicode range'
]

/**
 * Parse entities.
 *
 * @template {typeof globalThis} WarningContext
 * @template {typeof globalThis} ReferenceContext
 * @template {typeof globalThis} TextContext
 * @param {string} value
 * @param {Partial<ParseEntitiesOptions<WarningContext, ReferenceContext, TextContext>>} [options={}]
 */
function parseEntities(value, options = {}) {
  var additional =
    typeof options.additional === 'string'
      ? options.additional.charCodeAt(0)
      : options.additional
  var index = 0
  var lines = -1
  var queue = ''
  /** @type {string[]} */
  var result = []
  /** @type {Point?} */
  var pos
  /** @type {number[]?} */
  var indent
  /** @type {number} */
  var line
  /** @type {number} */
  var column
  /** @type {string} */
  var entityCharacters
  /** @type {string|false} */
  var namedEntity
  /** @type {boolean} */
  var terminated
  /** @type {string} */
  var characters
  /** @type {number} */
  var character
  /** @type {string} */
  var reference
  /** @type {number} */
  var referenceCode
  /** @type {number} */
  var following
  /** @type {number} */
  var reason
  /** @type {string} */
  var output
  /** @type {string} */
  var entity
  /** @type {number} */
  var begin
  /** @type {number} */
  var start
  /** @type {string} */
  var type
  /** @type {(code: number) => boolean} */
  var test
  /** @type {Point} */
  var previous
  /** @type {Point} */
  var next
  /** @type {number} */
  var diff
  /** @type {number} */
  var end

  if (options.position) {
    if ('start' in options.position || 'indent' in options.position) {
      indent = options.position.indent
      pos = options.position.start
    } else {
      pos = options.position
    }
  }

  line = (pos && pos.line) || 1
  column = (pos && pos.column) || 1

  // Cache the current point.
  previous = now()

  // Ensure the algorithm walks over the first character (inclusive).
  index--

  while (++index <= value.length) {
    // If the previous character was a newline.
    if (character === 10 /* `\n` */) {
      column = (indent && indent[lines]) || 1
    }

    character = value.charCodeAt(index)

    if (character === 38 /* `&` */) {
      following = value.charCodeAt(index + 1)

      // The behavior depends on the identity of the next character.
      if (
        following === 9 /* `\t` */ ||
        following === 10 /* `\n` */ ||
        following === 12 /* `\f` */ ||
        following === 32 /* ` ` */ ||
        following === 38 /* `&` */ ||
        following === 60 /* `<` */ ||
        Number.isNaN(following) ||
        (additional && following === additional)
      ) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character)
        column++
        continue
      }

      start = index + 1
      begin = start
      end = start

      if (following === 35 /* `#` */) {
        // Numerical reference.
        end = ++begin

        // The behavior further depends on the next character.
        following = value.charCodeAt(end)

        if (following === 88 /* `X` */ || following === 120 /* `x` */) {
          // ASCII hexadecimal digits.
          type = 'hexadecimal'
          end = ++begin
        } else {
          // ASCII decimal digits.
          type = 'decimal'
        }
      } else {
        // Named entity.
        type = 'named'
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      // Each type of character reference accepts different characters.
      // This test is used to detect whether a reference has ended (as the semicolon
      // is not strictly needed).
      test =
        type === 'named'
          ? is_alphanumerical__WEBPACK_IMPORTED_MODULE_4__["isAlphanumerical"]
          : type === 'decimal'
          ? is_decimal__WEBPACK_IMPORTED_MODULE_2__["isDecimal"]
          : is_hexadecimal__WEBPACK_IMPORTED_MODULE_3__["isHexadecimal"]

      end--

      while (++end <= value.length) {
        following = value.charCodeAt(end)

        if (!test(following)) {
          break
        }

        characters += fromCharCode(following)

        // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.
        if (type === 'named' && own.call(character_entities_legacy__WEBPACK_IMPORTED_MODULE_0__["characterEntitiesLegacy"], characters)) {
          entityCharacters = characters
          entity = character_entities_legacy__WEBPACK_IMPORTED_MODULE_0__["characterEntitiesLegacy"][characters]
        }
      }

      terminated = value.charCodeAt(end) === 59 /* `;` */

      if (terminated) {
        end++

        namedEntity = type === 'named' ? Object(_decode_entity_js__WEBPACK_IMPORTED_MODULE_5__["decodeEntity"])(characters) : false

        if (namedEntity) {
          entityCharacters = characters
          entity = namedEntity
        }
      }

      diff = 1 + end - start

      if (!terminated && options.nonTerminated === false) {
        // Empty.
      } else if (!characters) {
        // An empty (possible) reference is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== 'named') {
          warning(4 /* Empty (numeric) */, diff)
        }
      } else if (type === 'named') {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(5 /* Unknown (named) */, 1)
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          // If the reference is not terminated, warn.
          if (!terminated) {
            reason = entityCharacters
              ? 1 /* Non terminated (named) */
              : 3 /* Empty (named) */

            if (options.attribute) {
              following = value.charCodeAt(end)

              if (following === 61 /* `=` */) {
                warning(reason, diff)
                entity = null
              } else if (Object(is_alphanumerical__WEBPACK_IMPORTED_MODULE_4__["isAlphanumerical"])(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            } else {
              warning(reason, diff)
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          // All non-terminated numeric references are not rendered, and emit a
          // warning.
          warning(2 /* Non terminated (numeric) */, diff)
        }

        // When terminated and numerical, parse as either hexadecimal or
        // decimal.
        referenceCode = Number.parseInt(
          characters,
          type === 'hexadecimal' ? 16 : 10
        )

        // Emit a warning when the parsed number is prohibited, and replace with
        // replacement character.
        if (prohibited(referenceCode)) {
          warning(7 /* Prohibited (numeric) */, diff)
          reference = fromCharCode(65533 /* `�` */)
        } else if (referenceCode in character_reference_invalid__WEBPACK_IMPORTED_MODULE_1__["characterReferenceInvalid"]) {
          // Emit a warning when the parsed number is disallowed, and replace by
          // an alternative.
          warning(6 /* Disallowed (numeric) */, diff)
          reference = character_reference_invalid__WEBPACK_IMPORTED_MODULE_1__["characterReferenceInvalid"][referenceCode]
        } else {
          // Parse the number.
          output = ''

          // Emit a warning when the parsed number should not be used.
          if (disallowed(referenceCode)) {
            warning(6 /* Disallowed (numeric) */, diff)
          }

          // Serialize the number.
          if (referenceCode > 0xffff) {
            referenceCode -= 0x10000
            output += fromCharCode((referenceCode >>> (10 & 0x3ff)) | 0xd800)
            referenceCode = 0xdc00 | (referenceCode & 0x3ff)
          }

          reference = output + fromCharCode(referenceCode)
        }
      }

      // Found it!
      // First eat the queued characters as normal text, then eat a reference.
      if (reference) {
        flush()

        previous = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (options.reference) {
          options.reference.call(
            options.referenceContext,
            reference,
            {start: previous, end: next},
            value.slice(start - 1, end)
          )
        }

        previous = next
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (character === 10 /* `\n` */) {
        line++
        lines++
        column = 0
      }

      if (Number.isNaN(character)) {
        flush()
      } else {
        queue += fromCharCode(character)
        column++
      }
    }
  }

  // Return the reduced nodes.
  return result.join('')

  // Get current position.
  function now() {
    return {
      line,
      column,
      offset: index + ((pos && pos.offset) || 0)
    }
  }

  /**
   * Handle the warning.
   *
   * @param {number} code
   * @param {number} offset
   */
  function warning(code, offset) {
    /** @type {Point} */
    var position

    if (options.warning) {
      position = now()
      position.column += offset
      position.offset += offset

      options.warning.call(
        options.warningContext,
        messages[code],
        position,
        code
      )
    }
  }

  /**
   * Flush `queue` (normal text).
   * Macro invoked before each reference and at the end of `value`.
   * Does nothing when `queue` is empty.
   */
  function flush() {
    if (queue) {
      result.push(queue)

      if (options.text) {
        options.text.call(options.textContext, queue, {
          start: previous,
          end: now()
        })
      }

      queue = ''
    }
  }
}

/**
 * Check if `character` is outside the permissible unicode range.
 *
 * @param {number} code
 * @returns {boolean}
 */
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

/**
 * Check if `character` is disallowed.
 *
 * @param {number} code
 * @returns {boolean}
 */
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ }),

/***/ "./node_modules/property-information/index.js":
/*!****************************************************!*\
  !*** ./node_modules/property-information/index.js ***!
  \****************************************************/
/*! exports provided: find, hastToReact, normalize, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_util_merge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/util/merge.js */ "./node_modules/property-information/lib/util/merge.js");
/* harmony import */ var _lib_xlink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/xlink.js */ "./node_modules/property-information/lib/xlink.js");
/* harmony import */ var _lib_xml_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/xml.js */ "./node_modules/property-information/lib/xml.js");
/* harmony import */ var _lib_xmlns_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/xmlns.js */ "./node_modules/property-information/lib/xmlns.js");
/* harmony import */ var _lib_aria_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/aria.js */ "./node_modules/property-information/lib/aria.js");
/* harmony import */ var _lib_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/html.js */ "./node_modules/property-information/lib/html.js");
/* harmony import */ var _lib_svg_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/svg.js */ "./node_modules/property-information/lib/svg.js");
/* harmony import */ var _lib_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/find.js */ "./node_modules/property-information/lib/find.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _lib_find_js__WEBPACK_IMPORTED_MODULE_7__["find"]; });

/* harmony import */ var _lib_hast_to_react_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/hast-to-react.js */ "./node_modules/property-information/lib/hast-to-react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hastToReact", function() { return _lib_hast_to_react_js__WEBPACK_IMPORTED_MODULE_8__["hastToReact"]; });

/* harmony import */ var _lib_normalize_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/normalize.js */ "./node_modules/property-information/lib/normalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _lib_normalize_js__WEBPACK_IMPORTED_MODULE_9__["normalize"]; });

/**
 * @typedef {import('./lib/util/info.js').Info} Info
 * @typedef {import('./lib/util/schema.js').Schema} Schema
 */












var html = Object(_lib_util_merge_js__WEBPACK_IMPORTED_MODULE_0__["merge"])([_lib_xml_js__WEBPACK_IMPORTED_MODULE_2__["xml"], _lib_xlink_js__WEBPACK_IMPORTED_MODULE_1__["xlink"], _lib_xmlns_js__WEBPACK_IMPORTED_MODULE_3__["xmlns"], _lib_aria_js__WEBPACK_IMPORTED_MODULE_4__["aria"], _lib_html_js__WEBPACK_IMPORTED_MODULE_5__["html"]], 'html')
var svg = Object(_lib_util_merge_js__WEBPACK_IMPORTED_MODULE_0__["merge"])([_lib_xml_js__WEBPACK_IMPORTED_MODULE_2__["xml"], _lib_xlink_js__WEBPACK_IMPORTED_MODULE_1__["xlink"], _lib_xmlns_js__WEBPACK_IMPORTED_MODULE_3__["xmlns"], _lib_aria_js__WEBPACK_IMPORTED_MODULE_4__["aria"], _lib_svg_js__WEBPACK_IMPORTED_MODULE_6__["svg"]], 'svg')


/***/ }),

/***/ "./node_modules/property-information/lib/aria.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/aria.js ***!
  \*******************************************************/
/*! exports provided: aria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aria", function() { return aria; });
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/types.js */ "./node_modules/property-information/lib/util/types.js");
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");



var aria = Object(_util_create_js__WEBPACK_IMPORTED_MODULE_1__["create"])({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaAutoComplete: null,
    ariaBusy: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaChecked: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaColCount: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaColIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaColSpan: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaControls: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    ariaCurrent: null,
    ariaDescribedBy: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    ariaDetails: null,
    ariaDisabled: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaDropEffect: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    ariaErrorMessage: null,
    ariaExpanded: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaFlowTo: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    ariaGrabbed: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaHasPopup: null,
    ariaHidden: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    ariaLevel: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaLive: null,
    ariaModal: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaMultiLine: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaMultiSelectable: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaOrientation: null,
    ariaOwns: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    ariaPlaceholder: null,
    ariaPosInSet: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaPressed: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaReadOnly: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaRelevant: null,
    ariaRequired: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaRoleDescription: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    ariaRowCount: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaRowIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaRowSpan: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaSelected: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    ariaSetSize: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaSort: null,
    ariaValueMax: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaValueMin: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaValueNow: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    ariaValueText: null,
    role: null
  }
})

/**
 * @param {unknown} _
 * @param {string} prop
 * @returns {string}
 */
function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/find.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/find.js ***!
  \*******************************************************/
/*! exports provided: find */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize.js */ "./node_modules/property-information/lib/normalize.js");
/* harmony import */ var _util_defined_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/defined-info.js */ "./node_modules/property-information/lib/util/defined-info.js");
/* harmony import */ var _util_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/info.js */ "./node_modules/property-information/lib/util/info.js");




var valid = /^data[-\w.:]+$/i
var dash = /-[a-z]/g
var cap = /[A-Z]/g

/**
 * @param {import('./util/schema.js').Schema} schema
 * @param {string} value
 * @returns {import('./util/info.js').Info}
 */
function find(schema, value) {
  var normal = Object(_normalize_js__WEBPACK_IMPORTED_MODULE_0__["normalize"])(value)
  var prop = value
  var Type = _util_info_js__WEBPACK_IMPORTED_MODULE_2__["Info"]

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value)
    } else {
      value = datasetToAttribute(value)
    }

    Type = _util_defined_info_js__WEBPACK_IMPORTED_MODULE_1__["DefinedInfo"]
  }

  return new Type(prop, value)
}

/**
 * @param {string} attribute
 * @returns {string}
 */
function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase)
  return 'data' + value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * @param {string} property
 * @returns {string}
 */
function datasetToAttribute(property) {
  var value = property.slice(4)

  if (dash.test(value)) {
    return property
  }

  value = value.replace(cap, kebab)

  if (value.charAt(0) !== '-') {
    value = '-' + value
  }

  return 'data' + value
}

/**
 * @param {string} $0
 * @returns {string}
 */
function kebab($0) {
  return '-' + $0.toLowerCase()
}

/**
 * @param {string} $0
 * @returns {string}
 */
function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/hast-to-react.js":
/*!****************************************************************!*\
  !*** ./node_modules/property-information/lib/hast-to-react.js ***!
  \****************************************************************/
/*! exports provided: hastToReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hastToReact", function() { return hastToReact; });
var hastToReact = {
  classId: 'classID',
  dataType: 'datatype',
  itemId: 'itemID',
  strokeDashArray: 'strokeDasharray',
  strokeDashOffset: 'strokeDashoffset',
  strokeLineCap: 'strokeLinecap',
  strokeLineJoin: 'strokeLinejoin',
  strokeMiterLimit: 'strokeMiterlimit',
  typeOf: 'typeof',
  xLinkActuate: 'xlinkActuate',
  xLinkArcRole: 'xlinkArcrole',
  xLinkHref: 'xlinkHref',
  xLinkRole: 'xlinkRole',
  xLinkShow: 'xlinkShow',
  xLinkTitle: 'xlinkTitle',
  xLinkType: 'xlinkType',
  xmlnsXLink: 'xmlnsXlink'
}


/***/ }),

/***/ "./node_modules/property-information/lib/html.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/html.js ***!
  \*******************************************************/
/*! exports provided: html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/types.js */ "./node_modules/property-information/lib/util/types.js");
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");
/* harmony import */ var _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/case-insensitive-transform.js */ "./node_modules/property-information/lib/util/case-insensitive-transform.js");




var html = Object(_util_create_js__WEBPACK_IMPORTED_MODULE_1__["create"])({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_2__["caseInsensitiveTransform"],
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaSeparated"],
    acceptCharset: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    accessKey: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    action: null,
    allow: null,
    allowFullScreen: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    allowPaymentRequest: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    allowUserMedia: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    alt: null,
    as: null,
    async: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    autoCapitalize: null,
    autoComplete: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    autoFocus: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    autoPlay: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    capture: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    charSet: null,
    checked: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    cite: null,
    className: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    cols: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    colSpan: null,
    content: null,
    contentEditable: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    controls: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    controlsList: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    coords: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"] | _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaSeparated"],
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    defer: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    dir: null,
    dirName: null,
    disabled: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    download: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["overloadedBoolean"],
    draggable: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    formTarget: null,
    headers: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    height: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    hidden: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    high: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    href: null,
    hrefLang: null,
    htmlFor: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    httpEquiv: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    id: null,
    imageSizes: null,
    imageSrcSet: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaSeparated"],
    inputMode: null,
    integrity: null,
    is: null,
    isMap: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    itemId: null,
    itemProp: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    itemRef: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    itemScope: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    itemType: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    low: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    manifest: null,
    max: null,
    maxLength: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    media: null,
    method: null,
    min: null,
    minLength: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    multiple: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    muted: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    name: null,
    nonce: null,
    noModule: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    noValidate: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    optimum: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    pattern: null,
    ping: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    placeholder: null,
    playsInline: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    poster: null,
    preload: null,
    readOnly: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    referrerPolicy: null,
    rel: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    required: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    reversed: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    rows: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    rowSpan: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    sandbox: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    scope: null,
    scoped: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    seamless: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    selected: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    shape: null,
    size: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    sizes: null,
    slot: null,
    span: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    spellCheck: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaSeparated"],
    start: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    step: null,
    style: null,
    tabIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    useMap: null,
    value: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"],
    width: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"], // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"], // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"], // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"], // Lists. Use CSS to reduce space between items instead
    declare: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"], // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"], // `<img>` and `<object>`
    leftMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"], // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"], // `<body>`
    marginWidth: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"], // `<body>`
    noResize: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"], // `<frame>`
    noHref: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"], // `<area>`. Use no href instead of an explicit `nohref`
    noShade: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"], // `<hr>`. Use background-color and height instead of borders
    noWrap: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"], // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"], // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["booleanish"], // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"], // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"], // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    disableRemotePlayback: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    prefix: null,
    property: null,
    results: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    security: null,
    unselectable: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/normalize.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/normalize.js ***!
  \************************************************************/
/*! exports provided: normalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/**
 * @param {string} value
 * @returns {string}
 */
function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/svg.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/svg.js ***!
  \******************************************************/
/*! exports provided: svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/types.js */ "./node_modules/property-information/lib/util/types.js");
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");
/* harmony import */ var _util_case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/case-sensitive-transform.js */ "./node_modules/property-information/lib/util/case-sensitive-transform.js");




var svg = Object(_util_create_js__WEBPACK_IMPORTED_MODULE_1__["create"])({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: _util_case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_2__["caseSensitiveTransform"],
  properties: {
    about: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    accentHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    amplitude: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    arabicForm: null,
    ascent: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    attributeName: null,
    attributeType: null,
    azimuth: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    by: null,
    calcMode: null,
    capHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    className: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    diffuseConstant: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    direction: null,
    display: null,
    dur: null,
    divisor: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    dominantBaseline: null,
    download: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["boolean"],
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    enableBackground: null,
    end: null,
    event: null,
    exponent: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaSeparated"],
    g2: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaSeparated"],
    glyphName: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaSeparated"],
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    horizOriginX: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    horizOriginY: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    id: null,
    ideographic: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    k: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    k1: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    k2: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    k3: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    k4: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    kernelMatrix: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    kernelUnitLength: null,
    keyPoints: null, // SEMI_COLON_SEPARATED
    keySplines: null, // SEMI_COLON_SEPARATED
    keyTimes: null, // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    overlineThickness: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["spaceSeparated"],
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    pointsAtY: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    pointsAtZ: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    rev: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    requiredFeatures: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    requiredFonts: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    requiredFormats: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    specularExponent: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    strikethroughThickness: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    string: null,
    stroke: null,
    strokeDashArray: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    strokeOpacity: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    strokeWidth: null,
    style: null,
    surfaceScale: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    tabIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    tableValues: null,
    target: null,
    targetX: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    targetY: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["commaOrSpaceSeparated"],
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    underlineThickness: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    values: null,
    vAlphabetic: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    vMathematical: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    vectorEffect: null,
    vHanging: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    vIdeographic: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    version: null,
    vertAdvY: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    vertOriginX: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    vertOriginY: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_0__["number"],
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-insensitive-transform.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-insensitive-transform.js ***!
  \**********************************************************************************/
/*! exports provided: caseInsensitiveTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveTransform", function() { return caseInsensitiveTransform; });
/* harmony import */ var _case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./case-sensitive-transform.js */ "./node_modules/property-information/lib/util/case-sensitive-transform.js");


/**
 * @param {Object.<string, string>} attributes
 * @param {string} property
 * @returns {string}
 */
function caseInsensitiveTransform(attributes, property) {
  return Object(_case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_0__["caseSensitiveTransform"])(attributes, property.toLowerCase())
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-sensitive-transform.js":
/*!********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-sensitive-transform.js ***!
  \********************************************************************************/
/*! exports provided: caseSensitiveTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseSensitiveTransform", function() { return caseSensitiveTransform; });
/**
 * @param {Object.<string, string>} attributes
 * @param {string} attribute
 * @returns {string}
 */
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/create.js ***!
  \**************************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../normalize.js */ "./node_modules/property-information/lib/normalize.js");
/* harmony import */ var _schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema.js */ "./node_modules/property-information/lib/util/schema.js");
/* harmony import */ var _defined_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defined-info.js */ "./node_modules/property-information/lib/util/defined-info.js");




/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 * @typedef {import('./info.js').Info} Info
 */

/**
 * @typedef {Object.<string, string>} Attributes
 *
 * @typedef {Object} Definition
 * @property {Object.<string, number|null>} properties
 * @property {(attributes: Attributes, property: string) => string} transform
 * @property {string} [space]
 * @property {Attributes} [attributes]
 * @property {Array.<string>} [mustUseProperty]
 */

var own = {}.hasOwnProperty

/**
 * @param {Definition} definition
 * @returns {import('./schema.js').Schema}
 */
function create(definition) {
  /** @type {Properties} */
  var property = {}
  /** @type {Normal} */
  var normal = {}
  /** @type {string} */
  var prop
  /** @type {Info} */
  var info

  for (prop in definition.properties) {
    if (own.call(definition.properties, prop)) {
      info = new _defined_info_js__WEBPACK_IMPORTED_MODULE_2__["DefinedInfo"](
        prop,
        definition.transform(definition.attributes, prop),
        definition.properties[prop],
        definition.space
      )

      if (
        definition.mustUseProperty &&
        definition.mustUseProperty.includes(prop)
      ) {
        info.mustUseProperty = true
      }

      property[prop] = info

      normal[Object(_normalize_js__WEBPACK_IMPORTED_MODULE_0__["normalize"])(prop)] = prop
      normal[Object(_normalize_js__WEBPACK_IMPORTED_MODULE_0__["normalize"])(info.attribute)] = prop
    }
  }

  return new _schema_js__WEBPACK_IMPORTED_MODULE_1__["Schema"](property, normal, definition.space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/defined-info.js":
/*!********************************************************************!*\
  !*** ./node_modules/property-information/lib/util/defined-info.js ***!
  \********************************************************************/
/*! exports provided: DefinedInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinedInfo", function() { return DefinedInfo; });
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.js */ "./node_modules/property-information/lib/util/info.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/property-information/lib/util/types.js");



var checks = Object.keys(_types_js__WEBPACK_IMPORTED_MODULE_1__)

class DefinedInfo extends _info_js__WEBPACK_IMPORTED_MODULE_0__["Info"] {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number} [mask]
   * @param {string} [space]
   */
  constructor(property, attribute, mask, space) {
    var index = -1

    super(property, attribute)

    mark(this, 'space', space)

    while (++index < checks.length) {
      mark(
        this,
        checks[index],
        (mask & _types_js__WEBPACK_IMPORTED_MODULE_1__[checks[index]]) === _types_js__WEBPACK_IMPORTED_MODULE_1__[checks[index]]
      )
    }
  }
}

DefinedInfo.prototype.defined = true

/**
 * @param {InstanceType<typeof DefinedInfo>} values
 * @param {string} key
 * @param {unknown} value
 */
function mark(values, key, value) {
  if (value) {
    values[key] = value
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/info.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/util/info.js ***!
  \************************************************************/
/*! exports provided: Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
class Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(property, attribute) {
    this.property = property
    this.attribute = attribute
  }
}

/** @type {string|null} */
Info.prototype.space = null
Info.prototype.attribute = null
Info.prototype.property = null
Info.prototype.boolean = false
Info.prototype.booleanish = false
Info.prototype.overloadedBoolean = false
Info.prototype.number = false
Info.prototype.commaSeparated = false
Info.prototype.spaceSeparated = false
Info.prototype.commaOrSpaceSeparated = false
Info.prototype.mustUseProperty = false
Info.prototype.defined = false


/***/ }),

/***/ "./node_modules/property-information/lib/util/merge.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/merge.js ***!
  \*************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _schema_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.js */ "./node_modules/property-information/lib/util/schema.js");


/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 */

/**
 * @param {import('./schema.js').Schema[]} definitions
 * @param {string} space
 * @returns {import('./schema.js').Schema}
 */
function merge(definitions, space) {
  /** @type {Properties} */
  var property = {}
  /** @type {Normal} */
  var normal = {}
  var index = -1

  while (++index < definitions.length) {
    Object.assign(property, definitions[index].property)
    Object.assign(normal, definitions[index].normal)
  }

  return new _schema_js__WEBPACK_IMPORTED_MODULE_0__["Schema"](property, normal, space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/schema.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/schema.js ***!
  \**************************************************************/
/*! exports provided: Schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schema", function() { return Schema; });
/**
 * @typedef {import('./info.js').Info} Info
 * @typedef {Object.<string, Info>} Properties
 * @typedef {Object.<string, string>} Normal
 */

class Schema {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(property, normal, space) {
    this.property = property
    this.normal = normal
    if (space) {
      this.space = space
    }
  }
}

/** @type {Properties} */
Schema.prototype.property = {}
/** @type {Normal} */
Schema.prototype.normal = {}
/** @type {string|null} */
Schema.prototype.space = null


/***/ }),

/***/ "./node_modules/property-information/lib/util/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/types.js ***!
  \*************************************************************/
/*! exports provided: boolean, booleanish, overloadedBoolean, number, spaceSeparated, commaSeparated, commaOrSpaceSeparated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booleanish", function() { return booleanish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overloadedBoolean", function() { return overloadedBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceSeparated", function() { return spaceSeparated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commaSeparated", function() { return commaSeparated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commaOrSpaceSeparated", function() { return commaOrSpaceSeparated; });
var powers = 0

var boolean = increment()
var booleanish = increment()
var overloadedBoolean = increment()
var number = increment()
var spaceSeparated = increment()
var commaSeparated = increment()
var commaOrSpaceSeparated = increment()

function increment() {
  return 2 ** ++powers
}


/***/ }),

/***/ "./node_modules/property-information/lib/xlink.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xlink.js ***!
  \********************************************************/
/*! exports provided: xlink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink", function() { return xlink; });
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");


var xlink = Object(_util_create_js__WEBPACK_IMPORTED_MODULE_0__["create"])({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})

/**
 * @param {unknown} _
 * @param {string} prop
 * @returns {string}
 */
function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xml.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/xml.js ***!
  \******************************************************/
/*! exports provided: xml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xml", function() { return xml; });
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");


var xml = Object(_util_create_js__WEBPACK_IMPORTED_MODULE_0__["create"])({
  space: 'xml',
  transform: xmlTransform,
  properties: {xmlLang: null, xmlBase: null, xmlSpace: null}
})

/**
 * @param {unknown} _
 * @param {string} prop
 * @returns {string}
 */
function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xmlns.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xmlns.js ***!
  \********************************************************/
/*! exports provided: xmlns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xmlns", function() { return xmlns; });
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");
/* harmony import */ var _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/case-insensitive-transform.js */ "./node_modules/property-information/lib/util/case-insensitive-transform.js");



var xmlns = Object(_util_create_js__WEBPACK_IMPORTED_MODULE_0__["create"])({
  space: 'xmlns',
  attributes: {xmlnsxlink: 'xmlns:xlink'},
  transform: _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__["caseInsensitiveTransform"],
  properties: {xmlns: null, xmlnsXLink: null}
})


/***/ }),

/***/ "./node_modules/refractor/index.js":
/*!*****************************************!*\
  !*** ./node_modules/refractor/index.js ***!
  \*****************************************/
/*! exports provided: refractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/common.js */ "./node_modules/refractor/lib/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refractor", function() { return _lib_common_js__WEBPACK_IMPORTED_MODULE_0__["refractor"]; });

/**
 * @typedef {import('./lib/core.js').RefractorRoot} RefractorRoot
 * @typedef {import('./lib/core.js').RefractorElement} RefractorElement
 * @typedef {import('./lib/core.js').Text} Text
 * @typedef {import('./lib/core.js').Grammar} Grammar
 * @typedef {import('./lib/core.js').Syntax} Syntax
 */



/***/ }),

/***/ "./node_modules/refractor/lib/common.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lib/common.js ***!
  \**********************************************/
/*! exports provided: refractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/refractor/lib/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refractor", function() { return _core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"]; });

/* harmony import */ var _lang_clike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/clike.js */ "./node_modules/refractor/lang/clike.js");
/* harmony import */ var _lang_c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lang/c.js */ "./node_modules/refractor/lang/c.js");
/* harmony import */ var _lang_cpp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lang/cpp.js */ "./node_modules/refractor/lang/cpp.js");
/* harmony import */ var _lang_arduino_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang/arduino.js */ "./node_modules/refractor/lang/arduino.js");
/* harmony import */ var _lang_bash_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lang/bash.js */ "./node_modules/refractor/lang/bash.js");
/* harmony import */ var _lang_csharp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lang/csharp.js */ "./node_modules/refractor/lang/csharp.js");
/* harmony import */ var _lang_markup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lang/markup.js */ "./node_modules/refractor/lang/markup.js");
/* harmony import */ var _lang_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lang/css.js */ "./node_modules/refractor/lang/css.js");
/* harmony import */ var _lang_diff_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lang/diff.js */ "./node_modules/refractor/lang/diff.js");
/* harmony import */ var _lang_go_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lang/go.js */ "./node_modules/refractor/lang/go.js");
/* harmony import */ var _lang_ini_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lang/ini.js */ "./node_modules/refractor/lang/ini.js");
/* harmony import */ var _lang_java_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lang/java.js */ "./node_modules/refractor/lang/java.js");
/* harmony import */ var _lang_regex_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lang/regex.js */ "./node_modules/refractor/lang/regex.js");
/* harmony import */ var _lang_javascript_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lang/javascript.js */ "./node_modules/refractor/lang/javascript.js");
/* harmony import */ var _lang_json_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lang/json.js */ "./node_modules/refractor/lang/json.js");
/* harmony import */ var _lang_kotlin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lang/kotlin.js */ "./node_modules/refractor/lang/kotlin.js");
/* harmony import */ var _lang_less_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lang/less.js */ "./node_modules/refractor/lang/less.js");
/* harmony import */ var _lang_lua_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lang/lua.js */ "./node_modules/refractor/lang/lua.js");
/* harmony import */ var _lang_makefile_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lang/makefile.js */ "./node_modules/refractor/lang/makefile.js");
/* harmony import */ var _lang_yaml_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../lang/yaml.js */ "./node_modules/refractor/lang/yaml.js");
/* harmony import */ var _lang_markdown_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../lang/markdown.js */ "./node_modules/refractor/lang/markdown.js");
/* harmony import */ var _lang_objectivec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../lang/objectivec.js */ "./node_modules/refractor/lang/objectivec.js");
/* harmony import */ var _lang_perl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../lang/perl.js */ "./node_modules/refractor/lang/perl.js");
/* harmony import */ var _lang_markup_templating_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../lang/markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
/* harmony import */ var _lang_php_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../lang/php.js */ "./node_modules/refractor/lang/php.js");
/* harmony import */ var _lang_python_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../lang/python.js */ "./node_modules/refractor/lang/python.js");
/* harmony import */ var _lang_r_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../lang/r.js */ "./node_modules/refractor/lang/r.js");
/* harmony import */ var _lang_ruby_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../lang/ruby.js */ "./node_modules/refractor/lang/ruby.js");
/* harmony import */ var _lang_rust_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../lang/rust.js */ "./node_modules/refractor/lang/rust.js");
/* harmony import */ var _lang_sass_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../lang/sass.js */ "./node_modules/refractor/lang/sass.js");
/* harmony import */ var _lang_scss_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../lang/scss.js */ "./node_modules/refractor/lang/scss.js");
/* harmony import */ var _lang_sql_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../lang/sql.js */ "./node_modules/refractor/lang/sql.js");
/* harmony import */ var _lang_swift_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../lang/swift.js */ "./node_modules/refractor/lang/swift.js");
/* harmony import */ var _lang_typescript_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../lang/typescript.js */ "./node_modules/refractor/lang/typescript.js");
/* harmony import */ var _lang_basic_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../lang/basic.js */ "./node_modules/refractor/lang/basic.js");
/* harmony import */ var _lang_vbnet_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../lang/vbnet.js */ "./node_modules/refractor/lang/vbnet.js");
/**
 * @typedef {import('./core.js').RefractorRoot} RefractorRoot
 * @typedef {import('./core.js').RefractorElement} RefractorElement
 * @typedef {import('./core.js').Text} Text
 * @typedef {import('./core.js').Grammar} Grammar
 * @typedef {import('./core.js').Syntax} Syntax
 */







































_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_clike_js__WEBPACK_IMPORTED_MODULE_1__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_c_js__WEBPACK_IMPORTED_MODULE_2__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_cpp_js__WEBPACK_IMPORTED_MODULE_3__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_arduino_js__WEBPACK_IMPORTED_MODULE_4__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_bash_js__WEBPACK_IMPORTED_MODULE_5__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_csharp_js__WEBPACK_IMPORTED_MODULE_6__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_markup_js__WEBPACK_IMPORTED_MODULE_7__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_css_js__WEBPACK_IMPORTED_MODULE_8__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_diff_js__WEBPACK_IMPORTED_MODULE_9__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_go_js__WEBPACK_IMPORTED_MODULE_10__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_ini_js__WEBPACK_IMPORTED_MODULE_11__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_java_js__WEBPACK_IMPORTED_MODULE_12__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_regex_js__WEBPACK_IMPORTED_MODULE_13__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_javascript_js__WEBPACK_IMPORTED_MODULE_14__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_json_js__WEBPACK_IMPORTED_MODULE_15__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_kotlin_js__WEBPACK_IMPORTED_MODULE_16__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_less_js__WEBPACK_IMPORTED_MODULE_17__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_lua_js__WEBPACK_IMPORTED_MODULE_18__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_makefile_js__WEBPACK_IMPORTED_MODULE_19__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_yaml_js__WEBPACK_IMPORTED_MODULE_20__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_markdown_js__WEBPACK_IMPORTED_MODULE_21__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_objectivec_js__WEBPACK_IMPORTED_MODULE_22__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_perl_js__WEBPACK_IMPORTED_MODULE_23__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_markup_templating_js__WEBPACK_IMPORTED_MODULE_24__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_php_js__WEBPACK_IMPORTED_MODULE_25__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_python_js__WEBPACK_IMPORTED_MODULE_26__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_r_js__WEBPACK_IMPORTED_MODULE_27__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_ruby_js__WEBPACK_IMPORTED_MODULE_28__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_rust_js__WEBPACK_IMPORTED_MODULE_29__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_sass_js__WEBPACK_IMPORTED_MODULE_30__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_scss_js__WEBPACK_IMPORTED_MODULE_31__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_sql_js__WEBPACK_IMPORTED_MODULE_32__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_swift_js__WEBPACK_IMPORTED_MODULE_33__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_typescript_js__WEBPACK_IMPORTED_MODULE_34__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_basic_js__WEBPACK_IMPORTED_MODULE_35__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__["refractor"].register(_lang_vbnet_js__WEBPACK_IMPORTED_MODULE_36__["default"])


/***/ }),

/***/ "./node_modules/refractor/lib/core.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lib/core.js ***!
  \********************************************/
/*! exports provided: refractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refractor", function() { return refractor; });
/* harmony import */ var hastscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hastscript */ "./node_modules/hastscript/index.js");
/* harmony import */ var parse_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js");
/* harmony import */ var prismjs_components_prism_core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-core.js */ "./node_modules/refractor/node_modules/prismjs/components/prism-core.js");
/* harmony import */ var prismjs_components_prism_core_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core_js__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @typedef _Token A hidden Prism token
 * @property {string} type
 * @property {string} content
 * @property {string} alias
 * @property {number} length
 *
 * @typedef _Env A hidden Prism environment
 * @property {string} type
 * @property {string} tag
 * @property {Text|RefractorElement|Array.<Text|RefractorElement>} content
 * @property {Array.<string>} classes
 * @property {Object.<string, string>} attributes
 * @property {string} language
 *
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {Omit<Element, 'children'> & {children: Array.<RefractorElement|Text>}} RefractorElement
 * @typedef {Omit<Root, 'children'> & {children: Array.<RefractorElement|Text>}} RefractorRoot
 *
 * @typedef {import('prismjs').Languages} Languages
 * @typedef {import('prismjs').Grammar} Grammar Whatever this is, Prism handles it.
 * @typedef {((prism: unknown) => void) & {displayName: string, aliases?: string[]}} Syntax A refractor syntax function
 *
 * @typedef Refractor Virtual syntax highlighting
 * @property {highlight} highlight
 * @property {alias} alias
 * @property {register} register
 * @property {registered} registered
 * @property {listLanguages} listLanguages
 * @property {Languages} languages
 */

/* eslint-disable no-undef */
// Don’t allow Prism to run on page load in browser or to start messaging from
// workers.
/* c8 ignore next 15 */
/** @type {typeof globalThis} */
var ctx =
  typeof globalThis === 'object'
    ? globalThis
    : // @ts-ignore
    typeof self === 'object'
    ? // @ts-ignore
      self
    : // @ts-ignore
    typeof window === 'object'
    ? // @ts-ignore
      window
    : typeof global === 'object'
    ? global
    : {}
/* eslint-enable no-undef */

var restore = capture()

// @ts-ignore Types are incorrect.
ctx.Prism = {manual: true, disableWorkerMessageHandler: true}

// Load all stuff in `prism.js` itself, except for `prism-file-highlight.js`.
// The wrapped non-leaky grammars are loaded instead of Prism’s originals.




restore()

var own = {}.hasOwnProperty

// Inherit.
function Refractor() {}

Refractor.prototype = prismjs_components_prism_core_js__WEBPACK_IMPORTED_MODULE_2___default.a

/** @type {Refractor} */
const refractor = new Refractor()

// Create.
refractor.highlight = highlight
refractor.register = register
refractor.alias = alias
refractor.registered = registered
refractor.listLanguages = listLanguages

// @ts-ignore Overwrite Prism.
refractor.util.encode = encode
// @ts-ignore Overwrite Prism.
refractor.Token.stringify = stringify

/**
 * Register a syntax.
 * Needed if you’re using `refractor/core.js`.
 *
 * @param {Syntax} syntax
 * @returns {void}
 */
function register(syntax) {
  // @ts-expect-error: runtime.
  if (typeof syntax !== 'function' || !syntax.displayName) {
    throw new Error('Expected `function` for `syntax`, got `' + syntax + '`')
  }

  // Do not duplicate registrations.
  // @ts-expect-error: TypeScript is wrong.
  if (!own.call(refractor.languages, syntax.displayName)) {
    // @ts-expect-error: TypeScript is wrong.
    syntax(refractor)
  }
}

/**
 * Register a new `alias` for the `name` language.
 *
 * @param {Object.<string, string|Array.<string>>|string} name
 * @param {string|Array.<string>} [alias]
 * @returns {void}
 */
function alias(name, alias) {
  var languages = refractor.languages
  /** @type {Object.<string, string|Array.<string>>} */
  var map
  /** @type {string} */
  var key
  /** @type {string|Array.<string>} */
  var value
  /** @type {Array.<string>} */
  var list
  /** @type {number} */
  var index

  if (typeof name === 'string') {
    map = {}
    map[name] = alias
  } else {
    map = name
  }

  for (key in map) {
    if (own.call(map, key)) {
      value = map[key]
      list = typeof value === 'string' ? [value] : value
      index = -1

      while (++index < list.length) {
        languages[list[index]] = languages[key]
      }
    }
  }
}

/**
 * Parse `value` according to the `language` (name or alias)
 * syntax.
 *
 * @param {string} value
 * @param {string|Grammar} nameOrGrammar
 * @returns {RefractorRoot}
 */
function highlight(value, nameOrGrammar) {
  /** @type {Grammar} */
  var grammar
  /** @type {string} */
  var name

  if (typeof value !== 'string') {
    throw new TypeError('Expected `string` for `value`, got `' + value + '`')
  }

  // `name` is a grammar object.
  if (nameOrGrammar && typeof nameOrGrammar === 'object') {
    grammar = nameOrGrammar
    name = null
  } else {
    // @ts-ignore Assume string.
    name = nameOrGrammar

    if (typeof name !== 'string') {
      throw new TypeError('Expected `string` for `name`, got `' + name + '`')
    }

    if (own.call(refractor.languages, name)) {
      grammar = refractor.languages[name]
    } else {
      throw new Error('Unknown language: `' + name + '` is not registered')
    }
  }

  return {
    type: 'root',
    children: prismjs_components_prism_core_js__WEBPACK_IMPORTED_MODULE_2___default.a.highlight.call(refractor, value, grammar, name)
  }
}

/**
 * Check if a `language` (name or alias) is registered.
 *
 * @param {string} language
 * @returns {boolean}
 */
function registered(language) {
  if (typeof language !== 'string') {
    throw new TypeError(
      'Expected `string` for `language`, got `' + language + '`'
    )
  }

  return own.call(refractor.languages, language)
}

/**
 * List all registered languages (names and aliases).
 *
 * @returns {Array.<string>}
 */
function listLanguages() {
  var languages = refractor.languages
  /** @type {Array.<string>} */
  var list = []
  /** @type {string} */
  var language

  for (language in languages) {
    if (
      own.call(languages, language) &&
      typeof languages[language] === 'object'
    ) {
      list.push(language)
    }
  }

  return list
}

/**
 * @param {string|_Token|Array.<string|_Token>} value
 * @param {string} language
 * @returns {Text|RefractorElement|Array.<Text|RefractorElement>}
 */
function stringify(value, language) {
  var index = -1
  /** @type {Array.<Text|RefractorElement>} */
  var result
  /** @type {_Env} */
  var env

  if (typeof value === 'string') {
    return {type: 'text', value}
  }

  if (Array.isArray(value)) {
    result = []

    while (++index < value.length) {
      if (
        value[index] !== '' &&
        value[index] !== null &&
        value[index] !== undefined
      ) {
        // @ts-ignore Assume no sub-arrays.
        result.push(stringify(value[index], language))
      }
    }

    return result
  }

  env = {
    type: value.type,
    content: stringify(value.content, language),
    tag: 'span',
    classes: ['token', value.type],
    attributes: {},
    language
  }

  if (value.alias) {
    env.classes.push(
      ...(typeof value.alias === 'string' ? [value.alias] : value.alias)
    )
  }

  // @ts-ignore Prism.
  refractor.hooks.run('wrap', env)

  // @ts-ignore Hush, it’s fine.
  return Object(hastscript__WEBPACK_IMPORTED_MODULE_0__["h"])(
    env.tag + '.' + env.classes.join('.'),
    attributes(env.attributes),
    env.content
  )
}

/**
 * @template {unknown} T
 * @param {T} tokens
 * @returns {T}
 */
function encode(tokens) {
  return tokens
}

/**
 * @param {Object.<string, string>} attrs
 * @returns {Object.<string, string>}
 */
function attributes(attrs) {
  /** @type {string} */
  var key

  for (key in attrs) {
    if (own.call(attrs, key)) {
      attrs[key] = Object(parse_entities__WEBPACK_IMPORTED_MODULE_1__["parseEntities"])(attrs[key])
    }
  }

  return attrs
}

/**
 * @returns {() => void}
 */
function capture() {
  var defined = 'Prism' in ctx
  /* c8 ignore next */
  var current = defined ? ctx.Prism : undefined

  return restore

  /**
   * @returns {void}
   */
  function restore() {
    /* istanbul ignore else - Clean leaks after Prism. */
    if (defined) {
      ctx.Prism = current
      /* c8 ignore next 3 */
    } else {
      delete ctx.Prism
    }

    defined = undefined
    current = undefined
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/refractor/node_modules/prismjs/components/prism-core.js":
/*!******************************************************************************!*\
  !*** ./node_modules/refractor/node_modules/prismjs/components/prism-core.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /\blang(?:uage)?-([\w-]+)\b/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element && !lang.test(element.className)) {
					element = element.parentElement;
				}
				if (element) {
					return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
				}
				return 'none';
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/space-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/space-separated-tokens/index.js ***!
  \******************************************************/
/*! exports provided: parse, stringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/**
 * Parse space separated tokens to an array of strings.
 *
 * @param {string} value Space separated tokens
 * @returns {Array.<string>} Tokens
 */
function parse(value) {
  const input = String(value || '').trim()
  return input ? input.split(/[ \t\n\r\f]+/g) : []
}

/**
 * Serialize an array of strings as space separated tokens.
 *
 * @param {Array.<string|number>} values Tokens
 * @returns {string} Space separated tokens
 */
function stringify(values) {
  return values.join(' ').trim()
}


/***/ })

}]);
//# sourceMappingURL=refractor-core-import.js.map