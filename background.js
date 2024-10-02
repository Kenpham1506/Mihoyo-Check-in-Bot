chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed!");
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "pageLoaded") {
        // Only open the popup when on Hoyolab, after the user has clicked the redirect button
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0].url.startsWith("https://www.hoyolab.com/")) {
                chrome.action.openPopup(); // Re-open the popup when the user is on the correct site
            }
        });
    }
});
