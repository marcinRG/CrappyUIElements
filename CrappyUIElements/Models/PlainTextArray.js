"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var PlainTextArray=function(){function e(e,t){void 0===t&&(t=null),this.values=e,this.selectedValues=t}return e.prototype.getIndex=function(e){var t=Number.parseInt(e,10);return Number.isInteger(t)&&t<=this.values.length?t:null},e.prototype.getTitle=function(e){return e},e.prototype.getUniqueID=function(e){var t=this.values.indexOf(e);return 0<=t?t+"":null},e}();exports.PlainTextArray=PlainTextArray;