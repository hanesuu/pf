$(document).ready(function(){
	/* 게시판 체크박스 */
	$(".board-list tbody").find(".inp-check").click(function(){
		var checkedTr = $(this).parent().parent();
		checkedTr.removeClass("checked");
		if ($(this).children("input").is(":checked")) {
			checkedTr.addClass("checked");
		}
	});
});