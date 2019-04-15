	// $.getElementbyID("")

// go get me jquery or zepto
// check for that because if we load .js before the pages is ready, it might select something that does not exist yet

$(document).ready( 
	function() {
		console.log("Javascript is ready.");

		//width() is a method, get back the window value
		var width = $(window).width();
		console.log("The width of my window is " + width);

		// default value width < 350
		if(width < 551) {
			$(".nav-combined a.nav-toggle").css("display", "block");
			$(".nav-combined .nav-menu").hide();
		}

		$("a.nav-toggle").click( 
				function() {
					$(".nav-combined .nav-menu").slideToggle(500);
				}
			);
		
	}
);