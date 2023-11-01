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
      console.log('this is a message received in the connect.svelte:', message);
      if (message === 'successfully connected') {
        connected.set(true);
      } else {
        // const parsedMessage = JSON.parse(message);
        const parsedMessage = message;
        switch (parsedMessage.type) {
          // used when refreshing page or disconnecting
          case 'clear': {
            rootNodes.set([]);
            break;
          }

          // add nodes to the nodeMap
          case 'addNode': {
            // console.log('received a parsedMessage trying to add a node:', parsedMessage);
            const node = parsedMessage.node;
            node.children = [];
            // node.collapsed = true;
            node.invalidate = noop;

            const targetNode = nodeMap.get(parsedMessage.target);
            nodeMap.set(node.id, node);

            if (targetNode) {
              insertNode(node, targetNode, parsedMessage.anchor);
              return;
            }

            if (node._timeout) return;

            node._timeout = setTimeout(() => {
              delete node._timeout;
              const targetNode = nodeMap.get(parsedMessage.target);
              if (targetNode)
                insertNode(node, targetNode, parsedMessage.anchor);
              else {
                node.tagName = 'Root';
                rootNodes.set([node]);
              }
            }, 100);

            break;
          }

          // update nodes within the nodeMap
          case 'updateNode': {
            // console.log('received a parsedMessage trying to updateNode:', parsedMessage);
            const node = nodeMap.get(parsedMessage.node.id);

            Object.assign(node, parsedMessage.node);

            node.invalidate();

            break;
          }

          // remove nodes from the nodeMap
          case 'removeNode': {
            // console.log('received a parsedMessage trying to removeNode:', parsedMessage);
            const node = nodeMap.get(parsedMessage.node.id);
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
