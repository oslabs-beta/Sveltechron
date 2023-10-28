// chrome.runtime.onConnect.addListener(function (port) {
//   console.log(port, 'connected in the contentIso');
//   port.onMessage.addListener(function (msg) {
//     console.log('message received in contentIso:', msg);
//   });
// });

console.log('contentIso fired');

//added this so that message won't fire before service worker loaded listeners -> next step is to programatically inject content script from service worker
window.addEventListener('dblclick', () => {
  console.log('dblclick');
  //sends message to service worker on dblclick
  chrome.runtime.sendMessage('sendMessage worked in iso');
});

chrome.runtime.onMessage.addListener((message) => {
  //listens to messages from content script
  console.log('this is a message received in the content script:', message);
});

//script is statically injected in the manifest.json

// var port = chrome.runtime.connect();
// port.postMessage({ joke: 'Knock knock' });
// console.log(port, 'sent message');
// port.onMessage.addListener(function (msg) {
//   console.log('received message in contentIso:', msg);
//   if (msg.question === "Who's there?") port.postMessage({ answer: 'Madame' });
//   else if (msg.question === 'Madame who?')
//     port.postMessage({ answer: 'Madame... Bovary' });
// });

// function ping() {
//   console.log('ping invoked');
//   chrome.runtime.sendMessage('ping', (response) => {
//     if (chrome.runtime.lastError) {
//       setTimeout(ping, 1000);
//     } else {
//       console.log('background script is ready');
//       chrome.runtime.sendMessage('hello');
//       // Do whatever you want, background script is ready now
//     }
//   });
// }

// ping();
// chrome.runtime.onMessage((msg) => {
//   console.log(
//     'this is the message received in the contentIsolated script:',
//     msg
//   );
// });

//don't need separate content main and isolated scripts it appears

// var background = chrome.runtime.connect({ name: 'knockknock' });
// background.postMessage({ joke: 'Knock knock' });
// background.onMessage.addListener(function (msg) {
//   console.log('contentIso message:', msg);
//   if (msg.question === "Who's there?")
//     background.postMessage({ answer: 'Madame' });
//   else if (msg.question === 'Madame who?')
//     background.postMessage({ answer: 'Madame... Bovary' });
// });

// const store = chrome.runtime.connect({ name: 'store' });
// store.postMessage({ greeting: 'hello' });

// window.document.addEventListener('SvelteDOMInsert', (e) => console.log(e));
// window.document.addEventListener('SvelteDOMSetData', (e) => console.log(e));
// window.document.addEventListener('SvelteDOMRemove', (e) => console.log(e));

// chrome.runtime.onConnect.addListener(function (port) {
//   console.assert(port.name === 'knockknock');
//   port.onMessage.addListener(function (msg) {
//     console.log('message received in the contentIso:', msg);
//     if (msg.joke === 'Knock knock')
//       port.postMessage({ question: "Who's there?" });
//     else if (msg.answer === 'Madame')
//       port.postMessage({ question: 'Madame who?' });
//     else if (msg.answer === 'Madame... Bovary')
//       port.postMessage({ question: "I don't get it." });
//   });
// });
// window.addEventListener('message', (msg) => {
//   if (
//     typeof msg !== 'object' ||
//     msg === null ||
//     msg.data?.source !== 'contentIsolated.js'
//   ) {
//     return;
//   } else {
//     chrome.runtime.sendMessage(msg.data, (res) => {
//       return;
//     });
//   }
// });

// window.addEventListener('unload', () =>
//   chrome.runtime.sendMessage({ type: 'clear' })
// );

// chrome.runtime.onMessage.addListener();
