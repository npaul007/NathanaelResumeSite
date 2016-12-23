$(document).ready(function(){
	$('#sideBarMenu').hide();

	$('#menuButton').click(function(){
		menuButtonIconStatus();
	});

	$('#sideBarMenu').click(function(){
		menuButtonIconStatus();
	});
});

function menuButtonIconStatus(){
	if($('#menuButton').hasClass('fa-bars')){
		$('#menuButton').removeClass('fa-bars');
		$('#menuButton').addClass('fa-times');
		$('#sideBarMenu').show();
	}

	else{
		$('#menuButton').removeClass('fa-times');
		$('#menuButton').addClass('fa-bars');
		$('#sideBarMenu').hide();
	}
}