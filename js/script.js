$(document).ready(function(){
	$('#sideBarMenu').hide();

	$('#menuButton').click(function(){
		$('#sideBarMenu').toggle('slide');
		menuButtonIconStatus();
	});

	$('#sideBarMenuContents').click(function(){
		$('#sideBarMenu').toggle('slide');
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