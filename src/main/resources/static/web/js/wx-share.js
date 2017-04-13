var shareImgUrl = 'http://oo69h0bhm.bkt.clouddn.com/logo.png';
var lineLink = 'http://hfc.dbdbd.cn/start-answer';
var shareContent = "华泰联合证券";
var shareTitle = '测一测，你的投行人生是什么段位';
var appid = 'wx93682697f2e12366';
  
$(document).ready(function() {
    var data_send = {};
    data_send.shareUrl = lineLink;
        url = "/wx-config"

        var more_request =$.ajax({
           type: 'post',
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
                wx.config({
                    debug: false,
                    appId: appid,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 功能列表，我们要使用JS-SDK的什么功能
                });

                wx.ready(function(){
                    // 获取"分享到朋友圈"按钮点击状态及自定义分享内容接口
                    wx.onMenuShareTimeline({
                        title: shareTitle, // 分享标题
                        link: lineLink,
                        imgUrl: shareImgUrl // 分享图标
                    });


                    // 获取"分享给朋友"按钮点击状态及自定义分享内容接口
                    wx.onMenuShareAppMessage({
                        title: shareTitle, // 分享标题
                        desc: shareContent, // 分享描述
                        link: lineLink,
                        imgUrl: shareImgUrl, // 分享图标
                        type: 'link' // 分享类型,music、video或link，不填默认为link
                    });


                    //获取"分享到QQ"按钮点击状态及自定义分享内容接口
                    wx.onMenuShareQQ({
                    title: shareTitle, // 分享标题
                    desc: shareContent, // 分享描述
                    link: lineLink, // 分享链接
                    imgUrl: shareImgUrl // 分享图标
                    });


                    //获取"分享到腾讯微博"按钮点击状态及自定义分享内容接口
                    wx.onMenuShareWeibo({
                    title: shareTitle, // 分享标题
                    desc: shareContent, // 分享描述
                    link: lineLink, // 分享链接
                    imgUrl: shareImgUrl // 分享图标
                    });


                    //获取"分享到QQ空间"按钮点击状态及自定义分享内容接口
                    wx.onMenuShareQZone({
                    title: shareTitle, // 分享标题
                    desc: shareContent, // 分享描述
                    link: lineLink, // 分享链接
                    imgUrl: shareImgUrl // 分享图标
                    });

                });

                wx.error(function(res){

                    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                   alert("微信设置错误");
                   alert(res);
                });

        });

})