$(document).ready(function(){
	//hide menu on pageload
	hideMenu();

	$('#menuButton, #sideBarMenu>#sideBarMenuContents>a').click(function(){
		menuButtonIconStatus();
	});

	// if menu is open and you click outside of it, close it
	$('.excluded').click(function(){
		hideMenu();
	});
});

// loading screen logic
window.addEventListener("load",function(){
	setTimeout(function(){
		$('#loadingScreen').addClass('hidden');
		$('#wrapper').removeClass('hidden');
		$('body').addClass('fadeIn animated');
	},1000);
});

// check to see if menu is open or not based on icon
function menuButtonIconStatus(){
	(menuIsOpen()) ? showMenu() : hideMenu();
}

function showMenu(){
	// if closed show x
	$('#menuButton').removeClass('fa-bars').addClass('fa-times');
	$('#sideBarMenu').removeClass('slideOutRight').show().addClass('slideInRight animated');
}

function hideMenu(){
	// if open show bars
	$('#menuButton').removeClass('fa-times').addClass('fa-bars');

	$('#sideBarMenu').addClass('slideOutRight');

	setTimeout(function(){
		$('#sideBarMenu').fadeOut();
	},500);
}

// if menu is open return true
function menuIsOpen(){
	return $('#menuButton').hasClass('fa-bars');
}