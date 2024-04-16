# PlayNonStop

## Chrome extension to automatically skip Youtube pause button.

Download at the [Chrome Web Store](https://chromewebstore.google.com/detail/playnonstop/clnmhbffioljgdhapnabbklabnmhnjlf)

## How it works?
* Every 5 minutes the extension simulates a tab movement (as if the user clicked and dragged the tab) to it's current position (essentially keeping the tab where it already is). This is enough to prevent Youtube from pausing due to not being focused. This also keeps the user experience seamless as it won't bring the tab into focus.
* Every minute the extension simulates a user click on the page avoid pause due to inactivity.
* In the event the video is still paused, the script will dismiss the popup and playback will resume.

## Sideloading:
Download the zip folder, go to the browser's extension page, enable dev mode and select load unpacked extension.

## Icon by Flaticon
Block icons created by Kirill Kazachek - Flaticon at https://www.flaticon.com/free-icons/block<br>
Pause button icons created by kliwir art - Flaticon at https://www.flaticon.com/free-icons/pause-button