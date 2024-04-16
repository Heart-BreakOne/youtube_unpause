
function simulateUserInteraction() {


  const volumeSlider = document.querySelector(".ytp-volume-panel");
  if (volumeSlider) {
    volumeSlider.click();
  }
  const element = document.querySelector('h1.style-scope.ytd-watch-metadata yt-formatted-string');
  if (element) {
    element.click();
  }
}

const targetNode = document.body;

const config = { childList: true, subtree: true };

const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(node => {
        if (node && node.tagName && node.tagName.toLowerCase() === 'tp-yt-iron-overlay-backdrop') {
          node.click();
          chrome.runtime.sendMessage({ message: "simulateTabFocus" });
          node.click();
        }
      });
    }
  }
};


function send() {
  chrome.runtime.sendMessage({ message: "stayAlive" });
}

const observer = new MutationObserver(callback);

setInterval(send, 28000);
setInterval(simulateUserInteraction, 60000);
observer.observe(targetNode, config);


/*
<tp-yt-paper-dialog style-target="host" role="dialog" tabindex="-1" class="style-scope ytd-popup-container" prevent-autonav="true" modern="" style="outline: none; z-index: 2202; position: fixed; top: 315.5px; left: 254.105px;"><!--css-build:shady--><yt-confirm-dialog-renderer class="style-scope ytd-popup-container" modern="" dialog="true" tabindex="-1"><!--css-build:shady--><!--css-build:shady--><div id="spinner" class="style-scope yt-confirm-dialog-renderer" hidden="">
  <tp-yt-paper-spinner class="style-scope yt-confirm-dialog-renderer" aria-hidden="true"><!--css-build:shady--><div id="spinnerContainer" class="  style-scope tp-yt-paper-spinner"><div class="spinner-layer layer-1 style-scope tp-yt-paper-spinner"><div class="circle-clipper left style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div><div class="circle-clipper right style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div></div><div class="spinner-layer layer-2 style-scope tp-yt-paper-spinner"><div class="circle-clipper left style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div><div class="circle-clipper right style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div></div><div class="spinner-layer layer-3 style-scope tp-yt-paper-spinner"><div class="circle-clipper left style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div><div class="circle-clipper right style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div></div><div class="spinner-layer layer-4 style-scope tp-yt-paper-spinner"><div class="circle-clipper left style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div><div class="circle-clipper right style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div></div></div></tp-yt-paper-spinner>
  <div id="loading-message" class="body-text style-scope yt-confirm-dialog-renderer" hidden="">
    <yt-formatted-string class="style-scope yt-confirm-dialog-renderer" is-empty="function(){var e=wa.apply(0,arguments);a.loggingStatus.currentExternalCall=b;a.loggingStatus.bypassProxyController=!0;var h,l=(null!=(h=a.is)?h:a.tagName).toLowerCase();DD(l,b,&quot;PROPERTY_ACCESS_CALL_EXTERNAL&quot;);var m;h=null==(m=null!=c?c:d[b])?void 0:m.call.apply(m,[d].concat(fa(e)));a.loggingStatus.currentExternalCall=void 0;a.loggingStatus.bypassProxyController=!1;return h}"><!--css-build:shady--><!--css-build:shady--><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
  </div>
</div>
<yt-img-shadow id="thumbnail" notify-on-loaded="" width="256" class="style-scope yt-confirm-dialog-renderer no-transition" hidden=""><!--css-build:shady--><!--css-build:shady--><img id="img" draggable="false" class="style-scope yt-img-shadow" alt="" width="256"></yt-img-shadow>
<div id="main" class="style-scope yt-confirm-dialog-renderer" style="width: 100%;">
  <yt-img-shadow id="header-image" notify-on-loaded="" class="style-scope yt-confirm-dialog-renderer no-transition" hidden=""><!--css-build:shady--><!--css-build:shady--><img id="img" draggable="false" class="style-scope yt-img-shadow" alt=""></yt-img-shadow>
  <yt-formatted-string id="title" class="style-scope yt-confirm-dialog-renderer" is-empty="function(){var e=wa.apply(0,arguments);a.loggingStatus.currentExternalCall=b;a.loggingStatus.bypassProxyController=!0;var h,l=(null!=(h=a.is)?h:a.tagName).toLowerCase();DD(l,b,&quot;PROPERTY_ACCESS_CALL_EXTERNAL&quot;);var m;h=null==(m=null!=c?c:d[b])?void 0:m.call.apply(m,[d].concat(fa(e)));a.loggingStatus.currentExternalCall=void 0;a.loggingStatus.bypassProxyController=!1;return h}" hidden=""><!--css-build:shady--><!--css-build:shady--><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string>
  <tp-yt-paper-dialog-scrollable id="scroller" class="body-text style-scope yt-confirm-dialog-renderer no-padding scrolled-to-bottom"><!--css-build:shady--><div id="scrollable" class="scrollable style-scope tp-yt-paper-dialog-scrollable" style="max-height: 651px; box-sizing: border-box; max-width: 777px;">
  
    
      <yt-formatted-string class="line-text style-scope yt-confirm-dialog-renderer" respect-html-dir="" split-lines="">Video paused. Continue watching?</yt-formatted-string>
    <dom-repeat class="style-scope yt-confirm-dialog-renderer"><template is="dom-repeat" class="style-scope ytd-popup-container"></template></dom-repeat>
  
</div>
</tp-yt-paper-dialog-scrollable>
  <div id="checkbox-container" class="style-scope yt-confirm-dialog-renderer" hidden=""></div>
  <div class="buttons style-scope yt-confirm-dialog-renderer">
    <yt-button-renderer id="cancel-button" dialog-dismiss="" class="style-scope yt-confirm-dialog-renderer" button-renderer="" button-next="" hidden=""><!--css-build:shady--><yt-button-shape class="style-scope ytd-popup-container"></yt-button-shape><tp-yt-paper-tooltip fit-to-visible-bounds="" offset="8" disable-upgrade="" class="style-scope ytd-popup-container"> </tp-yt-paper-tooltip></yt-button-renderer>
    <yt-button-renderer id="checkbox-enabled-confirm-button" dialog-confirm="" class="style-scope yt-confirm-dialog-renderer" hidden="" button-renderer="" button-next=""><!--css-build:shady--><yt-button-shape class="style-scope ytd-popup-container"></yt-button-shape><tp-yt-paper-tooltip fit-to-visible-bounds="" offset="8" disable-upgrade="" class="style-scope ytd-popup-container"> </tp-yt-paper-tooltip></yt-button-renderer>
    <yt-button-renderer id="confirm-button" class="style-scope yt-confirm-dialog-renderer" button-renderer="" button-next="" dialog-confirm=""><!--css-build:shady--><yt-button-shape class="style-scope ytd-popup-container"><button class="yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--call-to-action yt-spec-button-shape-next--size-m" aria-label="Yes" title="" style=""><div class="yt-spec-button-shape-next__button-text-content"><span class="yt-core-attributed-string yt-core-attributed-string--white-space-no-wrap" role="text">Yes</span></div><yt-touch-feedback-shape style="border-radius: inherit;"><div class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response" aria-hidden="true"><div class="yt-spec-touch-feedback-shape__stroke" style=""></div><div class="yt-spec-touch-feedback-shape__fill" style=""></div></div></yt-touch-feedback-shape></button></yt-button-shape><tp-yt-paper-tooltip fit-to-visible-bounds="" offset="8" disable-upgrade="" class="style-scope ytd-popup-container"></tp-yt-paper-tooltip></yt-button-renderer>
  </div>
</div>
</yt-confirm-dialog-renderer>
</tp-yt-paper-dialog>



<tp-yt-iron-overlay-backdrop opened="" class="opened" style="z-index: 2201;"><!--css-build:shady-->
</tp-yt-iron-overlay-backdrop>
*/