$(document).ready(function(){

//selectbox
$(".inp-txt").children("select").focus(function(){
  $(this).parent().addClass("focus");
}).blur(function(){
  $(this).parent().removeClass("focus");
});

});