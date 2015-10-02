$(document).ready(function(){
	$('.fa-github').click(function(){window.location.href = 'https://github.com/npaul007'});
	$('.fa-envelope').click(function(){window.location.href='mailto:napp22@yahoo.com';});
	$('.fa-phone').click(function(){window.location.href='tel:203-820-5307'});
	$('.resume-button').click(function(){window.location.href = 'files/Resume.docx'});
	$('#pong-button').click(function(){window.location.href ='http://unipong.meteor.com'});

	var aboutme = $('#aboutme-modal');
	var skills = $('#skills-modal');
	var contact = $('#contact-modal');
	var projects = $('#projects-modal');
	var education = $('#education-modal');
	var employment = $('#employment-modal');

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

	employment.click(function() {
	  $("html, body").animate({ scrollTop:$("#employment").offset().top-45 }, "slow");
	  closeModal();
	  return false;
	});

	function closeModal(){
		$('#myModal').close();
	}

});


window.onload = function(){

	var ball = function(){
		this.x = [];
		this.y = [];
		this.r = [];
		this.xVel = [];
		this.yVel = [];
		this.animate = function(){
			for(var s = 0; s < 1000; s++){
				this.x[s]+=this.xVel[s];
				this.y[s]+=this.yVel[s];
			}
		}
		this.collision = function(){
			for(var c = 0; c<1000; c++){
				if(this.x[c] > 330){
					this.xVel[c] *= -1;
				}

				else if(this.x[c] < 0){
					this.xVel[c] *= -1;
				}

				else if(this.y[c] < 0){
					this.yVel[c] *= -1;
				}

				else if(this.y[c] > 150){
					this.yVel[c] *= -1;
				}
			}
		}
	}

	function setColor(ctx,color){
		ctx.fillStyle = color;
	}

	function getCanvas(){
		return document.getElementById('myCanvas');
	}

	function getContext(canvas){
		return canvas.getContext('2d');
	}

	function drawCircle(ctx,x,y,r){
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fill();
	}

	function clearCanvas(ctx){
		ctx.clearRect(0,0,1000,1000);
	}

	function generateRandom(min,max){
		return Math.floor(Math.random() * max) + min ;
	}

	setTimeout(actionPerformed,25);

	var ball = new ball();
	var numberOfBalls = 20;
	loadObject(ball,numberOfBalls);

	function loadObject(ball,numberOfBalls){
		for(var g=0; g<numberOfBalls; g++){
			if(
				ball.x[g]!=null 
				&& ball.y[g] !=null 
				&& ball.r[g] !=null 
				&& ball.xVel[g] !=null
				&& ball.yVel[g] !=null
			  ){
			   
			   }else{
			   		var x = generateRandom(1,250);
					var y = generateRandom(1,200);
					var r = generateRandom(1,10);
					var xVel = generateRandom(-1,1);
					var yVel = generateRandom(-1,1);
					ball.x[g] = x;;
					ball.y[g]=y;
					ball.r[g]=r;
					ball.xVel[g]=xVel;
					ball.yVel[g]=yVel;
			   }
		}
	}

	$('#plus').click(function(){
		numberOfBalls++;
		loadObject(ball,numberOfBalls);
	});

	$('#minus').click(function(){
		numberOfBalls--;
		loadObject(ball,numberOfBalls);
	});

	function actionPerformed(){

		var canvas = getCanvas();
		var ctx = getContext(canvas);

		clearCanvas(ctx);

		setColor(ctx,"white");

		for(var i = 0; i<numberOfBalls; i++){
			drawCircle(ctx,ball.x[i],ball.y[i],ball.r[i]);
		}

		ball.animate();
		ball.collision();

		setTimeout(actionPerformed,25)
		
	}


}

