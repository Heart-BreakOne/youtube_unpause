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
  setInterval(updateTabs, 300000);
}());


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