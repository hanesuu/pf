$(document).ready(function(){
	// mouse
	$(document).mousemove(function(e){
	  $('.mouse').css("top", e.pageY);
	  $('.mouse').css("left", e.pageX);
	});
	$('a').mouseover(function(){
		$('.mouse').css({transform: "scale(1.5)"});
	}).mouseout(function(){
		$('.mouse').css({transform: "inherit"});
	});

});