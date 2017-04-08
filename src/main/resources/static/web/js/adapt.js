$(document).ready(function () {
    $(".bg1").height($(window).height());
     $(".bg1").width($(window).width());

    $(window).resize(function() {
      $(".bg1").height($(window).height());
      $(".bg1").width($(window).width());
    });
});


$(document).ready(function () {
    $(".btn-start").css("margin-top",$(window).height()*0.75);
    $(window).resize(function() {
      $(".btn-start").css("margin-top",$(window).height()*0.75);
    });
});


$(document).ready(function () {
    $(".btn-start ").click(function() {
      window.location.href = "/start-answer";
    });
});