$(document).ready(function(){
	/* gnb layout */
	$(".header").find(".btn-nav").click(function(){
	  $(this).parents(".top").next("nav").toggleClass("hide");
	  $(this).parents("#app").find(".wrap-content").toggleClass("wide");
	});	
	if ($("body").width() < 768 ){
		$(".header").children("nav").addClass("hide");
		$("#app").find(".wrap-content").addClass("wide");
	}

	/* gnb collpse */
	$(".depth2").hide();
	$(".nav > ul > .active").children(".depth2").show();

	$(".depth1").children(".depth2").parent("li").addClass("add-arr");
	$(".depth1.add-arr").children("a").click(function(){
		$(this).parent(".add-arr").toggleClass("active").children(".depth2").slideToggle(200);
	});

	//gnb
	$(".nav > ul > li:nth-child(1)").addClass("active");
	$(".top").find("li.menu1").text("홈");

});