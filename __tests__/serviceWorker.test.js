import { mount, mock } from 'vitest';
import '../public/serviceWorker';

// Mock chrome.runtime
const runtimeMock = mock(chrome, 'runtime');

describe('Background Script', () => {
  it('should handle extension connection and relay messages', () => {
    // Arrange
    const extensionPort = {
      onMessage: {
        addListener: jest.fn(),
        removeListener: jest.fn(),
      },
      onDisconnect: {
        addListener: jest.fn(),
      },
      postMessage: jest.fn(),
    };

    runtimeMock.onConnect.addListener.mock.calls[0][0](extensionPort);

    // Act
    extensionPort.onMessage.addListener.mock.calls[0][0]({
      action: 'connect',
      body: 123, // Replace with the desired tabId value
    });

    // Assert
    expect(extensionPort.postMessage).toHaveBeenCalledWith(
      'successfully connected'
    );

    // Act
    extensionPort.onDisconnect.addListener.mock.calls[0][0]();

    // Assert
    expect(extensionPort.onMessage.removeListener).toHaveBeenCalled();
  });

  it('should relay messages from content script to the extension', () => {
    // Arrange
    const message = {
      // Your message properties
    };

    // Act
    runtimeMock.onMessage.addListener.mock.calls[0][0](message);

    // Assert
    expect(extensionPort.postMessage).toHaveBeenCalledWith(message);
  });
});

// Run the tests
mount();
