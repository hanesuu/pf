$(document).ready(function(){
	/* gnb layout */
	$(".header").find(".btn-nav").click(function(){
		$(this).parents(".top").next("nav").toggleClass("hide");
		$(this).parents("#app").find(".wrap-content").toggleClass("wide");
		$(this).parents("#app").find(".footer").toggleClass("wide");
		$(this).parents("#app").find(".topbar").toggleClass("wide");
	});	

	//반응형
	if ($("body").width() < 768 ){
		$(".header").children("nav").addClass("hide");
		$("#app").find(".wrap-content").addClass("wide");
		$("#app").find(".footer").addClass("wide");
		$("#app").find(".topbar").addClass("wide");
	}
	$(window).resize(function (){		
		if ($("body").width() < 768 ){
			$(".header").children("nav").addClass("hide");
			$("#app").find(".wrap-content").addClass("wide");
			$("#app").find(".footer").addClass("wide");
			$("#app").find(".topbar").addClass("wide");
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
	$(".mj2").find(".nav > ul > li:nth-child(2)").addClass("active").children(".depth2").show().children("li:first-child").addClass("active");
	$(".mj2").find(".top").children(".location").children(".menu1").text("리셀러 관리").next().hide();
	$(".mj2-1").find(".nav > ul > li:nth-child(2)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
	$(".mj2-1").find(".top").children(".location").children(".menu1").text("리셀러 관리");
	$(".mj2-1").find(".top").children(".location").children(".menu2").text("리셀러 등록");

	//판매점 관리
	$(".mjstore").find(".nav > ul > li:nth-child(3)").addClass("active").children(".depth2").show().children("li:first-child").addClass("active");
	$(".mjstore").find(".top").children(".location").children(".menu1").text("판매점 관리").next().hide();
	$(".mjstore-1").find(".nav > ul > li:nth-child(3)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
	$(".mjstore-1").find(".top").children(".location").children(".menu1").text("판매점 관리");
	$(".mjstore-1").find(".top").children(".location").children(".menu2").text("판매점 등록");
	$(".mjstore-2").find(".nav > ul > li:nth-child(3)").addClass("active").children(".depth2").show().children("li:first-child").addClass("active");
	$(".mjstore-2").find(".top").children(".location").children(".menu1").text("판매점 관리");
	$(".mjstore-2").find(".top").children(".location").children(".menu2").text("판매점 상세");

	//결제 관리
	$(".mj3").find(".nav > ul > li:nth-child(4)").addClass("active");
	$(".mj3").find(".top").children(".location").children(".menu1").text("결제 관리");
	$(".mj3").find(".top").children(".location").children(".menu2").text("결제 현황");

	//유료 API 관리
	$(".mjapi").find(".nav > ul > li:nth-child(5)").addClass("active");
	$(".mjapi").find(".top").children(".location").children(".menu1").text("유료 API 관리");
	$(".mjapi").find(".top").children(".location").children(".menu2").text("유료 API 현황");

	//정산 관리	
	$(".mjadjust").find(".nav > ul > li:nth-child(6)").addClass("active").children(".depth2").show().children("li:first-child").addClass("active");
	$(".mjadjust").find(".top").children(".location").children(".menu1").text("정산 관리");
	$(".mjadjust").find(".top").children(".location").children(".menu2").text("결제 마진 정산");
	$(".mjadjust-1").find(".nav > ul > li:nth-child(6)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
	$(".mjadjust-1").find(".top").children(".location").children(".menu1").text("정산 관리");
	$(".mjadjust-1").find(".top").children(".location").children(".menu2").text("API 마진 정산");

    //설정
    $(".mj7-1").find(".nav > ul > li:nth-child(7)").addClass("active").children(".depth2").show().children("li:first-child").addClass("active");
    $(".mj7-1").find(".top").children(".location").children(".menu1").text("설정");
    $(".mj7-1").find(".top").children(".location").children(".menu2").text("계정정보");
    $(".mj7-2").find(".nav > ul > li:nth-child(7)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
    $(".mj7-2").find(".top").children(".location").children(".menu1").text("설정");
    $(".mj7-2").find(".top").children(".location").children(".menu2").text("비밀번호 변경");

    //고객센터
    $(".mj6-1").find(".nav > ul > li:nth-child(8)").addClass("active").children(".depth2").show().children("li:first-child").addClass("active");
    $(".mj6-1").find(".top").children(".location").children(".menu1").text("고객센터");
    $(".mj6-1").find(".top").children(".location").children(".menu2").text("공지사항");
    $(".mj6-2").find(".nav > ul > li:nth-child(8)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
    $(".mj6-2").find(".top").children(".location").children(".menu1").text("고객센터");
    $(".mj6-2").find(".top").children(".location").children(".menu2").text("자주 묻는 질문");
    $(".mj6-3").find(".nav > ul > li:nth-child(8)").addClass("active").children(".depth2").show().children("li:nth-child(3)").addClass("active");
    $(".mj6-3").find(".top").children(".location").children(".menu1").text("고객센터");
    $(".mj6-3").find(".top").children(".location").children(".menu2").text("문의내역");

    $(".mj6-4").find(".nav > ul > li:nth-child(8)").addClass("active").children(".depth2").show().children("li:nth-child(4)").addClass("active");
    $(".mj6-4").find(".top").children(".location").children(".menu1").text("고객센터");
    $(".mj6-4").find(".top").children(".location").children(".menu2").text("문의하기");

    /* 체크박스 전체선택 */
    $("#checkAll").click(function(){
        //클릭되었으면
        if($("#checkAll").prop("checked")){
            //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 true로 정의
            $("input[name=chk]").prop("checked",true);
            //클릭이 안되있으면
          }else{
            //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 false로 정의
            $("input[name=chk]").prop("checked",false);
          }
        });

    /* 판매점 목록 sticky layout */
    $(".bx-right").children(".bx-basic").hide();
    $(".bx-right").find("#btnClose").click(function(){
    	$(".board").removeClass("active");
    	$(".board").find("tr").removeClass("checked");
    	$(this).parent().parent(".bx-basic").fadeOut();
    });
    //정산서류제출
    $("#btnAdjust").click(function(){
    	$(".bx-right").children(".bx-basic").hide();
    	$(this).parents(".tbl-xs").parent().parent().toggleClass("checked");
    	$(this).parents(".board").toggleClass("active");
    	$(".bx-right").children("#bxAdjust").show();
    });
  });