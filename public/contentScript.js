console.log('contentScript successfully injected');

function Message(body, destination) {
  this.body = body;
  this.source = 'contentScript';
  this.destination = destination;
}

chrome.runtime.sendMessage(new Message('hello extension', 'extension'));
chrome.runtime.sendMessage(new Message('hello serviceWorker', 'serviceWorker'));

chrome.runtime.onMessage.addListener((message) => {
  //listens to messages from content script
  console.log('this is a message received in the content script:', message);
});

// // map that will store all nodes
// const nodeMap = new Map();
// console.log('nodeMap:', nodeMap);

// //unique id attached to each node
// let _id = 0;

// // ========================================================================================
// //          MESSAGE FUNCTIONS
// // ========================================================================================

// console.log('contentMain running');

// // sends message which triggers adding of node
// function addViaMessage(node) {
//   console.log('addViaMessage:', node);
//   window.postMessage({
//     target: node.parent ? node.parent.id : null,
//     type: 'addNode',
//     node: processNode(node),
//     source: 'contentMain.js',
//   });
// }

// // sends message which triggers updating of node
// function updateViaMessage(node) {
//   // console.log('updateViaMessage:', node);
//   window.postMessage({
//     type: 'updateNode',
//     node: processNode(node),
//     source: 'contentMain.js',
//   });
// }

// // sends message which triggers removal of node
// function removeViaMessage(node) {
//   // console.log('removeViaMessage:', node);
//   window.postMessage({
//     type: 'removeNode',
//     node: processNode(node),
//     source: 'contentMain.js',
//   });
// }

// // ========================================================================================
// //          NODE PROCESSING
// // ========================================================================================

// // receives node and processes it for relevant information
// function processNode(node) {
//   // cleaned-up node template
//   const processedNode = {
//     id: node.id,
//     type: node.type,
//     tagName: node.tagName,
//   };

//   //check for component type node or text type node
//   switch (node.type) {
//     case 'component': {
//       if (!node.detail.$$) {
//         processedNode.detail = {};
//         break;
//       }
//       const internal = node.detail.$$;
//       // Older versions of Svelte stored props in an array
//       const props = Array.isArray(internal.props)
//         ? internal.props
//         : Object.keys(internal.props);
//       let ctx = deepClone(node.detail.$capture_state());
//       if (ctx === undefined) ctx = {};

//       processedNode.detail = {
//         attributes: props.flatMap((key) => {
//           const value = ctx[key];
//           delete ctx[key];
//           return value === undefined
//             ? []
//             : { key, value, isBound: key in internal.bound };
//         }),
//         listeners: Object.entries(internal.callbacks).flatMap(
//           ([event, value]) =>
//             value.map((obj) => ({ event, handler: obj.toString() }))
//         ),
//         ctx: Object.entries(ctx).map(([key, value]) => ({ key, value })),
//       };
//       break;
//     }

//     case 'element': {
//       const element = node.detail;
//       processedNode.detail = {
//         attributes: Array.from(element.attributes).map((attr) => ({
//           key: attr.name,
//           value: attr.value,
//         })),
//         listeners: element.__listeners
//           ? element.__listeners.map((obj) => ({
//               ...obj,
//               handler: obj.handler.toString(),
//             }))
//           : [],
//       };
//       break;
//     }
//   }
//   return processedNode;
// }

// function deepClone(value, seen = new Map()) {
//   switch (typeof value) {
//     case 'function':
//       return { __isFunction: true, source: value.toString(), name: value.name };
//     case 'symbol':
//       return { __isSymbol: true, name: value.toString() };
//     case 'object':
//       if (value === window || value === null) return null;
//       if (Array.isArray(value)) return value.map((obj) => deepClone(obj, seen));
//       if (seen.has(value)) return {};

//       const obj = {};
//       seen.set(value, obj);

//       for (const [key, val] of Object.entries(value)) {
//         obj[key] = deepClone(val, seen);
//       }

//       return obj;
//     default:
//       return value;
//   }
// }

// // array to hold root node
// const rootNodes = [];

// // ========================================================================================
// //          DOM NODE FUNCTIONS
// // ========================================================================================

// // called by the SvelteDOMInsert callback
// function insert(element, target, anchor) {
//   const node = {
//     id: _id++,
//     type:
//       element.nodeType == 1
//         ? 'element'
//         : element.nodeValue && element.nodeValue != ' '
//         ? 'text'
//         : 'anchor',
//     detail: element,
//     tagName: element.nodeName.toLowerCase(),
//     parentBlock: currentBlock,
//     children: [],
//   };
//   addNode(node, target, anchor);

//   for (const child of element.childNodes) {
//     if (!nodeMap.has(child)) insert(child, element);
//   }
// }

// // called by insert()
// function addNode(node, target, anchor) {
//   nodeMap.set(node.id, node);
//   nodeMap.set(node.detail, node);

//   let targetNode = nodeMap.get(target);

//   if (!targetNode || targetNode.parentBlock != node.parentBlock) {
//     targetNode = node.parentBlock;
//   }

//   node.parent = targetNode;

//   const anchorNode = nodeMap.get(anchor);

//   if (targetNode) {
//     let index = -1;
//     if (anchorNode) index = targetNode.children.indexOf(anchorNode);

//     if (index != -1) {
//       targetNode.children.splice(index, 0, node);
//     } else {
//       targetNode.children.push(node);
//     }
//   } else {
//     rootNodes.push(node);
//   }
//   addViaMessage(node, anchorNode);
// }

