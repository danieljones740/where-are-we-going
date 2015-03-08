
// jQuery Plugin Library


// switchDisplay

$.fn.switchDisplay1 = function(animation, duration) {
	
	var visible = $(this).is(':visible');
	
	// Default duration
	duration = duration || 250;
	
	alert(animation);
	
	switch(animation.toLowerCase()) {
		
		case "slide":		// Sliding
		case "slidedown":
		case "slideup":
			if (visible) {
				$(this).slideUp(duration);
			} else {
				$(this).slideDown(duration);
			}
			break;
		
		default:	// No animation
			if (visible) {
				$(this).hide();
			}
			else {
				$(this).show();
			}
	}
}

