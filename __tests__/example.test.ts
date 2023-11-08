//these must be imported each time
import { fireEvent, render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Options from '../src/components/App.svelte';

global.chrome = {
  runtime: {
    connect: jest.fn(() => ({
      onMessage: {
        addListener: jest.fn((callback) => {
          // You can simulate a successful connection message here
          callback('successfully connected');
        }),
      },
      postMessage: jest.fn(),
    })),
  },
  devtools: {
    inspectedWindow: {
      tabId: '123', // Mock tab ID
    },
  },
};

describe('Options.svelte', () => {
  /**
   * @author Jay Kura
   * afterEach(() => cleanup()) is done automatically to clear the dom between tests
   */
  test('that shows count when rendered', () => {
    render(Options, { count: 2 });
    const count = screen.getByText('Current count:');
    expect(count).toHaveTextContent('Current count: 2');
  });
  test('number increments when plus button is clicked', async () => {
    render(Options, { count: 2 });
    const plusButton = screen.getByText('+');
    const count = screen.getByText('Current count:');
    await fireEvent.click(plusButton);
    expect(count).toHaveTextContent('Current count: 3');
  });
  test('number increments when minus button is clicked', async () => {
    render(Options, { count: 10 });
    console.log(screen.getByText('*'));
    const minusButton = screen.getByText('-');
    const count = screen.getByText('Current count:');
    await fireEvent.click(minusButton);
    expect(count).toHaveTextContent('Current count: 9');
  });
  test('devtools successfully connect to the app', async () => {
    // Render your component
    render(Options);

    // Simulate the click on the 'Connect' button
    const connectButton = screen.getByText('Connect');
    await fireEvent.click(connectButton);

    // Check if the connect method has been called
    expect(chrome.runtime.connect).toHaveBeenCalled();

    // Check if a message for a successful connection has been sent
    expect(chrome.runtime.connect().postMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        action: 'connect',
        body: chrome.devtools.inspectedWindow.tabId,
      })
    );
});
