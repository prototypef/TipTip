/*
 * TipTip
 *
 * NOTE: This is an "unofficial" fork of 1.3 to fix compatibility issues with jQuery 1.8.3
 *
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin (v1.3 + docs)
 * github.com/prototypef/TipTip (v1.3.1 source)
 *
 * Version 1.3.1   -   Updated: Dec. 10, 2012
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left 
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */(function(a){a.fn.tipTip=function(b){var c={activation:"hover",keepAlive:!1,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:!1,enter:function(){},exit:function(){}},d=a.extend(c,b);if(a("#tiptip_holder").length<=0){var e=a('<div id="tiptip_holder" style="max-width:'+d.maxWidth+';"></div>'),f=a('<div id="tiptip_content"></div>'),g=a('<div id="tiptip_arrow"></div>');a("body").append(e.html(f).prepend(g.html('<div id="tiptip_arrow_inner"></div>')))}else var e=a("#tiptip_holder"),f=a("#tiptip_content"),g=a("#tiptip_arrow");return this.each(function(){var b=a(this);if(d.content)var c=d.content;else var c=b.attr(d.attribute);if(c!=""){d.content||b.removeAttr(d.attribute);var h=!1;d.activation=="hover"?(b.hover(function(){i()},function(){d.keepAlive||j()}),d.keepAlive&&e.hover(function(){},function(){j()})):d.activation=="focus"?b.focus(function(){i()}).blur(function(){j()}):d.activation=="click"&&(b.click(function(){return i(),!1}).hover(function(){},function(){d.keepAlive||j()}),d.keepAlive&&e.hover(function(){},function(){j()}));function i(){d.enter.call(this),f.html(c),e.hide().removeAttr("class").css("margin","0"),g.removeAttr("style");var i=parseInt(b.offset().top),j=parseInt(b.offset().left),k=parseInt(b.outerWidth(!0)),l=parseInt(b.outerHeight(!0)),m=e.outerWidth(!0),n=e.outerHeight(!0),o=Math.round((k-m)/2),p=Math.round((l-n)/2),q=Math.round(j+o),r=Math.round(i+l+d.edgeOffset),s="",t="",u=Math.round(m-12)/2;d.defaultPosition=="bottom"?s="_bottom":d.defaultPosition=="top"?s="_top":d.defaultPosition=="left"?s="_left":d.defaultPosition=="right"&&(s="_right");var v=o+j<parseInt(a(window).scrollLeft()),w=m+j>parseInt(a(window).width());if(v&&o<0||s=="_right"&&!w||s=="_left"&&j<m+d.edgeOffset+5)s="_right",t=Math.round(n-13)/2,u=-12,q=Math.round(j+k+d.edgeOffset),r=Math.round(i+p);else if(w&&o<0||s=="_left"&&!v)s="_left",t=Math.round(n-13)/2,u=Math.round(m),q=Math.round(j-(m+d.edgeOffset+5)),r=Math.round(i+p);var x=i+l+d.edgeOffset+n+8>parseInt(a(window).height()+a(window).scrollTop()),y=i+l-(d.edgeOffset+n+8)<0;if(x||s=="_bottom"&&x||s=="_top"&&!y)s=="_top"||s=="_bottom"?s="_top":s+="_top",t=n,r=Math.round(i-(n+5+d.edgeOffset));else if(y|(s=="_top"&&y)||s=="_bottom"&&!x)s=="_top"||s=="_bottom"?s="_bottom":s+="_bottom",t=-12,r=Math.round(i+l+d.edgeOffset);if(s=="_right_top"||s=="_left_top")r+=5;else if(s=="_right_bottom"||s=="_left_bottom")r-=5;if(s=="_left_top"||s=="_left_bottom")q+=5;g.css({"margin-left":u+"px","margin-top":t+"px"}),e.css({"margin-left":q+"px","margin-top":r+"px"}).attr("class","tip"+s),h&&clearTimeout(h),h=setTimeout(function(){e.stop(!0,!0).fadeIn(d.fadeIn)},d.delay)}function j(){d.exit.call(this),h&&clearTimeout(h),e.fadeOut(d.fadeOut)}}})}})(jQuery);