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
  gameInputView.classList.add('offset-to-left');
  gameView.classList.add('offset-to-left');
}
function getIndexOf(str, arr) {
  if (str === '李忻乐' || str === '周黎' || str === '么立新') {
    return arr.length - 1;
  }
  if (str === '季郁忠') {
    return 8;
  }
  if (str === '蔡元楠') {
    return 12;
  }
  if (str === '胡修涵') {
    return 0;
  }
  for(var ret = 0, i = 0, len = str.length; i < len; i++) {
    ret = (31 * ret + str.charCodeAt(i)) << 0;
  }
  var length = arr.length;
  var lengthFaked = length + 2;
  // ensure positive remainder
  var indexFaked = ((ret % lengthFaked) + lengthFaked) % lengthFaked;
  return (indexFaked < length) ? indexFaked : length - 1;
}
function getSharableLink(index, name) {
  var url = 'http://marketing.roomhunter.us/where-to-live?' + 'name=' + name + '&placeIndex=' + index;
  return encodeURI(url);
}

