"use strict";var __extends=this&&this.__extends||function(){var i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])};return function(t,e){function s(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}}();Object.defineProperty(exports,"__esModule",{value:!0});var ListWithCheckboxes_1=require("../../UIComponents/List/ListWithCheckboxes"),Subject_1=require("rxjs/Subject"),RxListWithCheckBoxes=function(i){function t(t,e){var s=i.call(this,t,e)||this;return s.subject=new Subject_1.Subject,s}return __extends(t,i),t.prototype.getObservable=function(){return this.subject},t.prototype.subscribe=function(t){this.subject.subscribe(t)},t.prototype.changeValue=function(t){var e=this.selectableList.values[this.selectableList.getIndex(t)];this.selectableList.addRemoveValue(e),this.subject.next(this.selectableList.selectedValues)},t}(ListWithCheckboxes_1.ListWithCheckboxes);exports.RxListWithCheckBoxes=RxListWithCheckBoxes;