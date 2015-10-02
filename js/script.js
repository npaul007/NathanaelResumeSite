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

	var ball = function(x,y,r,xVel,yVel){
		this.x = x;
		this.y = y;
		this.r = r;
		this.xVel = xVel;
		this.yVel = yVel;
		this.animate = function(){
			this.x+=this.xVel;
			this.y+=this.yVel;
		}
		this.collision = function(){
			if(this.x > 330){
				this.xVel *= -1;
			}

			else if(this.x < 0){
				this.xVel *= -1;
			}

			else if(this.y < 0){
				this.yVel *= -1;
			}

			else if(this.y > 150){
				this.yVel *= -1;
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

	setTimeout(actionPerformed,25);

	var ball = new ball(100,100,10,2,2);

	function actionPerformed(){
		var canvas = getCanvas();
		var ctx = getContext(canvas);

		clearCanvas(ctx);

		setColor(ctx,"white");
		drawCircle(ctx,ball.x,ball.y,ball.r);

		ball.animate();
		ball.collision();

		setTimeout(actionPerformed,25)
		
	}


}

