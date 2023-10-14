window.document.addEventListener('dblclick', async () => {
  console.log('I dblclicked and message sent');
  const response = await chrome.runtime.sendMessage({ greeting: 'hello' });

  console.log(
    'this is the response that is sent from the content script:',
    response
  );
});
