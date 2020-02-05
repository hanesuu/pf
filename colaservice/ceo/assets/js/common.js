$(document).ready(function(){
	/* gnb */
	$(".depth1 .col-xs-2").mouseover(function(){
	  $(this).siblings().children(".depth2").hide();
	  $(this).children(".depth2").show();
	});
	$(".depth1 .col-xs-2").mouseout(function(){
	  $(this).siblings(".active").children(".depth2").show();
	});

	/* 게시판 체크박스 */
	$(".board-list tbody").find(".inp-check").click(function(){
		var checkedTr = $(this).parent().parent();
		checkedTr.removeClass("checked");
		if ($(this).children("input").is(":checked")) {
			checkedTr.addClass("checked");
		}
	});

	/* gnb each */
	//상점관리
	$(".h-info").find(".menu-store").addClass("active").children(".depth2").children("li:nth-child(1)").addClass("active");

	//문자발송
	$(".h-edit").find(".menu-ams").addClass("active").children(".depth2").children("li:nth-child(1)").addClass("active");
	$(".h-smsedit").find(".menu-ams").addClass("active").children(".depth2").children("li:nth-child(2)").addClass("active");
	$(".h-smsset").find(".menu-ams").addClass("active").children(".depth2").children("li:nth-child(3)").addClass("active");
	$(".h-sendlist").find(".menu-ams").addClass("active").children(".depth2").children("li:nth-child(4)").addClass("active");
	$(".h-smsblock").find(".menu-ams").addClass("active").children(".depth2").children("li:nth-child(5)").addClass("active");
	$(".h-smscharge").find(".menu-ams").addClass("active").children(".depth2").children("li:nth-child(6)").addClass("active");

	//고객관리
	$(".h-manage").find(".menu-customer").addClass("active").children(".depth2").children("li:nth-child(1)").addClass("active");
	$(".h-excel").find(".menu-customer").addClass("active").children(".depth2").children("li:nth-child(2)").addClass("active");
	$(".h-group").find(".menu-customer").addClass("active").children(".depth2").children("li:nth-child(3)").addClass("active");

	//이용안내
	$(".h-bd").find(".menu-board").addClass("active").children(".depth2").children("li:nth-child(1)").addClass("active");
	$(".h-faq").find(".menu-board").addClass("active").children(".depth2").children("li:nth-child(2)").addClass("active");
	$(".h-qna").find(".menu-board").addClass("active").children(".depth2").children("li:nth-child(3)").addClass("active");
	
	//마이페이지
	$(".h-my").find(".menu-mypage").addClass("active").children(".depth2").children("li:nth-child(1)").addClass("active");
	$(".h-pay").find(".menu-mypage").addClass("active").children(".depth2").children("li:nth-child(2)").addClass("active");
});