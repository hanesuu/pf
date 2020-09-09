$(document).ready(function(){
	//헤더
	$("header").find(".btn-gnb").click(function(){
		$(this).next("nav").animate({right:"0"},350);
		$(this).siblings(".bg-dim").addClass("on");
	});
	$(".btn-close, .bg-dim").click(function(){
		$("nav").animate({right:"-310px"},350);
		$("nav").next(".bg-dim").removeClass("on");
	});

	//최근주문내역
	$(".recent-order").children(".con-order").hide();
	$(".recent-order").children(".tit-recent").click(function(){
		$(this).next(".con-order").slideToggle();
	});
	$(".recent-order").children(".con-order").find("dt.tit").click(function(){
		$(this).parents(".con-order").slideToggle();
	});


	//파일
	var fileTarget = $('.filebox .upload-hidden'); 
	fileTarget.on('change', function(){ 
 	if(window.FileReader){ 
 		var filename = $(this)[0].files[0].name; } 
 	else { 
 		filename = $(this).val().split('/').pop().split('\\').pop(); 
 	} 
 		$(this).siblings('.upload-name').val(filename); 
 	}); 
}); 




