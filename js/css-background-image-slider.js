/*
*=====================================================================
CSS3 BACKGROUND IMAGE SLIDER

 This code uses css3 transitions and opacity values to cycle through
 stacked Divs with background images to create a carousel that scales with
 the browser viewport thanks to CSS background-size: cover; property.

 Dependency: jQuery

 TODO: Add click functionality and code it as a jQuery Plugin
*=====================================================================
*/


(function($) {

	'use strict';

		var htmlDocument = $('html'); // cache document for modernizr testing
		var slidesContainer = $('.hero');
		var slide = $('.slide-single'); //individual slide class
		var allButFirst = $('div.slide-single:nth-child(n+2)'); //selects all slides but the first one in the set
		var currentSlide = 1;
		var sliderLength = slidesContainer.children().length;		
		

		function cycle() {
			//active slide must be in local scope to be updated
			var activeSlide = $('.active');

			// as long as the slide counter is below the number of
			// actual slides show the slides. 
			if(currentSlide < sliderLength) {
			
				// test for CSS transitions using Modernizr			
				if(htmlDocument.hasClass('csstransitions')) {	
					
					//make upcoming div visible
					activeSlide.next().addClass('active');

					//have last active slide remove its predecessors active class
					activeSlide.addBack().removeClass('active');
				} else {
					// IE 9 & BELOW FALLBACK to jQuery Methods to handle slideshow
					// animation.
				
					
					//make upcoming div visible and add active class to it
					activeSlide.next().fadeTo('slow', 1).addClass('active');

				}
			
			//update counter variable
			currentSlide += 1;
			
			} else {
			// if counter exceeds number of slides, reset counter,
			// fade in first slide in the set first, and then fade out the last one
			// in the set to reveal the first one. 
			currentSlide = 1;

				// again, check for CSS transitions browswer support			
				if(htmlDocument.hasClass('csstransitions')) {
					slide.first().addClass('active');
					slide.last().removeClass('active');
				} else {
					
					//IE 9 & Below Fallback

					//fade last one in the set first
					slide.last().fadeTo('slow',0);
					
					//Fade all but the first one in the set to 0 opacity but faster than the
					// last one to avoid jarring transition
					allButFirst.fadeTo(100, 0).removeClass('active');
		
				}
			}
		}

		// autoplay set
		setInterval(function(currentSlide){cycle();}, 4800);

})(jQuery);