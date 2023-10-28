import { writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Message, Node, SnapShot, Difference } from './types';
import { write } from 'fs';
const { devtools, runtime } = chrome;

console.log('in store.ts');

const nodeMap = new Map();
export const rootNodes: Writable<Node[]> = writable([]);
export const selected: Writable<SnapShot> = writable(null);
export const treeData = writable({});
export const connected = writable(false);
// Create a connection to the service worker

// connected.subscribe((value) => {
//   console.log('connected:', get(connected));
//   if (value) {
//     getConnected();
//   }
// });

// DevTools page -- devtools.js
// Create a connection to the background page
const backgroundPageConnection = chrome.runtime.connect({
  name: 'devtools-page',
});

backgroundPageConnection.onMessage.addListener(function (message) {
  // Handle responses from the background page, if any
  console.log('message received in store.ts:', message);
});

// Relay the tab ID to the background page
backgroundPageConnection.postMessage({
  tabId: chrome.devtools.inspectedWindow.tabId,
  scriptToInject: 'content_script.js',
});

// runtime.onConnect.addListener(function (port) {
//   console.log(port, 'connected in the store.ts');
//   port.onMessage.addListener(function (msg) {
//     console.log('message received in store.ts:', msg);
//   });
// });

// chrome.runtime.onConnect.addListener(function (port) {
//   console.assert(port.name === 'knockknock');
//   console.assert(port.name === 'store');
//   port.onMessage.addListener(function (msg) {
//     console.log('message received in the serviceWorker:', msg);
//     if (msg.joke === 'Knock knock')
//       port.postMessage({ question: "Who's there?2" });
//     else if (msg.answer === 'Madame')
//       port.postMessage({ question: 'Madame who?2' });
//     else if (msg.answer === 'Madame... Bovary')
//       port.postMessage({ question: "I don't get it.2" });
//   });
// });

// export function reload() {
//   backgroundPageConnection.postMessage({
//     type: 'RELOAD',
//     tabId: devtools.inspectedWindow.tabId,
//   });
// ================================================================================
//              MESSAGING
// ================================================================================

// // establish connection
// const backgroundPageConnection = runtime.connect();

// // message background with tabID
// backgroundPageConnection.postMessage({
//   type: 'INIT',
//   tabId: devtools.inspectedWindow.tabId,
// });

// // listen for messages from background
// backgroundPageConnection.onMessage.addListener((message: Message) => {
//   console.log('this is the message:', message);
//   switch (message.type) {
//     // used when refreshing page or disconnecting
//     case 'clear': {
//       rootNodes.set([]);
//       break;
//     }

//     // add nodes to the nodeMap
//     case 'addNode': {
//       console.log('nodeAdded, message:', message);
//       const node: Node = message.node;
//       node.children = [];
//       // node.collapsed = true;
//       node.invalidate = noop;

//       const targetNode = nodeMap.get(message.target);
//       nodeMap.set(node.id, node);

//       if (targetNode) {
//         insertNode(node, targetNode, message.anchor);
//         return;
//       }

//       if (node._timeout) return;

//       node._timeout = setTimeout(() => {
//         delete node._timeout;
//         const targetNode = nodeMap.get(message.target);
//         if (targetNode) insertNode(node, targetNode, message.anchor);
//         else {
//           node.tagName = 'Root';
//           rootNodes.set([node]);
//         }
//       }, 100);

//       break;
//     }

//     // update nodes within the nodeMap
//     case 'updateNode': {
//       const node = nodeMap.get(message.node.id);

//       Object.assign(node, message.node);

//       node.invalidate();

//       break;
//     }

//     // remove nodes from the nodeMap
//     case 'removeNode': {
//       const node = nodeMap.get(message.node.id);
//       nodeMap.delete(node.id);

//       if (!node.parent) break;

//       const index = node.parent.children.findIndex((obj) => obj.id == node.id);
//       node.parent.children.splice(index, 1);

//       node.parent.invalidate();

//       break;
//     }
//   }
// });

// ================================================================================
//
// ================================================================================

function insertNode(node: Node, target: Node, anchorId: number): void {
  node.parent = target;

  let index = -1;
  if (anchorId) index = target.children.findIndex((obj) => obj.id == anchorId);

  if (index != -1) {
    target.children.splice(index, 0, node);
  } else {
    target.children.push(node);
  }

  target.invalidate();
}

function noop() {}

// function takes as input a ctx array and returns a processed ctx without functions
export function process_ctx(ctx_array: any[]): any[] {
  // helper function that returns boolean based on if the element contains a function

  console.log('ctx_array:', ctx_array);
  function hasFunction(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return false;
    }

    if (obj.__isFunction) {
      return true;
    }

    for (const key in obj) {
      if (typeof obj[key] === 'function' || hasFunction(obj[key])) {
        return true;
      }
    }
    return false;
  }

  // new array to hold processed ctx elements
  const processed_ctx = [];

  // iterate through the given ctx array and check for functions
  for (let i = 0; i < ctx_array.length; i++) {
    if (!hasFunction(ctx_array[i])) processed_ctx.push(ctx_array[i]);
  }
  console.log('processed_ctx', processed_ctx);
  return processed_ctx;
}
