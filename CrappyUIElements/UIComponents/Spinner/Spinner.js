"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var utils=require("../../Utils/Utilities"),Spinner=function(){function t(t,e){var s=this;this.iterable=e,this.setProperties(t),this.createHTMLElements(t),this.setHTMLElements(),this.htmlInputText.value=this.iterable.selected,this.htmlButtonUp.addEventListener("click",function(){s.nextValue()}),this.htmlButtonDown.addEventListener("click",function(){s.previousValue()}),this.debouncedInputTxt=utils.debounce(function(t){var e=s.iterable.checkAndSetValue(t);e&&(s.htmlInputText.value=e)},500),this.htmlInputText.addEventListener("input",function(){s.debouncedInputTxt(s.htmlInputText.value)})}return t.prototype.changeValue=function(t){return"next"!==t||this.iterable.isAtEnd()?"previous"!==t||this.iterable.isAtStart()?null:this.iterable.previous():this.iterable.next()},t.prototype.nextValue=function(){this.changeValue("next")&&(this.htmlInputText.value=this.iterable.selected+"")},t.prototype.previousValue=function(){this.changeValue("previous")&&(this.htmlInputText.value=this.iterable.selected+"")},t.prototype.createHTMLElements=function(t){var e=('<input type="text" class="'+this.txtInputClass+'">\n        <div class="'+this.buttonWrapperClass+'">\n           <button class="'+this.upButtonClass+'"></button>\n           <button class="'+this.downButtonClass+'"></button>\n        </div>').trim();this.htmlElement=document.querySelector(t.querySelectorString),this.htmlElement&&(this.htmlElement.classList.add(this.elementClass),this.htmlElement.innerHTML=e)},t.prototype.setProperties=function(t){this.elementClass=t.elementClass||"spinner-cuie",this.buttonWrapperClass=t.buttonWrapperClass||"button-wrapper",this.txtInputClass=t.txtInputClass||"input-txt",this.upButtonClass=t.upButtonClass||"button-up",this.downButtonClass=t.downButtonClass||"button-down",this.disabledButtonClass=t.disabledButtonClass||""},t.prototype.setHTMLElements=function(){var t="."+this.upButtonClass;this.htmlButtonUp=this.htmlElement.querySelector(t);var e="."+this.downButtonClass;this.htmlButtonDown=this.htmlElement.querySelector(e);var s="."+this.txtInputClass;this.htmlInputText=this.htmlElement.querySelector(s)},t}();exports.Spinner=Spinner;