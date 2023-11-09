import { mount, mock } from 'vitest';
import { addNodeByMessage, extractNode } from '../public/contentMain'; // Update the path accordingly

// Mock window.postMessage
const postMessageMock = mock(window, 'postMessage');

// Mock processNode function
const processNodeMock = mock(
  './your-process-node-file',
  'processNode',
  (node) => node
);

describe('addNodeByMessage', () => {
  it('should call postMessage with the correct parameters', () => {
    // Arrange
    const node = {
      parent: {
        id: 1,
      },
      // Other properties of your node object
    };

    // Act
    addNodeByMessage(node);

    // Assert
    postMessageMock.assertCalledWith({
      target: node.parent ? node.parent.id : null,
      type: 'addNode',
      node: node, // Assuming processNode just returns the input node for simplicity
    });

    // Optionally, you can also assert that the processNode function is called
    processNodeMock.assertCalledWith(node);
  });
});

// Run the tests
mount();

import { mount } from 'vitest';
import { extractNode } from './your-extract-node-file'; // Update the path accordingly

describe('extractNode', () => {
  it('should extract details for a component node', () => {
    // Arrange
    const componentNode = {
      type: 'component',
      detail: {
        $$: {
          props: { prop1: 'value1', prop2: 'value2' },
          bound: { prop1: true },
          callbacks: {
            click: [{ toString: () => 'handleClick' }],
            hover: [{ toString: () => 'handleHover' }],
          },
        },
        $capture_state: () => ({ capturedState: 'capturedValue' }),
      },
    };

    // Act
    const result = extractNode(componentNode);

    // Assert
    expect(result).toEqual({
      tagName: undefined, // Assuming tagName is not used for components
      type: 'component',
      id: undefined, // Assuming id is not used for components
      detail: {
        attributes: [
          { key: 'prop1', value: 'value1', isBound: true },
          { key: 'prop2', value: 'value2', isBound: false },
        ],
        listeners: [
          { event: 'click', handler: 'handleClick' },
          { event: 'hover', handler: 'handleHover' },
        ],
        ctx: [{ key: 'capturedState', value: 'capturedValue' }],
      },
    });
  });

  it('should extract details for an element node', () => {
    // Arrange
    const elementNode = {
      type: 'element',
      detail: {
        attributes: [{ name: 'attr1', value: 'value1' }],
        __listeners: [{ event: 'click', handler: 'handleClick' }],
      },
    };

    // Act
    const result = extractNode(elementNode);

    // Assert
    expect(result).toEqual({
      tagName: undefined, // Assuming tagName is not used for elements
      type: 'element',
      id: undefined, // Assuming id is not used for elements
      detail: {
        attributes: [{ key: 'attr1', value: 'value1' }],
        listeners: [{ event: 'click', handler: 'handleClick' }],
      },
    });
  });
});

// Run the tests
mount();
