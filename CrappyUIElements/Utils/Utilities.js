"use strict";function debounce(n,t){var u=null;return function(e){u&&clearTimeout(u),u=window.setTimeout(function(){return n(e)},t)}}function findInList(n,t){return n.values.findIndex(function(e){return n.isEqual(e,t)})}function getSingleValue(e,n){var t=findInList(e,Array.isArray(n)&&1===n.length?n[0]:n);return 0<=t?e.values[t]:null}function getMultipleValues(n,e){var t=[];return e.every(function(e){return 0<=findInList(n,e)})&&(t=getUniqueValues(e,n.isEqual)),t}function getUniqueValues(e,t){return e.reduce(function(e,n){return e.findIndex(function(e){return t(e,n)})<0&&e.push(n),e},[])}function formatNumbers(e){var n=e+"";return 1<n.length?n:"0"+n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.debounce=debounce,exports.findInList=findInList,exports.getSingleValue=getSingleValue,exports.getMultipleValues=getMultipleValues,exports.getUniqueValues=getUniqueValues,exports.formatNumbers=formatNumbers;