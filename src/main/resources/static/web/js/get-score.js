$(document).ready(function() {

    if ($(".a-text").length>0) {
      $(".a-text").get(0).addEventListener('touchend', function(e) {
          //window.location.href = "http://m.lyancoffee.com/wechat/lucky/929531/0";
          window.location.href = "http://m.lyancoffee.com/wechat/lucky/929532/0";
      });
    }


    $(".arrow").css("top",$(window).height()-30);
    $(".arrow").css("left",$(window).width()/2-10);
    $(".thanks").css("top",$(window).height());
});


$(document).ready( function () {
        var mybody = document.getElementsByTagName('body')[0];



        //滑动处理

        var startX, startY, moveEndX, moveEndY, X, Y;

        mybody.addEventListener('touchstart', function(e) {

            //e.preventDefault();

            startX = e.touches[0].pageX;

            startY = e.touches[0].pageY;

        });

        mybody.addEventListener('touchmove', function(e) {

           //e.preventDefault();

            moveEndX = e.changedTouches[0].pageX;

            moveEndY = e.changedTouches[0].pageY;

            X = moveEndX - startX;

            Y = moveEndY - startY;

//            if ( X > 0 ) {
//            //alert(‘向右’);
//            }
//
//            else if ( X < 0 ) {
//            //alert(‘向左’);
//            }

             if ( Y > 0) {
            //alert(‘向下’);
                preQuestion();
            }

            else if ( Y < 0 ) {
            //alert(‘向上’);
            nextQuestion();
            }

            else{
            //alert(‘没滑动’);
             }

        });

         mybody.addEventListener('touchend', function(e) {

            //e.preventDefault();

           clearMoving();

        });

});
var moving = false;


function  nextQuestion(){
    if (moving) {
        return;
    }
    moving = true;
    if ($(".main").css("top") < 0) {
        return;
    }
    //$(".main").css("top",-$(window).height());
    $(".main").animate({top: -$(window).height()-10});
    $(".thanks").animate({top: 0});
}

function  preQuestion(){
    if (moving) {
        return;
    }
    moving = true;
    
    if ($(".main").css("top") == 0) {
        return;
    }
    //$(".main").css("top",-$(window).height());
    $(".main").animate({top: 0});
    $(".thanks").animate({top: $(window).height()+10});
    //setTimeout(clearMoving,500);
}

function clearMoving(){
    moving = false;
}