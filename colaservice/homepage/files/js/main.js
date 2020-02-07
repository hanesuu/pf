$(document).ready(function(){

//메인슬라이드
$(".slide-main").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
});

//m-gnb
$(".btn-m-gnb").click(function(){
  $(this).next("nav").animate({right:"0"},350);
  $(this).siblings(".bg-dim").addClass("on");
});
$(".btn-m-close, .bg-dim").click(function(){
  $(".m-gnb nav").animate({right:"-200px"},350);
  $(".bg-dim").removeClass("on");
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

//탭메뉴
$(".tab_content").hide();
$(".tab_content:first").show();

$(".tab-type01 li").click(function () {
    $(".tab-type01 li").removeClass("active");
    $(this).addClass("active");
    $(".tab_content").hide()
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn()
});

//작은탭
$(".tab2_content").hide();
$(".tab2_content:first").show();
$(".tab-type02 li").click(function () {
    $(".tab-type02 li").removeClass("active");
    $(this).addClass("active");
    $(".tab2_content").hide()
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn()
});

//tab3-pc프로그램 가이드 슬라이드
$(".wrap-img-guide").slick({
  autoplay: false,
  dots: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true
});

//tab3-pc프로그램 슬라이드
$(".wrap-img-pc").slick({
  autoplay: false,
  dots: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true
});

//tab3-step2
$(window).scroll(function(){
  if($(this).scrollTop() > 300){
    $(".tab3 .img-ani").animate({left:"0",opacity:".7"},500);
  }
});

//collapse
$(".collapse-con").hide();
$(".collapse-tit").click(function(){
  $(this).toggleClass("active").next(".collapse-con").slideToggle(200);
});

});

//레이어팝업
function fnShowPop(sGetName){
    var $layer = $("#"+ sGetName);
    $layer.addClass("on");
}
function fnHidePop(sGetName){
    $("#"+ sGetName).removeClass("on");
}