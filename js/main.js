(function ($) {
"use strict";
$(window).on('scroll',function() {    
	var scroll = $(window).scrollTop();
	if (scroll < 1) {
	 $(".sticky").removeClass("scroll-header");
	}else{
	 $(".sticky").addClass("scroll-header");
	}
   });

})(jQuery);