$(document).ready(function () {
    $(".question-ab").css("top",$(window).height());
    $("#main-question").css({
       "overflow-x":"hidden",
       "overflow-y":"hidden",
       "height": $(window).height()
     });
    $(window).resize(function() {
       $("#main-question").css("height",$(window).height());
     });
});

var questionList = null;
$(document).ready(function () {
    var data_send = {};
    url = "/all-question"

    var more_request =$.ajax({
       type: 'get',
       url: url,
       data: data_send,
       dataType: 'json'
    });

    more_request.fail(function( jqXHR, textStatus ) {
      if(jqXHR.status==401){
         //openWeiboLogin();

      }
    });

    more_request.done(function(data) {
            questionList = data;
            if (data.length ==0) {
                return;
            }
            for (var i = 0;i<data.length;i++) {
             //$("#entity-list").append(data[i].pinHtml);
             addNewQuestion(data[i]);
            }



    });
});

function addNewQuestion(question) {
    var template = $("#question-template").html();
    template = template.replace("question-{id}","question-"+question.id);
    template = template.replace("{bg-img}",question.imgUrl);
    template = template.replace("{A-TEXT}","A、"+question.a);
    template = template.replace("{B-TEXT}","B、"+question.b);
    template = template.replace("{C-TEXT}","C、"+question.c);
    $("#main-question-relative").append(template);
}
var current_question_index = 0;
function showMainQuestion(){
    $("#main-question").css("top",0);
    $("#question-"+questionList[0].id).css("top",0);
    $("#main-loading").remove();
    current_question_index = 0;
    //$("#main-question").show();
     initClickEvent();
}

$(document).ready( function () {
        var mybody = document.getElementsByTagName('body')[0];



        //滑动处理

        var startX, startY, moveEndX, moveEndY, X, Y;

        mybody.addEventListener('touchstart', function(e) {

            e.preventDefault();

            startX = e.touches[0].pageX;

            startY = e.touches[0].pageY;

        });

        mybody.addEventListener('touchmove', function(e) {

            e.preventDefault();

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
    if (current_question_index == questionList.length-1) {
        return;
    }
    $("#question-"+questionList[current_question_index].id).animate({top: -$(window).height()-10});
    $("#question-"+questionList[current_question_index+1].id).animate({top: 0});
    current_question_index = current_question_index + 1;
    setTimeout(clearMoving,500);
}

function  preQuestion(){
    if (moving) {
        return;
    }
    moving = true;
    if (current_question_index == 0) {
        return;
    }
    $("#question-"+questionList[current_question_index].id).animate({top: $(window).height()+10});
    $("#question-"+questionList[current_question_index-1].id).animate({top: 0});
    current_question_index = current_question_index - 1;
    setTimeout(clearMoving,500);
}

function clearMoving(){
    moving = false;
}

function initClickEvent() {
//    $(".a-btn").each(function(){
//        this.addEventListener('touchend', function(e) {
//            $(this).parent().parent().parent().find(".a-btn").attr("src","/web/img/btn.png");
//            $(this).attr("src","/web/img/btn-selected.png");
//         });
//    });

    $(".a-btn").on("tap",function(){
      $(this).parent().parent().parent().find(".a-btn").attr("src","/web/img/btn.png");
      $(this).attr("src","/web/img/btn-selected.png");
    });
}


