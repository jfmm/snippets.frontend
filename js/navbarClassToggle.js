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
