jQuery(document).ready((function(e){e(".eic-image").hover((function(){e(this).find('[data-pin-log="button_pinit"]').show(),e(this).find(".eic-image-caption-hover").show()}),(function(){e(this).find('[data-pin-log="button_pinit"]').hide(),e(this).find(".eic-image-caption-hover").hide()}))}));const responsive_breakpoint=parseInt(eic_public.responsive_breakpoint),responsive_layout="1"===eic_public.responsive_layout;var EIC_Responsive={elementsSelector:".eic-container",maxRefreshRate:5,init:function(){var e=this;jQuery((function(){e.el={window:jQuery(window),responsive_elements:jQuery(e.elementsSelector)},e.events()}))},checkBreakpointOfAllElements:function(){var e=EIC_Responsive;e.el.responsive_elements.each((function(t,i){var n=jQuery(i);e.checkBreakpointOfElement(n),n.width()<responsive_breakpoint?(n.removeClass("eic-container-desktop"),n.addClass("eic-container-mobile"),responsive_layout&&n.addClass("eic-container-mobile-regular")):(n.addClass("eic-container-desktop"),n.removeClass("eic-container-mobile"),n.removeClass("eic-container-mobile-regular"))}))},checkBreakpointOfElement:function(e){var t=e.find(".eic-frame"),i=e.width(),n=t.outerWidth(),o=t.data("orig-width"),r=t.data("ratio");if(i<n||n<o){var s=i;s>o&&(s=o);var a=s/o,p=t.data("orig-border"),c=Math.ceil(p*a);t.css("width",s+"px").css("height",s/r+"px").css("border-width",c+"px"),e.find(".eic-image").each((function(){var e=jQuery(this);if(responsive_layout&&i<responsive_breakpoint)e.find("img").style("position","static","important").style("width","100%","important").style("height","auto","important").style("left","0","important").style("top","0","important");else{var t=Math.ceil(e.data("size-x")*a),n=Math.ceil(e.data("size-y")*a),o=Math.ceil(e.data("pos-x")*a),r=Math.ceil(e.data("pos-y")*a);e.css("background-size",t+"px "+n+"px").css("background-position",o+"px "+r+"px").css("border-width",c+"px"),e.find("img").style("position","absolute","important").style("width",t+"px","important").style("height",n+"px","important").style("left",o+"px","important").style("top",r+"px","important")}}))}},events:function(){this.checkBreakpointOfAllElements(),this.el.window.bind("resize",this.debounce(this.checkBreakpointOfAllElements,this.maxRefreshRate))},debounce:function(e,t,i){var n,o=null;return function(){var r=this,s=arguments,a=function(){o=null,i||(n=e.apply(r,s))},p=i&&!o;return clearTimeout(o),o=setTimeout(a,t),p&&(n=e.apply(r,s)),n}}};!function(e){if(!e.fn.style){var t=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};!!CSSStyleDeclaration.prototype.getPropertyValue||(CSSStyleDeclaration.prototype.getPropertyValue=function(e){return this.getAttribute(e)},CSSStyleDeclaration.prototype.setProperty=function(e,i,n){if(this.setAttribute(e,i),""!=(n=void 0!==n?n:"")){var o=new RegExp(t(e)+"\\s*:\\s*"+t(i)+"(\\s*;)?","gmi");this.cssText=this.cssText.replace(o,e+": "+i+" !"+n+";")}},CSSStyleDeclaration.prototype.removeProperty=function(e){return this.removeAttribute(e)},CSSStyleDeclaration.prototype.getPropertyPriority=function(e){return new RegExp(t(e)+"\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?","gmi").test(this.cssText)?"important":""}),e.fn.style=function(e,t,i){if(void 0===this.get(0))return this;var n=this.get(0).style;return void 0!==e?void 0!==t?(i=void 0!==i?i:"",n.setProperty(e,t,i),this):n.getPropertyValue(e):n}}}(jQuery),EIC_Responsive.init();