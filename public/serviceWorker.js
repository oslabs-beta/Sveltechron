console.log('serviceWorker successfully loaded');
//let tabId and port be accessible for port connection between service worker and extension (store.ts) as well as service worker to content script connection
let tabId;
let port;
// setup connection between service worker and extension (store.ts)
chrome.runtime.onConnect.addListener(function (extensionPort) {
  // assign the listener function to a variable so we can remove it later
  const extensionListener = function (message) {
    switch (message.action) {
      case 'connect':
        //expose tabId and port info to service worker and content script connection
        tabId = message.body;
        console.log(message, tabId);
        port = extensionPort;
        // Inject content scripts into the identified tab
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ['contentMain.js'],
          world: 'MAIN',
        });
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ['contentIsolated.js'],
        });
        port.postMessage('successfully connected');
        break;
      default:
        //relay message from extension to contentScript
        console.log(
          'this is the message received in the serviceWorker:',
          message
        );
        chrome.tabs.sendMessage(tabId, message);
    }
  };
  // inject the listener on receiving a message
  extensionPort.onMessage.addListener(extensionListener);

  extensionPort.onDisconnect.addListener(function () {
    extensionPort.onMessage.removeListener(extensionListener);
    console.log('Extension Disconnected');
  });
});

// Relays messages from content script to the extension (store.ts)
chrome.runtime.onMessage.addListener(function (message) {
  // console.log(
  //   'this is the message being received in the service Worker:',
  //   message
  // );
  port.postMessage(message);
  // switch (message.destination) {
  //   case 'extension':
  //     port.postMessage(
  //       `relayed message from the content script: ${JSON.stringify(message)}`
  //     );
  //     break;
  //   case 'serviceWorker':
  //     console.log(
  //       `received message from the content script: ${JSON.stringify(message)}`
  //     );
  //     break;
  //   default:
  //     console.log(
  //       'error occurred relaying message to the extension in the service worker:',
  //       JSON.stringify(message)
  //     );
  // }
});
