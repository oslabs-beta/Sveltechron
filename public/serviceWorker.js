// background.js

console.log('service worker fired');

let tabId;
let port;
// Background page -- background.js
chrome.runtime.onConnect.addListener(function (devToolsConnection) {
  // assign the listener function to a variable so we can remove it later
  var devToolsListener = function (message) {
    // Inject a content script into the identified tab
    console.log('message received in the service worker:', message);

    tabId = message.tabId;
    port = devToolsConnection;
    console.log('this the tabId', tabId);
    devToolsConnection.postMessage(
      'back at ya from the serviceWorker postMessage'
    );
  };
  // add the listener
  devToolsConnection.onMessage.addListener(devToolsListener);

  devToolsConnection.onDisconnect.addListener(function () {
    console.log('devtools disconnected');
    devToolsConnection.onMessage.removeListener(devToolsListener);
  });
});

chrome.runtime.onMessage.addListener(function (message) {
  console.log(
    'this the tabId when the message is sent',
    tabId,
    'and this is the port',
    port
  );
  console.log('this is a message sent from the content script:', message);
  port.postMessage('relayed message from the content script', message);
  chrome.tabs.sendMessage(
    tabId,
    'this is a message sent from the service worker'
  );
  // Responsible for channeling messages from devtools pane and content scripts
});

// Here is where the associations between them are made across tabs.

// const connections = {};

// chrome.runtime.onConnect.addListener(function (port) {
//   const extensionListener = function (message, sender, sendResponse) {
//     // The original connection event doesn't include the tab ID of the
//     // DevTools page, so we need to send it explicitly.
//     if (message.name == 'init') {
//       connections[message.tabId] = port;
//       console.log('message:', message);
//       console.log('message.tabId:', message.tabId);
//     }

//     // Listen to messages sent from the DevTools page
//     port.onMessage.addListener(extensionListener);

//     port.onDisconnect.addListener(function (port) {
//       console.log('port disconnected');
//       port.onMessage.removeListener(extensionListener);

//       var tabs = Object.keys(connections);
//       for (var i = 0, len = tabs.length; i < len; i++) {
//         if (connections[tabs[i]] == port) {
//           delete connections[tabs[i]];
//           break;
//         }
//       }
//     });
//   };
// });

// // Receive message from content script and relay to the devTools page for the
// // current tab
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   // Messages from content scripts should have sender.tab set
//   console.log('connections:', connections);
//   console.log('request:', request);
//   console.log('sender:', sender);
//   if (sender.tab) {
//     var tabId = sender.tab.id;
//     if (Object.hasOwn(connections, tabId)) {
//       console.log('relayed message');
//       connections[tabId].postMessage(request);
//     } else {
//       console.log('Tab not found in connection list.');
//     }
//   } else {
//     console.log('sender.tab not defined.');
//   }
//   return true;
// });

// var port = chrome.runtime.connect();1
// port.postMessage({ joke: 'Knock knock' });
// port.onMessage.addListener(function (msg) {
//   console.log('received message in serviceWorker:', msg);
//   if (msg.question === "Who's there?") port.postMessage({ answer: 'Madame' });
//   else if (msg.question === 'Madame who?')
//     port.postMessage({ answer: 'Madame... Bovary' });
// });

// chrome.runtime.onConnect.addListener(function (port) {
//   console.log(port, 'connected in the serviceWorker');
//   port.onMessage.addListener(function (msg) {
//     console.log('message received in serviceWorker:', msg);
//     port.postMessage({ greeting: 'heythere' });
//   });
// });

// chrome.runtime.onConnect.addListener((port) => {
//   port.onMessage.addListener((msg) => {
//     // Handle message however you want
//     console.log('this is the msg received in the service worker:', msg);
//   });
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>
//   sendResponse('pong')
// );

// chrome.runtime.onConnect.addListener(function (port) {
//   console.assert(port.name === 'knockknock');
//   port.onMessage.addListener(function (msg) {
//     console.log('message received in the serviceWorker:', msg);
//     if (msg.joke === 'Knock knock')
//       port.postMessage({ question: "Who's there?" });
//     else if (msg.answer === 'Madame')
//       port.postMessage({ question: 'Madame who?' });
//     else if (msg.answer === 'Madame... Bovary')
//       port.postMessage({ question: "I don't get it." });
//   });
// });
// //SERVICE WORKER

// let ext;
// let tabid;
// let key;

// chrome.runtime.onMessage.addListener((message, sender, res) => {
//   connections[key].postMessage(message);
//   res('success');
// });

// const connections = {};

// chrome.runtime.onConnect.addListener(function (port) {
//   const extensionListener = function (message, sender, sendResponse) {
//     // The original connection event doesn't include the tab ID of the
//     // DevTools page, so we need to send it explicitly.
//     if (message.type === 'INIT') {
//       console.log('message type INIT received in serviceWorker.js');
//       port.postMessage({
//         source: 'serviceWorker.js',
//         type: 'postMessage - INIT',
//       });
//       key = message.tabId;
//       connections[key] = port;
//       tabid = message.tabId;
//       ext = sender.id;
//       return;
//     }
//     if (message.type === 'INJECT') {
//       console.log('message type INJECT received in serviceWorker.js');
//       port.postMessage({
//         source: 'serviceWorker.js',
//         type: 'postMessage - INJECT',
//         message: message,
//       });
//       return;
//     }
//     // other message handling
//     if (message.type === 'RELOAD') {
//       console.log('RELOADING webpage');
//       chrome.tabs.reload(message.tabId, { bypassCache: true });
//     }
//     return;
//   };

//   // Listen to messages sent from the DevTools page
//   port.onMessage.addListener(extensionListener);

//   // handle disconnect
//   port.onDisconnect.addListener(function (port) {
//     port.onMessage.removeListener(extensionListener);
//     for (const tab in connections) {
//       if (connections[tab] == port) {
//         delete connections[tab];
//         break;
//       }
//     }
//   });
// });
