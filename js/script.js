$(document).ready(function(){
	$('.educationdiv').hide();
	$('.ehdiv').hide();

	$('.skills').click(function(){
		fadeToggle('.skills');
		fadeToNone('.educationdiv');
		fadeToNone('.employmenthistorydiv');
		fadeToNone('.ehdiv');
		fadeToSomething('.skillsdiv')
		$('.divcontainer').css('background-color','#336699');
	});

	$('.education').click(function(){
		fadeToggle('.education');
		fadeToNone('.skillsdiv');
		fadeToNone('.ehdiv');
		$('.educationdiv').show();
		fadeToSomething('.educationdiv');
		$('.divcontainer').css('background-color','#334D66');
	});

	$('.employmenthistory').click(function(){
		fadeToggle('.employmenthistory');
		fadeToNone('.educationdiv');
		fadeToNone('.skillsdiv')
		$('.ehdiv').show();
		fadeToSomething('.ehdiv');
		$('.divcontainer').css('background-color','#7575D1');
	});
});

function fadeToggle(className){
	$(className).fadeTo('fast',.3);
	$(className).fadeTo('fast',1);
}

function fadeToNone(className){
	$(className).fadeTo('fast',0);
}

function fadeToSomething(className){
	$(className).fadeTo('fast',1);
}


