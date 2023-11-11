// forward messages from contentMain to serviceWorker
window.addEventListener("message", (message) => {
  console.log("message in isolated", message);
  if (typeof message === "object") chrome.runtime.sendMessage(message.data);
});
