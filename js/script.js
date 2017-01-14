$(document).ready(function(){
	//hide menu on pageload
	hideMenu();

	$('#menuButton, #sideBarMenu>#sideBarMenuContents>a').click(function(){
		menuButtonIconStatus();
	});

	// if menu is open and you click outside of it, close it
	$('html').click(function(e){
		if(e.target.id != 'menuButton' || e.target.id != 'sideBarMenu>#sideBarMenuContents>a' && menuIsOpen())
			hideMenu();
	});
});

// check to see if menu is open or not based on icon
function menuButtonIconStatus(){
	if(menuIsOpen()){
		showMenu();
	}else{
		hideMenu();
	}
}

function showMenu(){
	// if closed show x
	$('#menuButton').removeClass('fa-bars');
	$('#menuButton').addClass('fa-times');

	$('#sideBarMenu').show();
}

function hideMenu(){
	// if open show bars
	$('#menuButton').removeClass('fa-times');
	$('#menuButton').addClass('fa-bars');

	$('#sideBarMenu').hide();
}

function menuIsOpen(){
	return $('#menuButton').hasClass('fa-bars');
}