$(document).ready(function(){
	$(window).on('load', function(){
	   $('.type-it').typeIt({
	        strings: ["Hello, I'm Chris. Thank you for visiting my website!"]
	    });
	});

	$('#circle-aboutme-hover').mouseenter(function(){
		$('#circle-text-aboutme').show();
		$('#circle-aboutme').css('background','#6fffe9');
	}).mouseleave(function(){
		$('#circle-text-aboutme').hide();
		$('#circle-aboutme').css('background','none');
	});

	$('#circle-experience-hover').mouseenter(function(){
		$('#circle-text-experience').show();
		$('#circle-experience').css('background','#6fffe9');
	}).mouseleave(function(){
		$('#circle-text-experience').hide();
		$('#circle-experience').css('background','none');
	});

	$('#circle-projects-hover').mouseenter(function(){
		$('#circle-text-projects').show();
		$('#circle-projects').css('background','#6fffe9');
	}).mouseleave(function(){
		$('#circle-text-projects').hide();
		$('#circle-projects').css('background','none');
	});

	$('#circle-skills-hover').mouseenter(function(){
		$('#circle-text-skills').show();
		$('#circle-skills').css('background','#6fffe9');
	}).mouseleave(function(){
		$('#circle-text-skills').hide();
		$('#circle-skills').css('background','none');
	});

	$('#circle-contactme-hover').mouseenter(function(){
		$('#circle-text-contactme').show();
		$('#circle-contactme').css('background','#6fffe9');
	}).mouseleave(function(){
		$('#circle-text-contactme').hide();
		$('#circle-contactme').css('background','none');
	});



})


