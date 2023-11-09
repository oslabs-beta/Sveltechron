<script lang="ts">
  import { rootNodes, connected } from '../../store';

  const nodeMap = new Map();

  // sets up connection between service worker, extension, and content scripts
  const connectToServiceWorker = () => {
    const connection = chrome.runtime.connect();

    // Relay the tab ID to the service worker and initiate connect event
    connection.postMessage({
      action: 'connect',
      body: chrome.devtools.inspectedWindow.tabId,
    });

    connection.onMessage.addListener(function (message) {
      //listen for message from serviceWorker
      if (message === 'successfully connected') {
        //so that the main panel can conditionally render
        connected.set(true);
      } else {
        switch (message.type) {
          // add nodes to the nodeMap
          case 'addNode': {
            const node = message.node;
            node.children = [];

            const target = nodeMap.get(message.target);
            nodeMap.set(node.id, node);

            if (target) {
              insert(node, target);
              return;
            }

            if (node.delay) return;

            node.delay = setTimeout(() => {
              delete node.delay;
              const target = nodeMap.get(message.target);
              if (target) insert(node, target);
              else {
                node.tagName = 'Root';
                rootNodes.set([node]);
              }
            }, 100);

            break;
          }
        }
      }
    });

    function insert(node, target): void {
      node.parent = target;

      let index = -1;

      if (index != -1) {
        target.children.splice(index, 0, node);
      } else {
        target.children.push(node);
      }
    }
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
