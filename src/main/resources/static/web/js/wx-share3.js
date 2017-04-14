 var surl = window.location.href;
    surl=surl.replace(/&/g,'|');
    var iurl = 'http://oo69h0bhm.bkt.clouddn.com/share-logo.png';
    $(function(){
        $.ajax({
            type:'GET',
            url:'http://101.200.220.6:8083/boss-interface/wechat/getjssdk_htzq',
            dataType:'json',
            async:false,
            data: {url:surl},
            success:function(data){
                wx.config({
                    debug: false,
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
                });

                wx.ready(function(){
                    wx.onMenuShareTimeline({
                        title: '测一测你的投行人生是什么段位',
                        link: surl,
                        imgUrl: iurl,
                        success: function () {
                        	$.ajax({
                	            type:'GET',
                	            url:'${lon}/gold/upShar.json',
                	            dataType:'json',
                	            async:false,
                	            data: {},
                	            success:function(data){
                	            	if(data.msg>0){
                	            	location.reload();
                	            	}else{

                	            	}
                	            }
                        	});
                        },
                        cancel: function () {

                        }
                    });
                    wx.onMenuShareAppMessage({
                        title: '测一测你的投行人生是什么段位',
                        desc: '「华泰联合证券微信公众号启动1周年」在线互动',
                        link: surl,
                        imgUrl: iurl,
                        type: 'link',
                        dataUrl: '',
                        success: function () {

                        },
                        cancel: function () {

                        }
                    });
                });

                wx.error(function(res){
                });
            }
        });

    })