!function(){var e=new XMLHttpRequest,n=location.href.split("#")[0];alert(n),e.open("GET","https://api.roomhunter.us/v1/ticket?url="+encodeURI(n),!0),e.responseType="json",e.onload=function(){var e=this.status;if(200==e){var n=this.response.data,t=n.nonceStr,s=n.signature,i=n.timestamp;wx.config({debug:!0,appId:"wxdd71b529fca34479",timestamp:i,nonceStr:t,signature:s,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage"]})}},e.send()}(),wx.ready(function(){wx.checkJsApi({jsApiList:["onMenuShareTimeline"],success:function(e){}}),wx.onMenuShareAppMessage({title:"鸡总XXX",desc:"1111",link:"111",imgUrl:"111",type:"link",dataUrl:"",success:function(){},cancel:function(){}})}),wx.error(function(e){});