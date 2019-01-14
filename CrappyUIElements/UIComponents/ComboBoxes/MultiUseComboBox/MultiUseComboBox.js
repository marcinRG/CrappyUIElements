"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var CBoxUtils=require("../ComboBox.Utils"),MultiUseComboBox=function(){function t(t,e){var s=this;this.selectableList=e,this.listVisible=!1,this.setProperties(t),this.createHTMLElements(t),this.htmlButton.addEventListener("click",function(){CBoxUtils.addRemoveClass(s.listVisible,s.htmlButton,s.changeBtnClass),s.toggleListElements()}),this.setInitialValueToTextInput()}return t.prototype.changeValue=function(t){var e=this.selectableList.getIndex(t);this.selectableList.selected=this.selectableList.values[e]},t.prototype.createHTMLElements=function(t){var e=('\n            <div class="'+this.inputsRowClass+'">\n                <div class="'+this.containerClass+'">\n                </div>\n                <button class="'+this.inputBtnClass+'"></button>\n            </div>\n            <div class="'+this.listClass+'" style="z-index: '+this.zIndex+'">\n            </div>').trim();this.htmlElement=document.querySelector(t.querySelectorString),this.htmlElement&&(this.htmlElement.classList.add(this.elementClass),this.htmlElement.innerHTML=e,this.setHTMLElements(),this.htmlList=CBoxUtils.createListHTMLElements(this.selectableList,this.selectableList.values,this.htmlList,this.listElementClass,this,this.changeToSelected))},t.prototype.setInitialValueToTextInput=function(){this.selectableList.selected&&(this.htmlContainer.innerHTML=this.selectableList.getText(this.selectableList.selected))},t.prototype.changeToSelected=function(t){this.changeValue(t),this.selectableList.selected&&(this.htmlContainer.innerHTML=this.selectableList.getText(this.selectableList.selected),this.hideAfterSelected())},t.prototype.hideAfterSelected=function(){this.listVisible=CBoxUtils.hideAfterSelected(this.htmlList,this.maxLength,this.listVisible,this.htmlButton,this.changeBtnClass)},t.prototype.toggleListElements=function(){this.listVisible=CBoxUtils.toggleListElements(this.htmlList,this.maxLength,this.listVisible)},t.prototype.setProperties=function(t){this.containerClass=t.containerClass,this.maxLength=t.maxSize,this.elementClass=t.elementClass||"color-combo-box-cuie",this.inputsRowClass=t.inputsRowClass||"inputs",this.inputBtnClass=t.inputBtnClass||"input-btn",this.listClass=t.listClass||"list-elements",this.listElementClass=t.listElementClass||"li-elem",this.zIndex=t.menuZIndex+"",this.changeBtnClass=t.btnChangeClass||"unfolded"},t.prototype.setHTMLElements=function(){var t="."+this.containerClass;this.htmlContainer=this.htmlElement.querySelector(t);var e="."+this.inputBtnClass;this.htmlButton=this.htmlElement.querySelector(e);var s="."+this.listClass;this.htmlList=this.htmlElement.querySelector(s)},t}();exports.MultiUseComboBox=MultiUseComboBox;