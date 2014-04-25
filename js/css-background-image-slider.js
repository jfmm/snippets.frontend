/*
*=====================================================================
CSS3 BACKGROUND IMAGE SLIDER

 This code uses css3 transitions and opacity values to cycle through
 stacked Divs with background images to create a carousel that scales with
 the browser viewport thanks to CSS background-size: cover; property.

 TODO: Add click functionality && IE8 fallback.
*=====================================================================
*/


(function($) {

		var slidesContainer = $('.hero');
		var slide = $('.slide');
		var currentSlide = 1;
		var sliderLength = slidesContainer.children().length;		
		

		function cycle() {
			// active slide must be in local scope to be updated
			var activeSlide = $('.active');

			// as long as the slide counter is below the number of
			// actual slides show the slides. 
			if(currentSlide < sliderLength) {
			
				
			// make upcoming div visible
			activeSlide.next().addClass('active');

			// have last active slide remove its predecessors active class
			activeSlide.addBack().removeClass('active');
			
			// update counter variable
			currentSlide += 1;
			
			} else {
			// if counter exceeds number of slides, reset counter,
			// add active class to first slide and remove the active class from
			// last element
			currentSlide = 1;
			slide.first().addClass('active');
			slide.last().removeClass('active');
			
			}
		}

		// set autoplay
		setInterval(function(currentSlide){cycle();}, 4000);


})(jQuery);