/* jshint devel:true */
function initGameResult () {
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
}