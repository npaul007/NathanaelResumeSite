$(document).ready(function(){

	/* contact.click(function(e) {
	  $("html, body").animate({ scrollTop:$("#contact").offset().top-45 }, "slow");
	  closeModal();
	  return false;
	}); */
	
	var windowWidth = $(window).width();

	if (windowWidth > 1000) {
		$('#myPicture').addClass('animated');
		$('#myName').addClass('animated');
		$('#myQuote').addClass('animated');
	}

	var sectionsAnimated = [
		'#aboutMe',
		'#educationExperience'
	];

	for(var j = 0; j < sectionsAnimated.length; j++)
		$(sectionsAnimated[j]).hide();

	$(window).scroll(function(){
		for(var i = 0; i < sectionsAnimated.length+1; i++){
			if(ifSeenOnScreen(sectionsAnimated[i])){
				$(sectionsAnimated[i]).show();
				$(sectionsAnimated[i]+" *").addClass('animated');
			}
		}
	});

});

function ifSeenOnScreen(el) {
   var docViewTop = $(window).scrollTop(),
       docViewBottom = docViewTop + $(window).height(),
       elemTop = $(el).offset().top,
       elemBottom = elemTop + $(el).height();
 
   return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}
 
