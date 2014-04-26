/*
*=====================================================================
Smooth Scroll Animation

 This short snippet animates the browser window as it scrolls to
 sections with Id from anchors with hash attributes instead of links

 Dependency: jQuery
*=====================================================================
*/

function($){
		
			$(".nav-link").on('click', function(e){
				e.preventDefault();
				var id = $(this).attr("href");
				$("html,body").animate({scrollTop: $(id).offset().top}, 300);
				return false;
			});

})(jQuery);
