/*==========================================
toggleFix.js by Jose Morales Mendizabal
This Snippet of code imitates Bootstrap's
Affix.js.

Dependencies: jQuery
===========================================*/

(function($){
		
		
			var affixedSidebar = $("#affixed-sidebar");
			var topOffset = $('.jumbotron').outerHeight(true); // 400
			var bottomOffset = $(document).height() - ($("footer").outerHeight(true) + 900);
			var sidebarHeight = affixedSidebar.height();

			console.log("top offset is " + topOffset); 
			console.log("bottom offset is " + bottomOffset);
			console.log("the document is " + $(document).outerHeight());
			
	
			$(window).scroll(function(){
					
				
				var window = $(this),
						windowPosition = window.scrollTop();
				
				
				// if window position is past the jumbotron but not past the footer fix the nav
				if(windowPosition > topOffset && windowPosition < bottomOffset) {
					
						console.log("entering affixed zone, nav is fixed");
						affixedSidebar.removeClass("toggle-static");
						affixedSidebar.removeClass("toggle-bottom");
						affixedSidebar.addClass("toggle-affixed");
						affixedSidebar.removeAttr("style");
					
				} else {
						
						if (windowPosition >= bottomOffset) 
						{
								console.log("nav should be in bottom position");
								affixedSidebar.removeClass("toggle-affixed");
								affixedSidebar.removeClass("toggle-static");
								affixedSidebar.addClass("toggle-bottom");
								affixedSidebar.css("top", bottomOffset - sidebarHeight); // should be bottom offset - height of the nav
						}
						else if (windowPosition < topOffset) 
						{
								console.log("nav should be static");
								affixedSidebar.removeClass("toggle-affixed");
								affixedSidebar.addClass("toggle-static");
						}
				} 
			});

})(jQuery);