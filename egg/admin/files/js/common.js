$(document).ready(function(){
//header toggle
$(".page-logo").children("button").click(function(){
	$(this).parent().toggleClass("less");
	$(".gnb").toggleClass("less");
	$(".page-content").toggleClass("less");
	$(".nav-item").removeClass("open");
});

//gnb toggle
$(".gnb").children().children(".nav-item").click(function(){
	$(this).toggleClass("open");
});
//mobile gnb
$("header").children(".btn-m-gnb").click(function(){
	$(".gnb").slideToggle(200);
});

//selectbox
$(".inp-txt").children("select").focus(function(){
  $(this).parent().addClass("focus");
}).blur(function(){
  $(this).parent().removeClass("focus");
});

});