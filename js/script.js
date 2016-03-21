$(document).ready(function(){
	$('#sideBarMenu').hide();

	$('#menuButton').click(function(){
		$('#sideBarMenu').slideToggle();
		menuButtonIconStatus();
	});

	$('#sideBarMenuContents').click(function(){
		$('#sideBarMenu').slideToggle();
		menuButtonIconStatus();
	});
});

function menuButtonIconStatus(){
	if($('#menuButton').hasClass('fa-bars')){
		$('#menuButton').removeClass('fa-bars');
		$('#menuButton').addClass('fa-times');
	}

	else{
		$('#menuButton').removeClass('fa-times');
		$('#menuButton').addClass('fa-bars');
	}
}