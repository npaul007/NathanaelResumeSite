$(document).ready(function(){
	var contact = $('#contact');
	var education = $("#education");
	var skills = $('#skills');

	contact.click(function(e) {
	  $("html, body").animate({ scrollTop:$("#row2").offset().top }, "slow");
	  return false;
	});

	education.click(function() {
	  $("html, body").animate({ scrollTop:$("#row3").offset().top }, "slow");
	  return false;
	});

	skills.click(function() {
	  $("html, body").animate({ scrollTop:$("#row4").offset().top }, "slow");
	  return false;
	});

	$('.navbar-toggle').click(function(){
		$('#myNavbar').slideToggle('fast');
	});
	
	if ($(window).width() > 480) {
    	$(".collapse").collapse('show');   
  	}
});