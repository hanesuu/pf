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


// include
 window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
}); 