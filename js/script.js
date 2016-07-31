

$(document).ready(function() {

$(function() {
		$('#about-me').hide();
		$('#karma').hide();
		$('#fighter').hide();
		$('#nyt-hack').hide();
	});

//this section controls "My Projects" header	
	$(window).scroll(function() {
		$('.content h1').css("top",Math.max(0, 310-
	$(this).scrollTop()));
	});

//this seciton controls <p> .hide .show
	
$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 125, y < 750) {
		$('#about-me').fadeIn();
	} 
	else if (y > 750, y < 1400) {
		$('#about-me').fadeOut();
		$('#karma').fadeIn();

	} 
	else if (y > 1400, y < 2100){
		$('#karma').fadeOut();
		$('#fighter').fadeIn();
	}	
	else if (y > 1800) {
		$('#fighter').fadeOut();
		$('#nyt-hack').fadeIn();
	}
});

//this section is responsive
if (document.documentElement.clientWidth < 1400){
	$(window).scroll(function() {
		$('.content h1').css("top",Math.max(0, 500-
	$(this).scrollTop()));
	});


}


	
}); //this closes document ready funtion

