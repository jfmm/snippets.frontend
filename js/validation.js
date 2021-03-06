/* jQuery Dependent form validation
*------------------------------------------*/


(function($){
	
	var form = $("#registration-form");
	var inputs = $("#registration-form input");
	var registerBtn = $("#submit-btn");
	var sameAsAbove = $("#contact-check");
	var secondaryContact = $(".secondary-contact");
	
	var areRequired =  true; // this var is used on checkbox click event 
	
	
	//Function scans for empty values in required fields
	function requiredIsEmpty(){
		
		var requiredFields = $("input[required]");
		
		// Create new array to store input scan results
		var blanks = requiredFields.map(function(){ return $(this).val() == "" });
		
		// if this expression doesnot equal -1,
		// there is required fields still blank
		return $.inArray(true, blanks) != -1;	
	}
	
	
	// Handles enabling/disabling submit button
	function requiredFilledIn() {
	
		if(!sameAsAbove.prop("checked") && 
			 !requiredIsEmpty() && 
			 isValidEmail($("#contact-email").val()) && 
			 isValidEmail($("#email").val())){ 
				//ENABLE
				registerBtn.removeClass("disabled");
				registerBtn.removeAttr("disabled");
			
		}  else if(requiredIsEmpty() || !isValidEmail($("#email").val()) || !sameAsAbove.prop("checked")){
			
			registerBtn.addClass("disabled");
			registerBtn.attr("disabled", "disabled");
			
		} else {
			
			registerBtn.removeClass("disabled");
			registerBtn.removeAttr("disabled");
		}	
		
	}
	
	function isValidEmail(email) {
			
		// check if @ and . char is present in email. 
		if(email.indexOf("@") != -1 && email.indexOf(".") != -1)
				return true;
			
	}
	
	
	inputs.keyup(function(){
		//on each key up check required fields are filled in
		requiredFilledIn();
	});
	
	
	
	sameAsAbove.click(function(){
		// when checkbox checked remove contact fields required attribute,
		// enable button and re-execute requiredIsEmpty to update the reuquired input fields
		// blanks array
		var secondaryContactFields = $(".secondary-contact");
		
		
		if(areRequired) {
			//remove required attribute
			secondaryContactFields.removeAttr("required");
			console.log("required attribute removed");
			areRequired = false;
		} else {
			// add required attribute
			console.log("required attribute added back");
			secondaryContactFields.attr("required", "required");
			areRequired = true;
		}
			
		
		requiredFilledIn();
		requiredIsEmpty();
	});
	
	
// validate e-mail field with real-time visual cues
	function validateEmail(emailInputSelector){
		
		$(emailInputSelector).keyup(function(){
			
			var emailInput = $(this);
			
			if( isValidEmail(emailInput.val()) )
				emailInput.addClass("valid").removeClass("invalid");
			
			else
				emailInput.removeClass("valid").addClass("invalid");
		
		});
	}
	
	validateEmail("#email");
	validateEmail("#contact-email");


	
	
	// Disable submit button when page loads
	requiredFilledIn();

})(jQuery);
