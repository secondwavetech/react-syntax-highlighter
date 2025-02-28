(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_refractor_mongodb"],{

/***/ "./node_modules/refractor/lang/mongodb.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/mongodb.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mongodb; });
/* harmony import */ var _javascript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript.js */ "./node_modules/refractor/lang/javascript.js");
// @ts-nocheck

mongodb.displayName = 'mongodb'
mongodb.aliases = []

/** @type {import('../core.js').Syntax} */
function mongodb(Prism) {
  Prism.register(_javascript_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    var operators = [
      // query and projection
      '$eq',
      '$gt',
      '$gte',
      '$in',
      '$lt',
      '$lte',
      '$ne',
      '$nin',
      '$and',
      '$not',
      '$nor',
      '$or',
      '$exists',
      '$type',
      '$expr',
      '$jsonSchema',
      '$mod',
      '$regex',
      '$text',
      '$where',
      '$geoIntersects',
      '$geoWithin',
      '$near',
      '$nearSphere',
      '$all',
      '$elemMatch',
      '$size',
      '$bitsAllClear',
      '$bitsAllSet',
      '$bitsAnyClear',
      '$bitsAnySet',
      '$comment',
      '$elemMatch',
      '$meta',
      '$slice', // update
      '$currentDate',
      '$inc',
      '$min',
      '$max',
      '$mul',
      '$rename',
      '$set',
      '$setOnInsert',
      '$unset',
      '$addToSet',
      '$pop',
      '$pull',
      '$push',
      '$pullAll',
      '$each',
      '$position',
      '$slice',
      '$sort',
      '$bit', // aggregation pipeline stages
      '$addFields',
      '$bucket',
      '$bucketAuto',
      '$collStats',
      '$count',
      '$currentOp',
      '$facet',
      '$geoNear',
      '$graphLookup',
      '$group',
      '$indexStats',
      '$limit',
      '$listLocalSessions',
      '$listSessions',
      '$lookup',
      '$match',
      '$merge',
      '$out',
      '$planCacheStats',
      '$project',
      '$redact',
      '$replaceRoot',
      '$replaceWith',
      '$sample',
      '$set',
      '$skip',
      '$sort',
      '$sortByCount',
      '$unionWith',
      '$unset',
      '$unwind', // aggregation pipeline operators
      '$abs',
      '$accumulator',
      '$acos',
      '$acosh',
      '$add',
      '$addToSet',
      '$allElementsTrue',
      '$and',
      '$anyElementTrue',
      '$arrayElemAt',
      '$arrayToObject',
      '$asin',
      '$asinh',
      '$atan',
      '$atan2',
      '$atanh',
      '$avg',
      '$binarySize',
      '$bsonSize',
      '$ceil',
      '$cmp',
      '$concat',
      '$concatArrays',
      '$cond',
      '$convert',
      '$cos',
      '$dateFromParts',
      '$dateToParts',
      '$dateFromString',
      '$dateToString',
      '$dayOfMonth',
      '$dayOfWeek',
      '$dayOfYear',
      '$degreesToRadians',
      '$divide',
      '$eq',
      '$exp',
      '$filter',
      '$first',
      '$floor',
      '$function',
      '$gt',
      '$gte',
      '$hour',
      '$ifNull',
      '$in',
      '$indexOfArray',
      '$indexOfBytes',
      '$indexOfCP',
      '$isArray',
      '$isNumber',
      '$isoDayOfWeek',
      '$isoWeek',
      '$isoWeekYear',
      '$last',
      '$last',
      '$let',
      '$literal',
      '$ln',
      '$log',
      '$log10',
      '$lt',
      '$lte',
      '$ltrim',
      '$map',
      '$max',
      '$mergeObjects',
      '$meta',
      '$min',
      '$millisecond',
      '$minute',
      '$mod',
      '$month',
      '$multiply',
      '$ne',
      '$not',
      '$objectToArray',
      '$or',
      '$pow',
      '$push',
      '$radiansToDegrees',
      '$range',
      '$reduce',
      '$regexFind',
      '$regexFindAll',
      '$regexMatch',
      '$replaceOne',
      '$replaceAll',
      '$reverseArray',
      '$round',
      '$rtrim',
      '$second',
      '$setDifference',
      '$setEquals',
      '$setIntersection',
      '$setIsSubset',
      '$setUnion',
      '$size',
      '$sin',
      '$slice',
      '$split',
      '$sqrt',
      '$stdDevPop',
      '$stdDevSamp',
      '$strcasecmp',
      '$strLenBytes',
      '$strLenCP',
      '$substr',
      '$substrBytes',
      '$substrCP',
      '$subtract',
      '$sum',
      '$switch',
      '$tan',
      '$toBool',
      '$toDate',
      '$toDecimal',
      '$toDouble',
      '$toInt',
      '$toLong',
      '$toObjectId',
      '$toString',
      '$toLower',
      '$toUpper',
      '$trim',
      '$trunc',
      '$type',
      '$week',
      '$year',
      '$zip', // aggregation pipeline query modifiers
      '$comment',
      '$explain',
      '$hint',
      '$max',
      '$maxTimeMS',
      '$min',
      '$orderby',
      '$query',
      '$returnKey',
      '$showDiskLoc',
      '$natural'
    ]
    var builtinFunctions = [
      'ObjectId',
      'Code',
      'BinData',
      'DBRef',
      'Timestamp',
      'NumberLong',
      'NumberDecimal',
      'MaxKey',
      'MinKey',
      'RegExp',
      'ISODate',
      'UUID'
    ]
    operators = operators.map(function (operator) {
      return operator.replace('$', '\\$')
    })
    var operatorsSource = '(?:' + operators.join('|') + ')\\b'
    Prism.languages.mongodb = Prism.languages.extend('javascript', {})
    Prism.languages.insertBefore('mongodb', 'string', {
      property: {
        pattern:
          /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
        greedy: true,
        inside: {
          keyword: RegExp('^([\'"])?' + operatorsSource + '(?:\\1)?$')
        }
      }
    })
    Prism.languages.mongodb.string.inside = {
      url: {
        // url pattern
        pattern:
          /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
        greedy: true
      },
      entity: {
        // ipv4
        pattern:
          /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
        greedy: true
      }
    }
    Prism.languages.insertBefore('mongodb', 'constant', {
      builtin: {
        pattern: RegExp('\\b(?:' + builtinFunctions.join('|') + ')\\b'),
        alias: 'keyword'
      }
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_mongodb.js.map