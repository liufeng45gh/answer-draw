<!DOCTYPE html>
<html>
<head>
    <#include "c-head.ftl"/>
    <script  src="/web/js/adapt.js"></script>
    <title>测一测，你的投行人生是什么段位</title>
    <link rel='stylesheet' href='/web/css/abc.css' type='text/css' media='screen' />
    <script  src="/web/js/abc.js"></script>
    <script  src="/web/js/question.js"></script>
</head>

<body >
<div id="main-loading">
    <img  class="bg1" src="/web/img/bg1.jpg"></img>
    <div class="div-pro">
        <div class="process-div">
            <img  src="/web/img/p-bg.png" class="p-bg"></img>
            <img  src="/web/img/p-process.png" class="p-process"></img>
            <img  src="/web/img/p-logo.png" class="p-logo"></img>
            <div class="loading-font">题库加载中......</div>
        </div>
    </div>

</div>
<div id="main-question">
    <div id="main-question-relative">

    </div>
    <!--
    <div class="question">
        <img  class="bg1" src="/web/img/bg2.jpg"></img>
        <div class="A">
            <div class="A-R" >
                <img class="a-btn" src="/web/img/btn.png"></img>
                <div class="a-text">A、晾晒文件</div>
            </div>
        </div>
        <div class="B">
            <div class="A-R" >
                <img class="a-btn" src="/web/img/btn.png"></img>
                <div class="a-text">B、整理底稿</div>
            </div>
        </div>
        <div class="C">
            <div class="A-R" >
                <img class="a-btn" src="/web/img/btn.png"></img>
                <div class="a-text">C、熬夜加班ing</div>
            </div>
        </div>
    </div>
    -->
</div>
<div id="question-template" style="display:none;">
    <div class="question-ab" id="question-{id}">
        <div class="question" >
            <img  class="bg1" src="{bg-img}"></img>
            <div class="A">
                <div class="A-R" >
                    <img class="a-btn" src="/web/img/btn.png"></img>
                    <div class="a-text">{A-TEXT}</div>
                </div>
            </div>
            <div class="B">
                <div class="A-R" >
                    <img class="a-btn" src="/web/img/btn.png"></img>
                    <div class="a-text">{B-TEXT}</div>
                </div>
            </div>
            <div class="C">
                <div class="A-R" >
                    <img class="a-btn" src="/web/img/btn.png"></img>
                    <div class="a-text">{C-TEXT}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>