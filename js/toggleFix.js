/*==========================================
toggleFix.js by Jose Morales Mendizabal
This Snippet of code imitates Bootstrap's
Affix.js.

Dependencies: jQuery
===========================================*/


			var affixedSidebar = $("#affixed-sidebar");
			var topOffset = $('.jumbotron').outerHeight(true); // 400
			var bottomOffset = $(document).height() - ($("footer").outerHeight(true) + 900);

			console.log("top offset is " + topOffset); 
			console.log("bottom offset is " + bottomOffset);
			console.log("the document is " + $(document).outerHeight());
			
	
			$(window).scroll(function(){
					
				
				var window = $(this);
				
				
				// if window position is past the jumbotron but not past the footer fix the nav
				if(window.scrollTop() > topOffset && window.scrollTop() < bottomOffset) {
					
						console.log("entering affixed zone, nav is fixed");
						affixedSidebar.removeClass("toggle-static");
						affixedSidebar.removeClass("toggle-bottom");
						affixedSidebar.addClass("toggle-affixed");
						affixedSidebar.removeAttr("style");
					
				} else {
						
						if (window.scrollTop() >= bottomOffset) 
						{
								console.log("nav should be in bottom position");
								affixedSidebar.removeClass("toggle-affixed");
								affixedSidebar.removeClass("toggle-static");
								affixedSidebar.addClass("toggle-bottom");
								affixedSidebar.css("top", 2000); 
						}
						else if (window.scrollTop() < topOffset) 
						{
								console.log("nav should be static");
								affixedSidebar.removeClass("toggle-affixed");
								affixedSidebar.addClass("toggle-static");
						}
				} 
			});
