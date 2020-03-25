function hideYTElement(ytElement) {
    if ( ytElement != 'undefined' && ytElement != null) {
        if(ytElement.length > 0){
            if (ytElement[0].style.visibility === '' || ytElement[0].style.visibility === 'visible') {
                ytElement[0].style.visibility = 'hidden';
            } else if (ytElement[0].style.visibility === 'hidden') {
                ytElement[0].style.visibility = 'visible';
            }
        }
    }
}


var fullScreenTopBar =  document.getElementsByClassName('ytp-chrome-top');

var fullScreenTopGradient = document.getElementsByClassName('ytp-gradient-top');

var fullScreenBottonBar =  document.getElementsByClassName('ytp-chrome-bottom');

var fullScreenBottomGradient =document.getElementsByClassName('ytp-gradient-bottom');


hideYTElement(fullScreenTopBar);
hideYTElement(fullScreenTopGradient);
hideYTElement(fullScreenBottonBar);
hideYTElement(fullScreenBottomGradient);
