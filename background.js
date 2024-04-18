chrome.runtime.onMessage.addListener(function (message) {
  if (message.message === "stayAlive") {
    console.log("I'm alive")
  } else if (message.message === "simulateTabFocus") {
    updateTabs();
  }
});


function updateTabs() {
  chrome.windows.getCurrent(function(currentWindow) {
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(function(tab) {
        if (tab.url.startsWith("https://www.youtube.com/") || tab.url.startsWith("https://www.music.youtube.com/")) {
          chrome.tabs.move(tab.id, { windowId: currentWindow.id, index: tab.index });
        }
      });
    });
  });
}

updateTabs();

(function loopUpdateTabs() {
  chrome.storage.local.get('pause_checkbox', function(data) {
    let state = data.pause_checkbox ?? false;
    if (!state) {
      setInterval(updateTabs, 300000);
    }
  });
})();


/*
function updateTabs() {
  chrome.windows.getCurrent(function(currentWindow) {
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach(function (tab) {
        if (tab.url.startsWith("https://www.youtube.com/") || tab.url.startsWith("https://www.music.youtube.com/")) {
          chrome.tabs.move(tab.id, { windowId: currentWindow.id, index: 0 });
        }
      });
    });
  });
}
*/


/*
function updateTabs() {
  chrome.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      if (tab.url.startsWith("https://www.youtube.com/") || tab.url.startsWith("https://www.music.youtube.com/")) {
        chrome.tabs.update(tab.id, { active: true, highlighted: false });
      }
    });
  });
}*/