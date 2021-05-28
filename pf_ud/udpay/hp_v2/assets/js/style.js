$(document).ready(function(){

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