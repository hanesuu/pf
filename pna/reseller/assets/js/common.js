$(document).ready(function(){
	/* gnb layout */
	$(window).on('resize', function(e) {
		$(".header").find(".btn-nav").click(function(){
		  $(this).parents(".top").next("nav").toggleClass("hide");
		  $(this).parents("#app").find(".wrap-content").toggleClass("wide");
		});	
		if ($("body").width() < 768 ){
			$(".header").children("nav").addClass("hide");
			$("#app").find(".wrap-content").addClass("wide");
		}
	});

	/* gnb collpse */
	$(".depth2").hide();

	$(".depth1").children(".depth2").parent("li").addClass("add-arr");
	$(".depth1.add-arr").children("a").click(function(){
		$(this).parent(".add-arr").toggleClass("active").children(".depth2").slideToggle(200);
	});

	/* gnb each */
	//홈
	$(".mj1").find(".nav > ul > li:nth-child(1)").addClass("active").children(".depth2").show();
	$(".mj1").find(".top").children(".location").children(".menu1").text("홈").next().hide();

	//리셀러 관리
	$(".mj2").find(".nav > ul > li:nth-child(2)").addClass("active").children(".depth2").show();
	$(".mj2").find(".top").children(".location").children(".menu1").text("리셀러 관리").next().hide();
	$(".mj2-1").find(".nav > ul > li:nth-child(2)").addClass("active").children(".depth2").show();
	$(".mj2-1").find(".top").children(".location").children(".menu1").text("리셀러 관리");
	$(".mj2-1").find(".top").children(".location").children(".menu2").text("리셀러 등록");
    $(".mj2-1.detail").find(".nav > ul > li:nth-child(2)").addClass("active").children(".depth2").show();
    $(".mj2-1.detail").find(".top").children(".location").children(".menu1").text("리셀러 관리");
    $(".mj2-1.detail").find(".top").children(".location").children(".menu2").text("개별 리셀러 관리");

	//결제 관리
    $(".mj3-1").find(".nav > ul > li:nth-child(3)").addClass("active").children(".depth2").show().children("li:nth-child(1)").addClass("active");
    $(".mj3-1").find(".top").children(".location").children(".menu1").text("결제 관리");
    $(".mj3-1").find(".top").children(".location").children(".menu2").text("결제 관리 종합현황");
    $(".mj3-1.detail").find(".nav > ul > li:nth-child(3)").addClass("active").children(".depth2").show().children("li:nth-child(1)").addClass("active");
    $(".mj3-1.detail").find(".top").children(".location").children(".menu1").text("결제 관리");
    $(".mj3-1.detail").find(".top").children(".location").children(".menu2").text("판매점 관리");

    $(".mj3-2").find(".nav > ul > li:nth-child(3)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
    $(".mj3-2").find(".top").children(".location").children(".menu1").text("결제 통계").next().hide();

    $(".mj3-3").find(".nav > ul > li:nth-child(3)").addClass("active").children(".depth2").show().children("li:nth-child(1)").addClass("active");
    $(".mj3-3").find(".top").children(".location").children(".menu1").text("판매점 등록").next().hide();

	//유료 API 관리
    $(".mj4-1").find(".nav > ul > li:nth-child(4)").addClass("active").children(".depth2").show().children("li:nth-child(1)").addClass("active");
    $(".mj4-1").find(".top").children(".location").children(".menu1").text("유료 API 관리");
    $(".mj4-1").find(".top").children(".location").children(".menu2").text("유료 API 종합현황");

    $(".mj4-2").find(".nav > ul > li:nth-child(4)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
    $(".mj4-2").find(".top").children(".location").children(".menu1").text("유료 API 관리");
    $(".mj4-2").find(".top").children(".location").children(".menu2").text("연동통계");

    //이용안내
    $(".mj5-1").find(".nav > ul > li:nth-child(5)").addClass("active").children(".depth2").show().children("li:nth-child(1)").addClass("active");
    $(".mj5-1").find(".top").children(".location").children(".menu1").text("이용안내");
    $(".mj5-1").find(".top").children(".location").children(".menu2").text("이용 가능 API");

    $(".mj5-2").find(".nav > ul > li:nth-child(5)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
    $(".mj5-2").find(".top").children(".location").children(".menu1").text("이용안내");
    $(".mj5-2").find(".top").children(".location").children(".menu2").text("후불계약 안내");

    //고객센터
	$(".mj6").find(".nav > ul > li:nth-child(6)").addClass("active").children(".depth2").show();
	$(".mj6").find(".top").children(".location").children(".menu1").text("고객센터").next().hide();

    //설정
	$(".mj7").find(".nav > ul > li:nth-child(7)").addClass("active").children(".depth2").show();
	$(".mj7").find(".top").children(".location").children(".menu1").text("설정").next().hide();

});