$(document).ready(function(){
	$('.fa-github').click(function(){window.location.href = 'https://github.com/npaul007'});
	$('.fa-envelope').click(function(){window.location.href='mailto:napp22@yahoo.com';});
	$('.resume-button').click(function(){window.location.href = 'files/Resume.docx'});
	$('#pong-button').click(function(){window.location.href ='http://unipong.meteor.com'});

	var aboutme = $('#aboutme-modal');
	var skills = $('#skills-modal');
	var contact = $('#contact-modal');
	var projects = $('#projects-modal');
	var education = $('#education-modal');

	contact.click(function(e) {
	  $("html, body").animate({ scrollTop:$("#contact").offset().top-45 }, "slow");
	  closeModal();
	  return false;
	});

	skills.click(function() {
	  $("html, body").animate({ scrollTop:$("#skills").offset().top-45 }, "slow");
	  closeModal();
	  return false;
	});

	projects.click(function() {
	  $("html, body").animate({ scrollTop:$("#projects").offset().top-45 }, "slow");
	  closeModal();
	  return false;
	});

	aboutme.click(function() {
	  $("html, body").animate({ scrollTop:$("#aboutme").offset().top-45 }, "slow");
	  closeModal();
	  return false;
	});

	education.click(function() {
	  $("html, body").animate({ scrollTop:$("#education").offset().top-45 }, "slow");
	  closeModal();
	  return false;
	});



	function scrollTo(div){
	  $("html, body").animate({ scrollTop:$("#aboutme").offset().top-45 }, "slow");
	  closeModal();
	  return false;
	}

	function closeModal(){
		$('#myModal').close();
	}

});