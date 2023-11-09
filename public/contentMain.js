console.log('contentMain successfully injected');

// store all the nodes in a map
const nodeMap = new Map();

//each node gets a unique id
let _id = 0;

// **************************** MESSAGING *************************************

// add node by sending a message
function addNodeByMessage(node) {
  window.postMessage({
    target: node.parent ? node.parent.id : null,
    type: 'addNode',
    node: processNode(node),
  });
}

// update node by sending a message
function updateNodeByMessage(node) {
  window.postMessage({
    type: 'updateNode',
    node: processNode(node),
  });
}

// delete node by sending message
function deleteNodeByMessage(node) {
  window.postMessage({
    type: 'removeNode',
    node: processNode(node),
  });
}

//*******************************  PROCESSING NODES ******************************************

// gets node and extracts info
function extractNode(node) {
  const extractedDetails = {
    tagName: node.tagName,
    type: node.type,
    id: node.id,
  };

  //check for component type node or text type node
  switch (node.type) {
    case 'component': {
      if (!node.detail.$$) {
        extractedDetails.detail = {};
        break;
      }
      const internal = node.detail.$$;
      // Older versions of Svelte stored props in an array
      const props = Array.isArray(internal.props)
        ? internal.props
        : Object.keys(internal.props);
      let ctx = multiCloner(node.detail.$capture_state());
      if (ctx === undefined) ctx = {};

      extractedDetails.detail = {
        attributes: props.flatMap((key) => {
          const value = ctx[key];
          delete ctx[key];
          return value === undefined
            ? []
            : { key, value, isBound: key in internal.bound };
        }),
        listeners: Object.entries(internal.callbacks).flatMap(
          ([event, value]) =>
            value.map((obj) => ({ event, handler: obj.toString() }))
        ),
        ctx: Object.entries(ctx).map(([key, value]) => ({ key, value })),
      };
      break;
    }

    case 'element': {
      const element = node.detail;
      extractedDetails.detail = {
        attributes: Array.from(element.attributes).map((attr) => ({
          key: attr.name,
          value: attr.value,
        })),
        listeners: element.__listeners
          ? element.__listeners.map((obj) => ({
              ...obj,
              handler: obj.handler.toString(),
            }))
          : [],
      };
      break;
    }
  }
  return extractedDetails;
}

function multiCloner(value, seen = new Map()) {
  switch (typeof value) {
    case 'function':
      return { __isFunction: true, source: value.toString(), name: value.name };
    case 'symbol':
      return { __isSymbol: true, name: value.toString() };
    case 'object':
      if (value === window || value === null) return null;
      if (Array.isArray(value))
        return value.map((obj) => multiCloner(obj, seen));
      if (seen.has(value)) return {};

      const obj = {};
      seen.set(value, obj);

      for (const [key, val] of Object.entries(value)) {
        obj[key] = multiCloner(val, seen);
      }

      return obj;
    default:
      return value;
  }
}

const rootNodes = [];

//**************************** NODE FUNCTIONS FOR DOM *****************************************

// insertNodeToDOM calls this
function addNodeToDOM(node, target, anchor) {
  nodeMap.set(node.id, node);
  nodeMap.set(node.detail, node);

  let targetNode = nodeMap.get(target);

  if (!targetNode || targetNode.parentBlock != node.parentBlock) {
    targetNode = node.parentBlock;
  }

  node.parent = targetNode;

  const anchorNode = nodeMap.get(anchor);

  if (targetNode) {
    let index = -1;
    if (anchorNode) index = targetNode.children.indexOf(anchorNode);

    if (index != -1) {
      targetNode.children.splice(index, 0, node);
    } else {
      targetNode.children.push(node);
    }
  } else {
    rootNodes.push(node);
  }
  addNodeByMessage(node, anchorNode);
}

// SvelteInsertDOM calls this
function insertNodeToDOM(element, target, anchor) {
  const node = {
    id: _id++,
    type:
      element.nodeType == 1
        ? 'element'
        : element.nodeValue && element.nodeValue != ' '
        ? 'text'
        : 'anchor',
    detail: element,
    tagName: element.nodeName.toLowerCase(),
    parentBlock: currentBlock,
    children: [],
  };
  addNodeToDOM(node, target, anchor);

  for (const child of element.childNodes) {
    if (!nodeMap.has(child)) insertNodeToDOM(child, element);
  }
}

function removeNodeFromDOM(node) {
  if (!node) return;

  nodeMap.delete(node.id);
  nodeMap.delete(node.detail);

  console.log('this is the node:', node);
  const index = node.parent.children.indexOf(node);
  node.parent.children.splice(index, 1);
  node.parent = null;

  removeNodeByMessage(node);
}

