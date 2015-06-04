/* jshint devel:true */
(function configWeixin () {
  var ticketRequest = new XMLHttpRequest();
  var url = location.href.split('#')[0];
  alert(url);

  ticketRequest.open('GET', 'https://test.api.roomhunter.us/v1/ticket?url=' + encodeURI(url), true);
  ticketRequest.responseType = 'json';
  ticketRequest.onload = function() {
    var status = this.status;
    if (status == 200) {
      var data = this.response.data;
      var nonceStr = data.nonceStr;
      var signature = data.signature;
      var timestamp = data.timestamp;
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wxdd71b529fca34479', // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: nonceStr, // 必填，生成签名的随机串
        signature: signature,// 必填，签名，见附录1
        jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
    } else {

    }
  };
  ticketRequest.send();

})();
