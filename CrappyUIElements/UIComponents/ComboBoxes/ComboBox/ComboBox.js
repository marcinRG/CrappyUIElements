"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var CBoxUtils=require("../ComboBox.Utils"),ComboBox=function(){function t(t,e){var s=this;this.selectableList=e,this.listVisible=!1,this.createElements(t),this.setInitialProperties(t);var i=this.selectableList.values;this.listElements=CBoxUtils.createListElements(this.selectableList,i,this.listElements,this.listElementClass,this,this.changeToSelected),this.btnInput.addEventListener("click",function(){CBoxUtils.addRemoveClass(s.listVisible,s.btnInput,s.changeBtnClass),s.toggleListElements()}),this.setInitialValueToTextInput()}return t.prototype.changeValue=function(t){var e=this.selectableList.getIndex(t);this.selectableList.selected=this.selectableList.values[e]},t.prototype.setInitialValueToTextInput=function(){this.selectableList.selected&&(this.txtInput.value=this.selectableList.getText(this.selectableList.selected))},t.prototype.setInitialProperties=function(t){this.txtInput.readOnly=!0,this.changeBtnClass=t.btnChangeClass||"unfolded",this.listElementClass=t.listElementClass||"li-elem",this.maxLength=t.maxSize},t.prototype.createElements=function(t){var e=CBoxUtils.createHTMLElements(t);this.htmlElement=e.htmlElement,this.txtInput=e.txtInput,this.btnInput=e.btnInput,this.listElements=e.listElements},t.prototype.changeToSelected=function(t){this.changeValue(t),this.selectableList.selected&&(this.txtInput.value=this.selectableList.getText(this.selectableList.selected),this.hideAfterSelected())},t.prototype.hideAfterSelected=function(){this.listVisible=CBoxUtils.hideAfterSelected(this.listElements,this.maxLength,this.listVisible,this.btnInput,this.changeBtnClass)},t.prototype.toggleListElements=function(){this.listVisible=CBoxUtils.toggleListElements(this.listElements,this.maxLength,this.listVisible)},t}();exports.ComboBox=ComboBox;