$(document).ready(function() {
    //m-gnb
    $(".btn-m-gnb").click(function(){
      $(this).next("nav").animate({right:"0"},350);
      $(this).siblings(".bg-dim").addClass("on");
    });
    $(".btn-m-close, .bg-dim").click(function(){
      $(".m-gnb nav").animate({right:"-200px"},350);
      $(".bg-dim").removeClass("on");
    });

    //탭    
    $(".tab-content").hide();
    $(".tab-content:first").show();
    $(".nav-tabs li").click(function () {
        $(".nav-tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
});