/* jshint devel:true */

// View related
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
    title: name + '在美国会住: ' + place.title + '。测测你在美国会住在哪里？', // 分享标题
    desc: place.description, // 分享描述
    link: getSharableLink(index, name), // 分享链接
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
    title: name + '在美国会住: ' + place.title + '。测测你在美国会住在哪里？', // 分享标题
    link: getSharableLink(index, name), // 分享链接
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
    toResult();
  }, 1500);
  return false;
}

function toGame() {
  var gameView = document.getElementsByClassName('game')[0];
  var gameInputView = document.getElementsByClassName('game-input')[0];
  //gameInputView.classList.remove('offset-to-left');
  //gameView.classList.remove('offset-to-left');
  gameView.classList.remove('slide-to-left');
  gameInputView.classList.remove('slide-to-left');
  window.setTimeout(function (){
    gameView.classList.add('played');
  }, 1000);
}

// helper

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
function toResult () {
  var gameView = document.getElementsByClassName('game')[0];
  var gameInputView = document.getElementsByClassName('game-input')[0];
  gameView.classList.remove('slide-to-right');
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
function getSharableLink(index, name) {
  var url = 'http://marketing.roomhunter.us/where-to-live?' + 'name=' + name + '&placeIndex=' + index;
  return encodeURI(url);
}
wx.ready(function(){
  // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
  var game = document.getElementsByClassName('game')[0];
  game.classList.add('ready');

  (function initGameResult () {
    var queryString = window.location.search;
    var input = document.getElementById('name');
    var submitBtn = document.getElementById('submit-btn');
    var gameInputView = document.getElementsByClassName('game-input')[0];
    var toGameBtn = document.getElementById('to-game');

    toGameBtn.onclick = function () {
      var gameView = document.getElementsByClassName('game')[0];
      var gameInputView = document.getElementsByClassName('game-input')[0];
      gameInputView.classList.remove('offset-to-left');
      gameView.classList.remove('offset-to-left');
      gameView.classList.add('slide-to-right');
      window.setTimeout(function (){
        gameView.classList.add('played');
      }, 1000);
    };
    input.oninput = function () {
      if (input.value.length > 0) {
        submitBtn.classList.remove('disabled');
      }
      else {
        submitBtn.classList.add('disabled');
      }
    };
    if (queryString) {
      var params = parseQueryString(decodeURIComponent(queryString.substring(1)));
      var title = document.getElementById('place-title');
      var description = document.getElementById('place-description');
      var image = document.getElementById('place-image');
      var nameSpan = document.getElementById('name-title');
      var index = params.placeIndex || 0;
      var place = places[index] || places[0];
      if (params.name && place) {
        image.setAttribute('src', place.imageUrl);
        title.textContent = place.title;
        nameSpan.textContent = params.name;
        description.textContent = place.description;

        wx.onMenuShareAppMessage({
          title: params.name + '在美国会住: ' + place.title + '。测测你在美国会住在哪里？', // 分享标题
          desc: place.description, // 分享描述
          link: getSharableLink(index, params.name), // 分享链接
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
          title: params.name + '在美国会住: ' + place.title + '。测测你在美国会住在哪里？', // 分享标题
          link: getSharableLink(index, params.name), // 分享链接
          imgUrl: place.imageUrl + '!wxShareImage', // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        });
      }
    }

    function parseQueryString(queryString) {
      var params = {}, queries, temp, i, l;
      // Split into key/value pairs
      queries = queryString.split("&");

      // Convert the array of strings into an object
      for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
      }
      return params;
    }
  })();
});
