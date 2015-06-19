$(document).ready(function(){
	var contact = $('#contact');
	var education = $("#education");
	var skills = $('#skills');

	contact.click(function(e) {
	  $("html, body").animate({ scrollTop:375 }, "slow");
	  return false;
	});

	education.click(function() {
	  $("html, body").animate({ scrollTop:860 }, "slow");
	  return false;
	});

	skills.click(function() {
	  $("html, body").animate({ scrollTop:1024 }, "slow");
	  return false;
	});
	
});