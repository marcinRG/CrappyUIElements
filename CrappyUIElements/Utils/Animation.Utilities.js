"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var velocity_animate_1=require("velocity-animate"),AnimationsUtils=function(){function t(){this.hiddenAttribute="data-hidden-attribute",this.isNotDisplayedString="none",this.isDisplayedString="block"}return t.prototype.slideToggle=function(t,e,i){var s=this.getElementHeight(t);this.isNotDisplayed(t)?this.slideDown(t,e,i,"hidden",s):this.slideUp(t,e,i,"hidden",s)},t.prototype.slideDown=function(t,e,i,s,o){t.style.overflow="hidden",t.style.height="0px",t.style.display=this.isDisplayedString,t.removeAttribute(this.hiddenAttribute),velocity_animate_1.Velocity(t,{height:o+"px"},{duration:e,easing:i,complete:function(){t.style.overflow=s}})},t.prototype.slideUp=function(t,e,i,s,o){var n=this;t.style.overflow=s,t.style.height=o+"px",velocity_animate_1.Velocity(t,{height:"0px"},{duration:e,easing:i,complete:function(){t.style.display=n.isNotDisplayedString,t.setAttribute(n.hiddenAttribute,"")}})},t.prototype.getElementHeight=function(t){var e=this.getElementsProperites(t);this.changePropertiesToGetElementHeight(t);var i=t.offsetHeight;return this.restoreElementsProperties(t,e),i},t.prototype.getListElementHeightOverflow=function(t,e){var i=0,s="auto",o=0;if(t instanceof HTMLUListElement||t instanceof HTMLOListElement){var n=this.getElementsProperites(t);this.changePropertiesToGetElementHeight(t);var l=t.children.length;0<l&&(o=t.children[0].offsetHeight+1,s=e<l?(i=e*o,"auto"):(i=l*o,"hidden")),this.restoreElementsProperties(t,n)}return{height:i,overflow:s}},t.prototype.getElementsProperites=function(t){return{visibility:window.getComputedStyle(t).visibility,display:window.getComputedStyle(t).display,height:window.getComputedStyle(t).height}},t.prototype.restoreElementsProperties=function(t,e){t.style.height=e.height,t.style.display=e.display,t.style.visibility=e.visibility},t.prototype.changePropertiesToGetElementHeight=function(t){t.style.display=this.isNotDisplayedString,t.style.height=null,t.style.visibility="hidden",t.style.display="block"},t.prototype.isNotDisplayed=function(t){return window.getComputedStyle(t).display===this.isNotDisplayedString},t}();exports.animationsUtils=new AnimationsUtils;