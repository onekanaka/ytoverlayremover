function removeYTOverlay(){
    console.log('STARTING YT Removal...');

    var gettingAllTabs = browser.tabs.query({currentWindow: true});
 
    gettingAllTabs.then((tabs) => {
        for (let tab of tabs) {
            if (typeof tab.url != 'undefined' && tab.url.includes('youtube')) {
                DoOverlay(tab);
                break;
            }
        }
    });
}

function DoOverlay(currentTab) {
    console.log('DOING OVERLAY REMOVAL...');

    browser.tabs.executeScript({
        file: "ytoverlayremover.js"
    });

    console.log('FINISHED OVERLAY REMOVAL...');
}
  
browser.browserAction.onClicked.addListener(removeYTOverlay);

