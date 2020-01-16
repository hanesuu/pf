alert("test");

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

	/* 게시판 오름차 내림차 */
	$(".board-list").find(".sort").toggle(function(){
		$(this).siblings().removeClass("dsc","asc");
		$(this).removeClass("asc").addClass("dsc");
	},function(){
		$(this).removeClass("dsc").addClass("asc");
	});
	
	/* 미리보기용 값들 */
	$(".wrap-chart-list").find(".edit").hide();
	$(".wrap-chart-list").children(".tbl-filter.index").find(".btn-line-b").click(function(){
		$(this).parent().parent(".index").hide().next(".edit").css("display","flex").next(".index").hide().next(".edit").show();
	});
	$(".wrap-chart-list").children(".tbl-filter.edit").find(".btn-line-b").click(function(){
		$(this).parent().parents(".edit").hide().prev(".index").css("display","flex").next().next(".index").show().next(".edit").hide();
	});

});