$(document).ready(function(){
	//hide menu on pageload
	hideMenu();

	$('#menuButton, #sideBarMenu>#sideBarMenuContents>a').click(function(){
		menuButtonIconStatus();
	});

	// if menu is open and you click outside of it, close it
	$('html').click(function(e){
		if(e.target.id != 'menuButton' && 
			e.target.id != 'sideBarMenu' && 
			e.target.id != 'sideBarMenu>#sideBarMenuContents' && 
			menuIsOpen() ||
			e.target.id.length == 0)

			hideMenu();
;	});
});

// loading screen logic
window.addEventListener("load",function(){
	setTimeout(function(){
		//$('#loadingScreen').css('display','none');
		$('#wrapper').css('display','block');
		$('#wrapper').addClass('fadeIn animated');
	},400);
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

	$('#sideBarMenu').removeClass('slideOutRight');

	$('#sideBarMenu').show();

	$('#sideBarMenu').addClass('slideInRight animated');
}

function hideMenu(){
	// if open show bars
	$('#menuButton').removeClass('fa-times');
	$('#menuButton').addClass('fa-bars');

	$('#sideBarMenu').addClass('slideOutRight');

	setTimeout(function(){
		$('#sideBarMenu').hide();
	},500);
}

// if menu is open return true
function menuIsOpen(){
	return $('#menuButton').hasClass('fa-bars');
}