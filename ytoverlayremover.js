
/*var fullScreenTopBar = $('div.ytp-chrome-top');
var fullScreenTopGradient = $('div.ytp-gradient-top');

var fullScreenBottonBar = $('div.ytp-chrome-bottom');
var fullScreenBottomGradient = $('div.ytp-gradient-bottom');

fullScreenTopBar.remove();
fullScreenTopGradient.remove();
fullScreenBottonBar.remove();
fullScreenBottomGradient.remove();

var moviePlayer = document.getElementById('movie_player');

moviePlayer .appendChild(fullScreenTopBar);
moviePlayer .appendChild(fullScreenTopGradient);
moviePlayer .appendChild(fullScreenBottonBar);
moviePlayer .appendChild(fullScreenBottomGradient);

//////*/

var removedYTOverlay;

var fullScreenTopBar =  document.getElementsByClassName('ytp-chrome-top');

var fullScreenTopGradient = document.getElementsByClassName('ytp-gradient-top');

var fullScreenBottonBar =  document.getElementsByClassName('ytp-chrome-bottom');

var fullScreenBottomGradient =document.getElementsByClassName('ytp-gradient-bottom');

if (removedYTOverlay === 'undefined'|| removedYTOverlay === null) {
    removedYTOverlay = false;
}

if (removedYTOverlay)
{
    var moviePlayer = document.getElementsByClassName('movie_player');

    fullScreenTopBar === 'undefined'|| fullScreenTopBar === null ? moviePlayer.appendChild(fullScreenTopBar) : true;
    fullScreenTopGradient === 'undefined'|| fullScreenTopGradient === null ? moviePlayer.appendChild(fullScreenTopGradient) : true;
    fullScreenBottonBar === 'undefined'|| fullScreenBottonBar === null ? moviePlayer.appendChild(fullScreenBottonBar) : true;
    fullScreenBottomGradient === 'undefined'|| fullScreenBottomGradient === null ? moviePlayer.appendChild(fullScreenBottomGradient) : true;
    removedYTOverlay = true;
} else {

    if ( fullScreenTopBar != 'undefined' && fullScreenTopBar != null) {
        while(fullScreenTopBar.length > 0){
            fullScreenTopBar[0].parentNode.removeChild(fullScreenTopBar[0]);
        }
    }

    if ( fullScreenBottonBar != 'undefined' && fullScreenBottonBar != null) {
        while(fullScreenBottonBar.length > 0){
            fullScreenBottonBar[0].parentNode.removeChild(fullScreenBottonBar[0]);
        }
    }

    if ( fullScreenTopGradient != 'undefined' && fullScreenTopGradient != null) {
        while(fullScreenTopGradient.length > 0){
            fullScreenTopGradient[0].parentNode.removeChild(fullScreenTopGradient[0]);
        }
    }

    if ( fullScreenBottomGradient != 'undefined' && fullScreenBottomGradient != null) {
        while(fullScreenBottomGradient.length > 0){
            fullScreenBottomGradient[0].parentNode.removeChild(fullScreenBottomGradient[0]);
        }
    }
    removedYTOverlay = false;
}