<script lang="ts">
  import { rootNodes, connected } from '../../store';

  function Message(
    action: 'connect' | 'message contentScript' | 'message serviceWorker',
    body: string | number
  ) {
    this.action = action;
    this.body = body;
    this.source = 'extension';
  }
  const nodeMap = new Map();

  // sets up connection between service worker, extension, and content scripts
  const connectToServiceWorker = () => {
    const connection = chrome.runtime.connect();

    connection.onMessage.addListener(function (message) {
      if (message === 'successfully connected') {
        connected.set(true);
      } else {
        switch (message.type) {
          // used when refreshing page or disconnecting
          case 'clear': {
            rootNodes.set([]);
            break;
          }

          // add nodes to the nodeMap
          case 'addNode': {
            const node = message.node;
            node.children = [];
            // node.collapsed = true;
            node.invalidate = noop;

            const targetNode = nodeMap.get(message.target);
            nodeMap.set(node.id, node);

            if (targetNode) {
              insertNode(node, targetNode, message.anchor);
              return;
            }

            if (node._timeout) return;

            node._timeout = setTimeout(() => {
              delete node._timeout;
              const targetNode = nodeMap.get(message.target);
              if (targetNode) insertNode(node, targetNode, message.anchor);
              else {
                node.tagName = 'Root';
                rootNodes.set([node]);
              }
            }, 100);

            break;
          }

          // update nodes within the nodeMap
          case 'updateNode': {
            const node = nodeMap.get(message.node.id);

            Object.assign(node, message.node);

            node.invalidate();

            break;
          }

          // remove nodes from the nodeMap
          case 'removeNode': {
            const node = nodeMap.get(message.node.id);
            nodeMap.delete(node.id);

            if (!node.parent) break;

            const index = node.parent.children.findIndex(
              (obj) => obj.id == node.id
            );
            node.parent.children.splice(index, 1);

            node.parent.invalidate();

            break;
          }
        }
      }
    });

    // Relay the tab ID to the service worker and initiate connect event
    connection.postMessage(
      new Message('connect', chrome.devtools.inspectedWindow.tabId)
    );

    function insertNode(node, target, anchorId: number): void {
      node.parent = target;

      let index = -1;
      if (anchorId)
        index = target.children.findIndex((obj) => obj.id == anchorId);

      if (index != -1) {
        target.children.splice(index, 0, node);
      } else {
        target.children.push(node);
      }

      target.invalidate();
    }

    function noop() {}
  };
  // function takes as input a ctx array and returns a processed ctx without functions
  export function process_ctx(ctx_array: any[]): any[] {
    // helper function that returns boolean based on if the element contains a function
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
    return processed_ctx;
  }
</script>

<div>
  <button on:click={connectToServiceWorker}> Connect </button>
</div>

<style>
  div {
    height: 100vh;
    width: 100vw;
  }
</style>
