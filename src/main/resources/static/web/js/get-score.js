$(document).ready(function() {
    $(".a-text").get(0).addEventListener('touchend', function(e) {
        window.location.href = "http://m.lyancoffee.com/wechat/lucky/929531/0";
    });

    $(".arrow").css("top",$(window).height()-30);
    $(".arrow").css("left",$(window).width()/2-10);
    $(".thanks").css("top",$(window).height());
});