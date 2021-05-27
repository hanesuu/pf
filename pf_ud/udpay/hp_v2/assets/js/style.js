$(document).ready(function() {
    // show lnb depend on the page parameter
    var now = $(location).attr("href");

    if (now.split("localhost:9005")[1] ==="/" || now.split("udpay.co.kr")[1] === "/" ) {
        $("#top-banner").stop().show();
        $(".quick-menu").stop().hide();
    } else{
        $("#top-banner").stop().hide();
        $(".quick-menu").stop().show();
    }
});





$(document).ready(function(){

    // 탭 메뉴 상단에 고정
    $(".subPage-tabMenu").removeClass('fixed-tab');
    var offset = ($(".subPage-tabMenu").offset() || { "top": NaN }).top;

    $(window).scroll(function(){
        if($(this).scrollTop() > offset) {
            $(".subPage-tabMenu").addClass('fixed-tab');
        } else {
            $(".subPage-tabMenu").removeClass('fixed-tab');
        }
    });

    // 상단 이벤트배너 하나 이상일 때, 슬라이더 실행
    // if( $('.banner-slider .banner-item').length > 1 ){
    //     $('.banner-slider').slick({
    //         infinite: true,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 6000,
    //         speed: 300,
    //         centerMode: true,
    //         focusOnSelect: true,
    //         prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><i class="ri-arrow-left-s-line"></i></button>',
    //         nextArrow: '<button type="button" class="slick-next" aria-label="Next"><i class="ri-arrow-right-s-line"></i></button>'
    //     });
    // }

    // 모바일 디바이스에서 햄버거 메뉴 보이기
    if ( $(window).width() < 992 ) {
        $("#site-nav-action .menu").on("click", function(){
            $(this).toggleClass('open');
            $("#site-header").toggleClass('is-open-nav')
        });

        // 모바일에서 1차토글메뉴 클릭시 링크이동 바로 안되게 막기
        $('.nav-item.has-submenu > .nav-link').prop('href','javascript:void(0)');

        $('.nav-item.has-submenu > .nav-link').click(function(){
            $(this).next('.nav-sub-group').toggleClass('is-show');
            $('.nav-sub-group').not($(this).next('.nav-sub-group')).removeClass('is-show');
        });


    } else{
        // $('.nav-item.has-submenu').mouseenter(function(){
        //     $(' > .nav-sub-group', this).addClass('is-show');
        // });
        //
        // $('.nav-item.has-submenu').mouseleave(function(){
        //     $(' > .nav-sub-group', this).removeClass('is-show');
        // });

        $('.nav-item.has-submenu').on("mouseenter", function(){
            $(' > .nav-sub-group', this).addClass('is-show');
        });

        $('.nav-item.has-submenu').on("mouseleave", function(){
            $(' > .nav-sub-group', this).removeClass('is-show');
        });
    }


});






// 화면 리사이즈 이벤트
$(window).resize(function () {
    if ($(window).width() < 992) {
        $("#site-nav-action .menu").removeClass('open');

        if( $("#site-nav-action .menu").hasClass('open') ){
            $("#site-nav-action .menu").removeClass('open');
        }
        if( $("#site-nav").hasClass('is-opend') ){
            $("#site-nav").removeClass('is-opend');
        }
    }
});

// show dialog
// function fnShowPop(sGetName){
//     $("#"+ sGetName).addClass("on");
//     if($(window).width() < 768) {
//         $("html, body").css("overflow","hidden").css("height","100%");
//     }
// }
// // hide dialog
// function fnHidePop(sGetName){
//     $("#"+ sGetName).removeClass("on");
//     if($(window).width() < 768) {
//         $("html, body").css("overflow","auto").css("height","auto");
//     }
// }

// window popup for dual monitor
function popOpen() {
    var nWidth = "400";
    var nHeight = "689";
    var xPos = (document.body.clientWidth / 2) - (nWidth / 2);
    xPos += window.screenLeft;	 //듀얼 모니터
    var yPos = (screen.availHeight / 2) - (nHeight / 2);

    window.open("cardInfo","popOpen","width="+nWidth+",height="+nHeight+", left="+xPos+", top="+yPos+", toolbars=no, resizable=no, scrollbars=no");
}


// faq accodion list
$(document).ready(function() {
    var accItem = document.getElementsByClassName('faq-list-item');
    var accHD = document.getElementsByClassName('faq-list-item__question');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }

    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'faq-list-item is-inactive';
        }
        if (itemClass == 'faq-list-item is-inactive') {
            this.parentNode.className = 'faq-list-item is-active';
        }
    }
});



// scroll top button
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $(".scroll-top").fadeIn();
    } else {
        $(".scroll-top").fadeOut();
    }
});
$(".scroll-top").click(function(){
    $('html, body').animate({scrollTop:0},400);
    return false;
});