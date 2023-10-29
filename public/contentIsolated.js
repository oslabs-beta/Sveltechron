console.log('contentIsolated successfuly injected');

//forward messages from contentMain to
window.addEventListener('message', (message) => {
  chrome.runtime.sendMessage(message);
});
