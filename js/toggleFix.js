var affixedSidebar = $("#affixed-sidebar");
			var topOffset = $('.jumbotron').outerHeight(true); // 400
			var bottomOffset = $(document).height() - ($("footer").outerHeight(true) + 900);

			console.log("top offset is " + topOffset); 
			console.log("bottom offset is " + bottomOffset);
			console.log("the document is " + $(document).outerHeight());
			
	
			$(window).scroll(function(){
					
				
				var window = $(this);
				
				console.log(window.scrollTop()); // log the window position for debugging
				if(window.scrollTop() > topOffset && window.scrollTop() < bottomOffset) {
					
					console.log("entering affixed zone, nav is fixed");
					affixedSidebar.removeClass("custom-affixed-neutral");
					affixedSidebar.addClass("custom-affixed");
					
				} else {
						if (window.scrollTop() >= bottomOffset) {
							console.log("nav is normal, entering bottom");
							affixedSidebar.removeClass("custom-affixed");
							affixedSidebar.addClass("custom-affixed-neutral");
						}
					console.log("nav is normal");
					affixedSidebar.removeClass("custom-affixed");
					affixedSidebar.addClass("custom-affixed-neutral");
					
				} 
			});
