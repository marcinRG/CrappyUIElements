"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var DateExtended=function(){function t(t,e,a){void 0===a&&(a="/"),this.daysLabels=t,this.monthsLabels=e,this.separator=a,this.date=new Date,this.date=new Date}return t.prototype.daysInMonth=function(t,e){return new Date(e,t+1,0).getDate()},t.prototype.firstDayWeekOfMonth=function(){var t=new Date(this.date.getTime());return t.setDate(1),t.getDay()},t.prototype.lastDayOfMonth=function(){return this.daysInMonth(this.date.getMonth(),this.date.getFullYear())},t.prototype.addMonth=function(){var t=new Date(this.date.getTime());t.getMonth()<11?this.date.setMonth(t.getMonth()+1):(this.date.setFullYear(t.getFullYear()+1),this.date.setMonth(0))},t.prototype.subtractMonth=function(){var t=new Date(this.date.getTime());0<t.getMonth()?this.date.setMonth(t.getMonth()-1):(this.date.setFullYear(t.getFullYear()-1),this.date.setMonth(11))},t.prototype.isSelectedDay=function(t){return this.date.getDate()===t},t.prototype.isToday=function(t){var e=new Date;return this.date.getFullYear()===e.getFullYear()&&this.date.getMonth()===e.getMonth()&&e.getDate()===t},t.prototype.getMonthYearString=function(){return this.monthsLabels[this.date.getMonth()]+" "+this.date.getFullYear()},t.prototype.setDateFromString=function(t){return!!Date.parse(t)&&(this.date=new Date(t),!0)},t.prototype.dateToStr=function(){return""+this.date.getFullYear()+this.separator+this.formatNumbers(this.date.getMonth()+1)+this.separator+this.formatNumbers(this.date.getDate())},t.prototype.setDay=function(t){this.date.setDate(t)},t.prototype.getDay=function(){return this.date.getDate()},t.prototype.formatNumbers=function(t){var e=t+"";return 1<e.length?e:"0"+e},t}();exports.DateExtended=DateExtended;