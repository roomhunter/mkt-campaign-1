/* jshint devel:true */
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
        gameInputView.classList.add('slide-to-right');
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
