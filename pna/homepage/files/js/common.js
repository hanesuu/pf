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

//selectbox
$(function() {
	var selectTarget = $('.select select');
	// focus 가 되었을 때와 focus 를 잃었을 때
	selectTarget.on({
		'focus': function() {
			$(this).parent().addClass('focus');
		},
		'blur': function() {
		  $(this).parent().removeClass('focus');
		}
	});

	selectTarget.change(function(){
    var select_name = $(this).children('option:selected').text();
    $(this).siblings('label').text(select_name);
	});
});

//scroll-top
$(window).scroll(function(){
  if($(this).scrollTop() > 200){
    $(".top").fadeIn();
  } else {
    $(".top").fadeOut();
  }
});
$(".top").click(function(){
  $('html, body').animate({scrollTop:0},400);
  return false;
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
 $(".h-index").children("#header").find("li:nth-child(1)").addClass("active");
 $(".h-api").children("#header").find("li:nth-child(2)").addClass("active");
 $(".h-sell").children("#header").find("li:nth-child(3)").addClass("active");
 $(".h-calc").children("#header").find("li:nth-child(4)").addClass("active");
 $(".h-help").children("#header").find("li:nth-child(5)").addClass("active");

});

//레이어팝업
function fnShowPop(sGetName){
    var $layer = $("#"+ sGetName);
    $layer.addClass("on");

    $("html, body").css({"overflow":"hidden", "height":"100%"});
    /* 팝업 최상단 부모 터치 막기 */
    $(".pop-layer.on").bind("touchmove", function(e) {
        e.preventDefault();
    });
    /* 팝업 컨텐츠 부분 터치 이벤트가 확산 방지 */
    $(".wrap-pop").bind("touchmove", function(e) {
        e.stopPropagation();
    })

}
function fnHidePop(sGetName){
    $("#"+ sGetName).removeClass("on");

    $("html, body").css({"overflow":"auto", "height":"auto"});
    $('.pop-layer').unbind('touchmove');
}