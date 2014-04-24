(function($) {
		var slidesContainer = $('.hero');
		var slide = $('.slide');
		var currentSlide = 1;
		var sliderLength = slidesContainer.children().length;		
		

		function cycle() {
			//active slide must be in local scope to be updated
			var activeSlide = $('.active');

			// as long as the slide counter is below the number of
			// actual slides show the slides. 
			if(currentSlide <= sliderLength) {
			
			//make upcoming div visible
			activeSlide.next().addClass('active');

			//have last active slide remove its predecessors active class
			activeSlide.prevAll().removeClass('active');
			currentSlide += 1;
			
			} else {
			// if counter exceeds actual slide number, reset counter
			// add active class to first slide and remove the active class from
			// last element
			currentSlide = 1;
			slide.first().addClass('active');
			slide.last().removeClass('active');
			
			}
		}

		// autoplay set
		setInterval(function(currentSlide){cycle();}, 3000);


})(jQuery);