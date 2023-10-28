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
        port = extensionPort;
        // Inject a content script into the identified tab
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ['contentScript.js'],
        });
        break;
      case 'message contentScript':
        //relay message from extension to contentScript
        chrome.tabs.sendMessage(tabId, message);

        break;
      default:
        console.log(
          'error occurred relaying message to the content script in the service worker:',
          message
        );
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
  switch (message.destination) {
    case 'extension':
      port.postMessage(
        `relayed message from the content script: ${JSON.stringify(message)}`
      );
      break;
    case 'serviceWorker':
      console.log(
        `received message from the content script: ${JSON.stringify(message)}`
      );
      break;
    default:
      console.log(
        'error occurred relaying message to the extension in the service worker:',
        JSON.stringify(message)
      );
  }
});
