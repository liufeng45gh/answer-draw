$(document).ready(function () {
    $(".process-div").css("margin-top",$(window).height()*0.25);
});

$(document).ready(function () {
    $(".div-pro").height($(window).height());
});

var t = 20;
var start = 0;
var interval;
$(document).ready(function () {
    $("#main-question").css("top",$(window).height()+20);
   interval = setInterval(loop,1000);
});

function loop(){
    setProgress(start);
    if (start == 100) {
        clearInterval(interval);
        setTimeout(showMainQuestion,1000);
        //showMainQuestion();
    }
    start = start + t;
}

function setProgress(percent){
    $(".p-process").css("width",percent+"%");
    $(".p-logo").css("left",percent+"%");

    if (percent == 100) {
        $(".p-logo").css("left",parseInt($(".p-logo").css("left"))-30);
    }else if (percent != 0) {
        $(".p-logo").css("left",parseInt($(".p-logo").css("left"))-15);
    }


}

