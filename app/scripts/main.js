/* jshint devel:true */
(function setup(){
  var input = document.getElementById('name');
  var submitBtn = document.getElementById('submit-btn');
  input.oninput = function () {
    if (input.value.length > 0) {
      submitBtn.classList.remove('disabled');
    }
    else {
      submitBtn.classList.add('disabled');
    }
  };
})();

function submitMyName() {
  //e.preventDefault();
  var name = document.getElementById('name').value;
  var index = getIndexOf(name, places);
  var place = places[index];
  var btn = document.getElementById('submit-btn');
  var label = document.getElementById('name-label');
  if (name.length < 1) {
    return false;
  }
  btn.classList.add('loading');
  btn.lastElementChild.textContent = '为你测算中...';
  label.textContent = '为你测算中...';
  wx.onMenuShareAppMessage({
    title: '我在美国会住: ' + place.title + '。测测你在美国会住在哪里？', // 分享标题
    desc: place.description, // 分享描述
    link: 'http://marketing.roomhunter.us/where-to-live', // 分享链接
    imgUrl: place.imageUrl + '!wxShareImage', // 分享图标
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
    link: 'http://marketing.roomhunter.us/where-to-live', // 分享链接
    imgUrl: place.imageUrl + '!wxShareImage', // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
  setGameResultBy(place, name);
  window.setTimeout(function (){
    switchView();
  }, 2000);
  return false;
}
function setGameResultBy(place, name) {
  var title = document.getElementById('place-title');
  var description = document.getElementById('place-description');
  var image = document.getElementById('place-image');
  var nameSpan = document.getElementById('name-title');
  image.setAttribute('src', place.imageUrl);
  title.textContent = place.title;
  nameSpan.textContent = name;
  description.textContent = place.description;
}
function switchView () {
  var gameView = document.getElementsByClassName('game')[0];
  var gameInputView = document.getElementsByClassName('game-input')[0];
  gameInputView.classList.add('offset-to-left');
  gameView.classList.add('offset-to-left');
  gameView.classList.add('slide-to-left');
}
function getIndexOf(str, arr) {
  for(var ret = 0, i = 0, len = str.length; i < len; i++) {
    ret = (31 * ret + str.charCodeAt(i)) << 0;
  }
  var length = arr.length;
  // ensure positive remainder
  return ((ret % length) + length) % length;
}
wx.ready(function(){
  // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
  var game = document.getElementsByClassName('game')[0];
  game.classList.add('ready');

});
