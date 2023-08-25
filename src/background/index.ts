import { storage } from "../storage.js";

chrome.runtime.onInstalled.addListener(() => {
    storage.get().then(console.log);
});
