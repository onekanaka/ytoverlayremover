function removeYTOverlay() {
    console.log('STARTING YT Removal...');

    browser.tabs.executeScript({
        file: "ytoverlayremover.js"
    });

    console.log('FINISHED OVERLAY REMOVAL...');
}
  
browser.browserAction.onClicked.addListener(removeYTOverlay);


browser.commands.onCommand.addListener(function (command) {
    if (command === "toggle-feature") {
        removeYTOverlay();
    }
});