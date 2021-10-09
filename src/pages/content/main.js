/* eslint-disable */
console.log('content is open')

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request);
});
