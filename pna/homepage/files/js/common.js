$(document).ready(function(){

//m-gnb
$(".btn-m-gnb").click(function(){
  $(this).next("nav").animate({right:"0"},350);
  $(this).siblings(".bg-dim").addClass("on");
});
$(".btn-m-close, .bg-dim").click(function(){
  $(".m-gnb nav").animate({right:"-200px"},350);
  $(".bg-dim").removeClass("on");
});

//이용가능API 매뉴얼보기 포커스
$(".pg-api").find(".btn-sm").hover(function(){
	$(this).parent().toggleClass('hover');
});

//탭메뉴
$(".tab_content").hide();
$(".tab_content:first").show();

$(".wrap-tab li").click(function () {
    $(".wrap-tab li").removeClass("active");
    $(this).addClass("active");
    $(".tab_content").hide()
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).show()
});

//collapse
$(".con-collapse").hide();
$(".tit-collapse").click(function(){
  $(this).parent().toggleClass("active").children(".con-collapse").slideToggle(200);
});

//gnb
 // $(".h-index").children("#header").find("li:nth-child(1)").addClass("active");
 // $(".h-api").children("#header").find("li:nth-child(2)").addClass("active");
 // $(".h-sell").children("#header").find("li:nth-child(3)").addClass("active");
 // $(".h-calc").children("#header").find("li:nth-child(4)").addClass("active");
 // $(".h-help").children("#header").find("li:nth-child(5)").addClass("active");

});