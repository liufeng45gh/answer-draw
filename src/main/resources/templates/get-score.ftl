<!DOCTYPE html>
<html>
<head>
    <#include "c-head.ftl"/>
    <script  src="/web/js/adapt.js"></script>
    <title>测一测，你的投行人生是什么段位</title>
    <link rel='stylesheet' href='/web/css/get-score.css' type='text/css' media='screen' />
    <script  src="/web/js/get-score.js?version=1.0"></script>
</head>

<body>
<div id="main">
    <div class="main-rel">
        <img  class="bg1" src="http://oo69h0bhm.bkt.clouddn.com/bg-result.jpg"></img>
        <div class="title-div">
            <div class="title">
                ${nickTitle}
            </div>
        </div>

        <div class="score-div">
            ${answerResult.score}
        </div>

        <div class="description-div">
            <div class="description">
                ${description}
            </div>
        </div>
        <#if answerResult.rightCount gt 7 >
            <div class="reward-div">
                <div class="reward">
                    <img class="a-btn" src="http://oo69h0bhm.bkt.clouddn.com/c-bg-btn.png"></img>
                    <div class="a-text">点击领取</div>
                </div>
            </div>
        </#if>

    </div>

</div>
<div class="thanks">
       <div class="thanks-rel">
           <img  class="bg1" src="http://oo69h0bhm.bkt.clouddn.com/thanks-v1.jpg"></img>
       </div>
</div>
<div class="arrow-ab">
    <div class="array-rel">
        <img src="/web/img/arrow.png" style="width:20px;height:15px; top:460px; left:150px;" id="arrow" class="arrow">
    </div>
</div>

</body>
</html>