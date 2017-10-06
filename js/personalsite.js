$(document).ready(function(){
	$(window).on('load', function(){
	   $('.type-it').typeIt({
	        strings: ["Hello, I'm Chris. Thank you for visiting my website!"]
	    });
	});

	$('#circle-aboutme-hover').hover(function(){
		$('#circle-text-aboutme').show();
		$('#circle-aboutme').css('background','#6fffe9');
	}, function(){
		$('#circle-text-aboutme').hide();
		$('#circle-aboutme').css('background','none');
	});

	$('#circle-experience-hover').hover(function(){
		$('#circle-text-experience').show();
		$('#circle-experience').css('background','#6fffe9');
	}, function(){
		$('#circle-text-experience').hide();
		$('#circle-experience').css('background','none');
	});

	$('#circle-projects-hover').hover(function(){
		$('#circle-text-projects').show();
		$('#circle-projects').css('background','#6fffe9');
	}, function(){
		$('#circle-text-projects').hide();
		$('#circle-projects').css('background','none');
	});

	$('#circle-skills-hover').hover(function(){
		$('#circle-text-skills').show();
		$('#circle-skills').css('background','#6fffe9');
	}, function(){
		$('#circle-text-skills').hide();
		$('#circle-skills').css('background','none');
	});

	$('#circle-contactme-hover').hover(function(){
		$('#circle-text-contactme').show();
		$('#circle-contactme').css('background','#6fffe9');
	}, function(){
		$('#circle-text-contactme').hide();
		$('#circle-contactme').css('background','none');
	});

	$('#intro-arrow').hover(function(){
		$('#arrow-see-more').show();
	}, function(){
		$('#arrow-see-more').hide();
	});

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});	


})


