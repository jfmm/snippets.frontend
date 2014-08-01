/*==========================================
toggleFix.js by Jose Morales Mendizabal
This Snippet of code imitates Bootstrap's
Affix.js.

Dependencies: jQuery
===========================================*/

(function($){
		
		
			var affixedSidebar = $("#affixed-sidebar");
			var topOffset = $('.jumbotron').outerHeight(true); // 400
			var bottomOffset = $(document).height() - ($("footer").outerHeight(true) + 840);
			var sidebarHeight = affixedSidebar.outerHeight(true);

			console.log("top offset is " + topOffset); 
			console.log("bottom offset is " + bottomOffset);
			console.log("height of nave is " + sidebarHeight);
			console.log("the document is " + $(document).outerHeight());
			
	
			$(window).scroll(function(){
					
				
				var window = $(this),
						windowPosition = window.scrollTop();
				
				
				// if window position is past the jumbotron but not past the footer fix the nav
				if(windowPosition > topOffset && windowPosition < bottomOffset) {
					
						console.log("entering affixed zone, nav is fixed");
						
						affixedSidebar
						.removeClass("toggle-static")
						.removeClass("toggle-bottom")
						.addClass("toggle-affixed")
						.removeAttr("style");
					
				} else {
						
						if (windowPosition >= bottomOffset) 
						{
								console.log("nav should be in bottom position");
								
								affixedSidebar
								.removeClass("toggle-affixed")
								.removeClass("toggle-static")
								.addClass("toggle-bottom")
								.css("top", bottomOffset - sidebarHeight - 170); // should be bottom offset - height of the nav
						}
						else if (windowPosition < topOffset) 
						{
								console.log("nav should be static");
								affixedSidebar.removeClass("toggle-affixed").addClass("toggle-static");
						}
				} 
			});

})(jQuery);


})(jQuery);