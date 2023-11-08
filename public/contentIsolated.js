// forward messages from contentMain to serviceWorker
window.addEventListener('message', (message) => {
  if (typeof message === 'object') chrome.runtime.sendMessage(message.data);
});
