$(document).ready(function () {
    $(".bg1").height($(window).height());
    $(window).resize(function() {
      $(".bg1").height($(window).height());
    });
});


$(document).ready(function () {
    $(".btn-start").css("margin-top",$(window).height()*0.75);
    $(window).resize(function() {
      $(".btn-start").css("margin-top",$(window).height()*0.75);
    });
});