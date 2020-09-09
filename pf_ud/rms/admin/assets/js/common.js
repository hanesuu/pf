$(document).ready(function(){
	/* mode */
	$(".theme-mode").children().click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");

		if($(".theme-mode").children(".theme-mode--dark").hasClass("active")){
			$("body").addClass("theme-dark");
		}else{
			$("body").removeClass("theme-dark");
		}
	});




	/* search collapse */
	$(".search__btns").children(".btn-collapse").click(function(){
		$(this).toggleClass("active");
		$(this).parent().prev(".search__detail").toggleClass("active").slideToggle(300);
	});

	// /* 체크박스 전체선택 */
	// $("#checkAll").click(function(){
	// 	//클릭되었으면
	// 	if($("#checkAll").prop("checked")){
	// 		//input태그의 name이 chk인 태그들을 찾아서 checked옵션을 true로 정의
	// 		$("input[name=chk]").prop("checked",true);
	// 		//클릭이 안되있으면
	// 	}else{
	// 		//input태그의 name이 chk인 태그들을 찾아서 checked옵션을 false로 정의
	// 		$("input[name=chk]").prop("checked",false);
	// 	}
	// });
});