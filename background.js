console.log('background running')

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    let status = true
    chrome.tabs.sendMessage(tab.id, status)
}