// function removeNode(node) {
//   if (!node) return;

//   nodeMap.delete(node.id);
//   nodeMap.delete(node.detail);

//   const index = node.parent.children.indexOf(node);
//   node.parent.children.splice(index, 1);
//   node.parent = null;

//   removeViaMessage(node);
// }

// // ========================================================================================
// //          EVENT CALLBACK FUNCTIONS
// // ========================================================================================

// let currentBlock;

// function EVENT_CALLBACK_SvelteRegisterBlock(e) {
//   const { type, id, block, ...detail } = e.detail;
//   const tagName = type == 'pending' ? 'await' : type;
//   const nodeId = _id++;

//   function updateProfile(node, type, fn, ...args) {
//     fn(...args);
//   }

//   if (block.m) {
//     const mountFn = block.m;
//     block.m = (target, anchor) => {
//       const parentBlock = currentBlock;
//       let node = {
//         id: nodeId,
//         type: 'block',
//         detail,
//         tagName,
//         parentBlock,
//         children: [],
//       };

//       switch (type) {
//         case 'then':
//         case 'catch':
//           if (!node.parentBlock) node.parentBlock = lastPromiseParent;
//           break;

//         case 'slot':
//           node.type = 'slot';
//           break;

//         case 'component':
//           const componentNode = nodeMap.get(block);
//           if (componentNode) {
//             nodeMap.delete(block);
//             Object.assign(node, componentNode);
//           } else {
//             Object.assign(node, {
//               type: 'component',
//               tagName: 'Unknown',
//               detail: {},
//             });
//             nodeMap.set(block, node);
//           }

//           Promise.resolve().then(
//             () =>
//               node.detail.$$ &&
//               Object.keys(node.detail.$$.bound).length &&
//               updateViaMessage(node)
//           );
//           break;
//       }

//       if (type == 'each') {
//         let group = nodeMap.get(parentBlock.id + id);
//         if (!group) {
//           group = {
//             id: _id++,
//             type: 'block',
//             detail: {
//               ctx: {},
//               source: detail.source,
//             },
//             tagName: 'each',
//             parentBlock,
//             children: [],
//           };
//           nodeMap.set(parentBlock.id + id, group);
//           addNode(group, target, anchor);
//         }
//         node.parentBlock = group;
//         node.type = 'iteration';
//         addNode(node, group, anchor);
//       } else {
//         addNode(node, target, anchor);
//       }

//       currentBlock = node;
//       updateProfile(node, 'mount', mountFn, target, anchor);
//       currentBlock = parentBlock;
//     };
//   }

//   if (block.p) {
//     const patchFn = block.p;
//     block.p = (changed, ctx) => {
//       const parentBlock = currentBlock;
//       currentBlock = nodeMap.get(nodeId);
//       updateViaMessage(currentBlock);
//       updateProfile(currentBlock, 'patch', patchFn, changed, ctx);
//       currentBlock = parentBlock;
//     };
//   }

//   if (block.d) {
//     const detachFn = block.d;
//     block.d = (detach) => {
//       const node = nodeMap.get(nodeId);

//       if (node) {
//         if (node.tagName == 'await') lastPromiseParent = node.parentBlock;
//         removeNode(node);
//       }
//       updateProfile(node, 'detach', detachFn, detach);
//     };
//   }
// }

// //function is called when the 'SvelteRegisterComponent' event is dispatched
// function EVENT_CALLBACK_SvelteRegisterComponent(event) {
//   const { component, tagName } = event.detail;

//   //grab the contentMain element associated with the node
//   const node = nodeMap.get(component.$$.fragment);

//   //if it exists, update the nodeMap. else add it to the nodeMap.
//   if (node) {
//     nodeMap.delete(component.$$.fragment);

//     node.detail = component;
//     node.tagName = tagName;

//     updateViaMessage(node);
//   } else {
//     nodeMap.set(component.$$.fragment, {
//       type: 'component',
//       detail: component,
//       tagName,
//     });
//   }
// }

// //function is called when the 'SvelteDOMInsert' event is dispatched
// function EVENT_CALLBACK_SvelteDOMInsert(event) {
//   const { node: element, target, anchor } = event.detail;
//   console.log('event.detail:', event.detail);

//   insert(element, target, anchor);
// }

// function EVENT_CALLBACK_SvelteDOMSetData(event) {
//   const node = nodeMap.get(event.detail.node);
//   if (!node) return;

//   if (node.type == 'anchor') node.type = 'text';

//   updateViaMessage(node);
// }

// function EVENT_CALLBACK_SvelteDOMRemove(event) {
//   const node = nodeMap.get(event.detail.node);

//   if (!node) return;
//   removeNode(node);
// }

// // ========================================================================================
// //          SETUP
// // ========================================================================================

// function SVOLTE_SETUP(root) {
//   root.addEventListener(
//     'SvelteRegisterBlock',
//     EVENT_CALLBACK_SvelteRegisterBlock
//   );
//   root.addEventListener(
//     'SvelteRegisterComponent',
//     EVENT_CALLBACK_SvelteRegisterComponent
//   );
//   root.addEventListener('SvelteDOMInsert', EVENT_CALLBACK_SvelteDOMInsert);
//   root.addEventListener('SvelteDOMSetData', EVENT_CALLBACK_SvelteDOMSetData);
//   root.addEventListener('SvelteDOMRemove', EVENT_CALLBACK_SvelteDOMRemove);
// }

// SVOLTE_SETUP(window.document);
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
