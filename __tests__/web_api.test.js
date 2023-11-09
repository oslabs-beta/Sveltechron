import { mount } from 'vitest';
import { addNodeByMessage } from '../public/contentMain'; // Update the path accordingly

// Mock the window.postMessage method
window.postMessage = jest.fn();

// Mock the processNode function
jest.mock('./your-process-node-file', () => ({
  processNode: jest.fn((node) => node), // Assuming processNode just returns the input node for simplicity
}));

describe('addNodeByMessage', () => {
  it('should call postMessage with the correct parameters', () => {
    // Arrange
    const node = {
      id: 1,
      parent: {
        id: 2,
      },
      // Other properties of your node object
    };

    // Act
    addNodeByMessage(node);

    // Assert
    expect(window.postMessage).toHaveBeenCalledWith({
      target: node.parent ? node.parent.id : null,
      type: 'addNode',
      node: node, // Assuming processNode just returns the input node for simplicity
      source: 'content.js',
    });
  });
});

// Run the tests
mount();
