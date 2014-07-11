/*======================================================================================================
* Snippet which adds a class to a fixed nav bar (or any element for that matter) upon scrolling and
* viewport is past the first coordinate.
* 
* Dependency: jQuery
*=======================================================================================================*/

(function($){
	
	var navbar = $('.navbar');
	var navScrolled = "nav-scrolled";
	
	$(window).scroll(function(){
		
		if ($(this).scrollTop() > 0) {
			navbar.addClass(navScrolled);
		} else {
			navbar.removeClass(navScrolled);
		}
	
	});

})(jQuery);
