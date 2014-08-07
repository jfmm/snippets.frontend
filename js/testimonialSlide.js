/*=====================================================================  
	Testimonial Carousel
	
	Description: snippet of code that enables a div carousel with
	jQuery powered transitions (for < IE10 support)
=======================================================================*/

(function($){
	
	
	var testimonial = $(".testimonial-wrap");
	var testimonialNumber = $(".testimonial-section-wrap").children(".testimonial-wrap").length;
	var firstTestimonial = $(".testimonial-wrap:first-child");
	var current = 0;
	var cycling;
	
	
	/*
	* cycle function for autoplay
	*
	*/
	
	function cycle() {
		
		var visible = $("div.visible");
		
		// increment current
		current++;
		

		if(current < testimonialNumber){
			
			// the div with the class of visible removes its class, passes it to the next one and fades its opacity on
			visible.removeClass("visible").fadeTo(50, 0).next(".testimonial-wrap").addClass("visible").fadeTo(200, 1);

			
		} else if(current === testimonialNumber) {
			// if we just passed the last slide fade out last slide
			visible.removeClass("visible").fadeTo(50, 0);
			console.log("were on the last slide");
			
			//add visible to first slide
			testimonial.first().addClass("visible").fadeTo(200, 1);
			
			//reset current counter variable
			current = 0;
		
		}
	
	
	}
		
		
		// set timer and initialize it
		function initCycle (){
			cycling = setInterval(cycle, 11000);
		} 
	
		initCycle();
	
	
	
	
	
		/*
		* Click handler code is below
		*
		*/
	
	$(".arrow-control").on("click", function(){
		
		
		window.clearInterval(cycling);
		
		var visible = $("div.visible");
		var direction = $(this).data("dir");
		
	
		/*
		* if block below handles transitions
		*/
		
		if(direction === "right") {
			
			// if we are going forward we fade next one into view and increment counter
			current++;
			
			visible
			.removeClass("visible")
			.fadeTo(50, 0)
			.next(".testimonial-wrap")
			.addClass("visible")
			.fadeTo(200, 1);
		
		} else {
			
			// else were going back and we fade the previous one into view
			current--;
			
			visible
			.removeClass("visible")
			.fadeTo(50, 0)
			.prev(".testimonial-wrap")
			.addClass("visible")
			.fadeTo(200, 1);
			
		}

		
		/*
		*  if block below handles when we go overboard
		*/
		
		if(current >=  testimonialNumber) {
			// if we go overboard to the right we reset back to the first slide
			current = 0;
			
			// and we fade the last one out and fade first one in
			visible.removeClass("visible").fadeTo(50, 0);
			testimonial.first().addClass("visible").fadeTo(200, 1);
			
		} else if(current <= 0) {
			current = testimonialNumber;
			
			// we fade last one in, fade first one out.
			visible.removeClass("visible").fadeTo(50, 0);
			testimonial.last().addClass("visible").fadeTo(200, 1);
		}
		
	});

})(jQuery);