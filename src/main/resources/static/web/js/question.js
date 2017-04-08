$(document).ready(function () {
    $(".question-ab").css("top",$(window).height());
    $(document.body).css({
       "overflow-x":"hidden",
       "overflow-y":"hidden",
       "height": $(window).height()
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

function showMainQuestion(){
    $("#main-question").css("top",0);
    $("#question-"+questionList[0].id).css("top",0);

    //$("#main-question").show();
}