/*==========================================
toggleFix.js by Jose Morales Mendizabal
This Snippet of code imitates Bootstrap's
Affix.js.

Dependencies: jQuery
===========================================*/

(function($){
		
		
			var affixedSidebar = $("#affixed-sidebar");
			var topOffset = $('.jumbotron').outerHeight(true); // 400
			var bottomOffset = $(document).height() - ($("footer").height() + 840);
			var sidebarHeight = affixedSidebar.height();

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
						.removeClass("toggle-static toggle-bottom")
						.addClass("toggle-affixed");
						
					
				} else if (windowPosition >= bottomOffset) {
								
					 console.log("nav should be in bottom position");
								
								affixedSidebar
								.addClass("toggle-bottom")
								.removeClass("toggle-affixed toggle-static");
							
								
					
				}	else if (windowPosition < topOffset) {
					
								console.log("nav should be static");
								affixedSidebar.removeClass("toggle-affixed").addClass("toggle-static");
				}
				 
			});
	
	
})(jQuery);