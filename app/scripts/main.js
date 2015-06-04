/* jshint devel:true */
var place;

function submitMyName() {
  //e.preventDefault();
  var name = document.getElementById('name').value;
  place = places[getIndexOf(name, places)];
  setViewBy(place);
  return false;
}
function setViewBy(place) {
  var title = document.getElementById('place-title');
  var description = document.getElementById('place-description');
  title.textContent = place.title;
  description.textContent = place.description;
}
function getIndexOf(str, arr) {
  for(var ret = 0, i = 0, len = str.length; i < len; i++) {
    ret = (31 * ret + str.charCodeAt(i)) << 0;
  }
  return ret % arr.length;
}
wx.ready(function(){
  // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

  wx.onMenuShareAppMessage({
    title: '我在美国会住: ' + place.title + '测测你在美国会住在哪里？', // 分享标题
    desc: place.description, // 分享描述
    link: 'http://marketing.roomhunter.us/where-to-live', // 分享链接
    imgUrl: '111', // 分享图标
    type: 'link', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
  wx.onMenuShareTimeline({
    title: '我在美国会住: ' + place.title + '测测你在美国会住在哪里？', // 分享标题
    link: '', // 分享链接
    imgUrl: '', // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
});
wx.error(function(res){

  // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

});
