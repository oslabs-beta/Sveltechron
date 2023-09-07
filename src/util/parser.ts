import { parse, walk } from 'svelte/compiler';

// let appFiles;

// async function appFiles() {

// try { chrome.devtools.inspectedWindow.getResources(res => {
  
//   const filteredFiles = res.filter((el) => {
//     el.url.includes('.svelte');
//   })
//   return filteredFiles;
// })
// } catch {
//   return `didn't work`;
// }
// }

// const files = appFiles();

// export default files;
export const arrSvelteFiles = await new Promise((resolve, reject) => {
  chrome.devtools.inspectedWindow.getResources((resources) => {
    const filteredResources = resources.filter((file) =>
      file.url.includes('.svelte')
    );
    if (filteredResources) resolve(filteredResources);
    else reject('No Svelte Resources Found');
  });
});