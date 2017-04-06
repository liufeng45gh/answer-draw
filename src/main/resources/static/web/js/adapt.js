$(document).ready(function () {
    $(".bg1").height($(window).height());
    $(window).resize(function() {
      $(".bg1").height($(window).height());
    });
});