$(document).ready(function(){
	$('.fa-github').click(function(){window.location.href = 'https://github.com/npaul007'});
	$('.fa-envelope').click(function(){window.location.href='mailto:napp22@yahoo.com';});
	$('.resume-button').click(function(){window.location.href = 'files/Resume.docx'});
	$('#pong-button').click(function(){window.location.href ='http://unipong.meteor.com'});

	var aboutme = $('#caboutme-modal');
	var skills = $('#skills-modal');
	var contact = $('#contact-modal');
	var projects = $('#projects-modal');

	contact.click(function(e) {
	  $("html, body").animate({ scrollTop:$("contact").offset().top }, "slow");
	  return false;
	});

	skills.click(function() {
	  $("html, body").animate({ scrollTop:$("#skulls").offset().top }, "slow");
	  return false;
	});

	projects.click(function() {
	  $("html, body").animate({ scrollTop:$("#projects").offset().top }, "slow");
	  return false;
	});

	aboutme.click(function() {
	  $("html, body").animate({ scrollTop:$("#aboutme").offset().top }, "slow");
	  return false;
	});

});