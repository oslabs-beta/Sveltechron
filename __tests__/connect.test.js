import { mount, mock, trigger } from 'vitest';
import '../src/components/connect/connect.svelte'; // Update the path accordingly

describe('Svelte Component Tests', () => {
  it('should connect to service worker and set connected to true on successful connection', () => {
    // Mock the necessary dependencies
    const chromeRuntimeMock = mock('chrome.runtime', {
      connect: jest.fn(() => ({
        postMessage: jest.fn(),
        onMessage: { addListener: jest.fn() },
      })),
    });

    const chromeDevToolsMock = mock('chrome.devtools', {
      inspectedWindow: { tabId: 123 }, // Replace with the actual tabId
    });

    const storeMock = mock('../../store', {
      rootNodes: { set: jest.fn() },
      connected: { set: jest.fn() },
    });

    // Mount the component
    mount();

    // Trigger connectToServiceWorker function
    trigger('button', 'click');

    // Assertions
    expect(chromeRuntimeMock.connect).toHaveBeenCalled();
    expect(chromeRuntimeMock.postMessage).toHaveBeenCalledWith({
      action: 'connect',
      body: 123, // Replace with the actual tabId
    });
    expect(storeMock.connected.set).toHaveBeenCalledWith(true);
  });

  it('should add nodes to nodeMap and rootNodes on "addNode" message', () => {
    // Mock the necessary dependencies
    const chromeRuntimeMock = mock('chrome.runtime', {
      connect: () => ({
        postMessage: jest.fn(),
        onMessage: { addListener: jest.fn() },
      }),
    });

    const storeMock = mock('../../store', {
      rootNodes: { set: jest.fn() },
      connected: { set: jest.fn() },
    });

    // Mount the component
    mount();

    // Trigger connectToServiceWorker function
    trigger('button', 'click');

    // Trigger addNode message
    const messageHandler =
      chromeRuntimeMock.onMessage.addListener.mock.calls[0][0];
    messageHandler({ type: 'addNode', node: { id: 1, target: null } });

    // Assertions
    expect(storeMock.rootNodes.set).toHaveBeenCalledWith([
      { id: 1, children: [] },
    ]);
  });
});

// Run the tests
mount();
