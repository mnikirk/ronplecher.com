$(document).ready(function(){
    $("#year").text((new Date).getFullYear());
});

$(".notactive").hover(function () {
    $(this).addClass("nav-bottom");
},
function () {
$(this).removeClass("nav-bottom");
});