const test = 'test';

window.document.addEventListener('dblclick', () => {
  chrome.runtime.sendMessage({ message: 'test test' });
  console.log('I dblclicked and message sent');
});