//*****************************  CALLBACK FUNCTIONS FOR EVENTS  *****************************************

let currentBlock;

function blockRegistration(e) {
  const { type, id, block, ...detail } = e.detail;
  const tagName = type == 'pending' ? 'await' : type;
  const nodeId = _id++;

  function updateProfile(node, type, fn, ...args) {
    fn(...args);
  }

  if (block.m) {
    const mountFn = block.m;
    block.m = (target, anchor) => {
      const parentBlock = currentBlock;
      let node = {
        id: nodeId,
        type: 'block',
        detail,
        tagName,
        parentBlock,
        children: [],
      };

      switch (type) {
        case 'then':
        case 'catch':
          if (!node.parentBlock) node.parentBlock = lastPromiseParent;
          break;

        case 'slot':
          node.type = 'slot';
          break;

        case 'component':
          const componentNode = nodeMap.get(block);
          if (componentNode) {
            nodeMap.delete(block);
            Object.assign(node, componentNode);
          } else {
            Object.assign(node, {
              type: 'component',
              tagName: 'Unknown',
              detail: {},
            });
            nodeMap.set(block, node);
          }

          Promise.resolve().then(
            () =>
              node.detail.$$ &&
              Object.keys(node.detail.$$.bound).length &&
              updateNodeByMessage(node)
          );
          break;
      }

      if (type == 'each') {
        let group = nodeMap.get(parentBlock.id + id);
        if (!group) {
          group = {
            id: _id++,
            type: 'block',
            detail: {
              ctx: {},
              source: detail.source,
            },
            tagName: 'each',
            parentBlock,
            children: [],
          };
          nodeMap.set(parentBlock.id + id, group);
          addNodeToDOM(group, target, anchor);
        }
        node.parentBlock = group;
        node.type = 'iteration';
        addNodeToDOM(node, group, anchor);
      } else {
        addNodeToDOM(node, target, anchor);
      }

      currentBlock = node;
      updateProfile(node, 'mount', mountFn, target, anchor);
      currentBlock = parentBlock;
    };
  }

  if (block.p) {
    const patchFn = block.p;
    block.p = (changed, ctx) => {
      const parentBlock = currentBlock;
      currentBlock = nodeMap.get(nodeId);
      updateNodeByMessage(currentBlock);
      updateProfile(currentBlock, 'patch', patchFn, changed, ctx);
      currentBlock = parentBlock;
    };
  }

  if (block.d) {
    const detachFn = block.d;
    block.d = (detach) => {
      const node = nodeMap.get(nodeId);

      if (node) {
        if (node.tagName == 'await') lastPromiseParent = node.parentBlock;
        removeNodeFromDOM(node);
      }
      updateProfile(node, 'detach', detachFn, detach);
    };
  }
}

//this is called in response to 'SvelteRegisterComponent' message
function registerSvelteComponent(event) {
  const { component, tagName } = event.detail;

  //get node content
  const node = nodeMap.get(component.$$.fragment);

  //update if already there, and add if it isn't there yet
  if (node) {
    nodeMap.delete(component.$$.fragment);

    node.detail = component;
    node.tagName = tagName;

    updateNodeByMessage(node);
  } else {
    nodeMap.set(component.$$.fragment, {
      type: 'component',
      detail: component,
      tagName,
    });
  }
}

//this is called in response to 'SvelteDOMInsert' message
function svelteInsertDOM(event) {
  const { node: element, target, anchor } = event.detail;

  insertNodeToDOM(element, target, anchor);
}

function svelteRemoveDOM(event) {
  const node = nodeMap.get(event.detail.node);

  if (!node) return;
  removeNodeFromDOM(node);
}

function svelteSetDOMData(event) {
  const node = nodeMap.get(event.detail.node);
  if (!node) return;

  if (node.type == 'anchor') node.type = 'text';

  updateNodeByMessage(node);
}

//******************* SVELTECHRON, ROLL OUT!!! **************************************

function INITIATE_SVELTECHRON(root) {
  root.addEventListener('SvelteRegisterBlock', blockRegistration);
  root.addEventListener('SvelteRegisterComponent', registerSvelteComponent);
  root.addEventListener('SvelteDOMInsert', svelteInsertDOM);
  root.addEventListener('SvelteDOMSetData', svelteSetDOMData);
  root.addEventListener('SvelteDOMRemove', svelteRemoveDOM);
}

INITIATE_SVELTECHRON(window.document);
