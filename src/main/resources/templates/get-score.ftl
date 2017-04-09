<!DOCTYPE html>
<html>
<head>
    <#include "c-head.ftl"/>
    <script  src="/web/js/adapt.js"></script>
    <title>测一测，你的投行人生是什么段位</title>
    <link rel='stylesheet' href='/web/css/get-score.css' type='text/css' media='screen' />
</head>

<body>
<div id="main">
    <img  class="bg1" src="/web/img/bg-result.jpg"></img>
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


</div>
</body>
</html>