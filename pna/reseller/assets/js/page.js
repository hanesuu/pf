$(document).ready(function(){
	alert("test");
	//gnb
	$(".nav > ul > li").addClass("active");
	$(".top").find("li.menu1").text("홈");

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