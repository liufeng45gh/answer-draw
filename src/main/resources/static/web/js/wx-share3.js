 var surl = window.location.href;
    surl=surl.replace(/&/g,'|');
    var iurl = '${ctx}/images/gold/dzxf-dan.png';
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
                        title: '华泰联合证券标题',
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
                        title: '华泰联合证券标题',
                        desc: '华泰联合证券标题内容',
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