/*=========================================  
			Testimonial Carousel
==========================================*/


(function($){
	
	
	var testimonial = $(".testimonial-wrap");
	var testimonialNumber = $(".testimonial-section-wrap").children(".testimonial-wrap").length;
	var firstTestimonial = $(".testimonial-wrap:first-child");
	var current = 0;
	var cycling;
	
	console.log("There are " + testimonialNumber + " testimonials");
	
	function cycle() {
		
		var visible = $("div.visible");
		
		// increment current
		current++;
		
		console.log("current slide is " + current);

		
		
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
	
	
	
	// TODO:
	// if on first slide we click left we go to last
	$(".arrow-control").on("click", function(){
		
		
		window.clearInterval(cycling);
		
		var visible = $("div.visible");
		var direction = $(this).data("dir");
		
		current++;

		if	(direction === "right" && current < testimonialNumber) 
		{
			 
				console.log("slide number " + current);
				visible.removeClass("visible").fadeTo(50, 0).next(".testimonial-wrap").addClass("visible").fadeTo(200, 1);
	
		} 
		
		else if (direction === "right" && current === testimonialNumber)  
		{
			
				console.log("We've reached the end!");
				console.log("slide number " + current);
				// if we just passed the last slide fade out last slide
				visible.removeClass("visible").fadeTo(50, 0);


				//add visible to first slide
				testimonial.first().addClass("visible").fadeTo(200, 1);

				//reset current counter variable
				current = 0;
		} 
		else if (direction === "left" && current > 1) 
		{
				// if we're going backwards but not in the negative area
				--current;
				console.log("we're going backwards but not in the negative area, slide number " + current);
				visible.removeClass("visible").fadeTo(50, 0).prev(".testimonial-wrap").addClass("visible").fadeTo(200, 1);
		} else if (direction === "left" && current <= 1){
		
			// make last visible and make first invisible
			console.log("we've entered negative area!");
			
			visible.removeClass("visible").fadeTo(50, 0);
			
			testimonial.last().addClass("visible").fadeTo(200, 1);
		}
		

		
	});

})(jQuery);