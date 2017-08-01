$(document).ready(function() {
	$(".section").hide();

/* Toggle Buttons*/
/* About Me Section*/
	$("#aboutme").click(function(){
		$("#aboutmecontent").toggle();
	});

/* Experience Section*/
	$("#experience").click(function(){
		$("#experiencecontent").toggle();
	});

/* Education Section*/
	$("#education").click(function(){
		$("#educationcontent").toggle();
	});

/* Skills and Course Work Section*/
	$("#skills").click(function(){
		$("#skillscontent").toggle();
	});



});