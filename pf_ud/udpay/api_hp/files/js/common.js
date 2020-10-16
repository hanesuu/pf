$(document).ready(function(){

$(window).scroll(function() {

  // tabmenu fixed
  var tabscroll = $(window).scrollTop();
  if (tabscroll >= 300) {
    $('.tab-menu').addClass('fixed');
    $('.tab-menu').next().addClass('area');
  } else {
    $('.tab-menu').removeClass('fixed');
    $('.tab-menu').next().removeClass('area');
  }


  //scroll-top
  if($(this).scrollTop() > 200){
    $(".top").fadeIn();
  } else {
    $(".top").fadeOut();
  }
});


//scroll-top
$(".top").click(function(){
  $('html, body').animate({scrollTop:0},400);
  return false;
});

// family site select
$(".btn-site").click(function(){
  $(this).toggleClass("on");
  $(this).next().slideToggle(200);
});

});