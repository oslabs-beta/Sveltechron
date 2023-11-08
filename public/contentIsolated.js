console.log('contentIsolated successfuly injected');

//forward messages from contentMain to
// window.addEventListener('message', (message) => {
//   console.log('this is message relayed through the contentIsolated:', message);
//   chrome.runtime.sendMessage(JSON.stringify(message));
// });

window.addEventListener('message', (msg) => {
  console.log('this is a msg being received:', msg);
  if (
    typeof msg !== 'object' ||
    msg === null ||
    msg.data?.source !== 'content.js'
  ) {
    return;
  } else {
    console.log('message is being relayed in the content Isolated');
    chrome.runtime.sendMessage(msg.data);
  }
});

// window.addEventListener('unload', () =>
//   chrome.runtime.sendMessage({ type: 'clear' })
// );
