<script lang="ts">
  import { onMount } from 'svelte';
  import DummyTree from './dummyTree.svelte';
  import Navbar from './components/navbar/navbar.svelte';
  import Footer from './components/footer/footer.svelte';
  import Sidebar from './components/sidebar/sidebar.svelte';
  import ClearButton from './components/sidebar/clearButton.svelte';

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(
      sender.tab
        ? 'from a content script:' + sender.tab.url
        : 'from the extension'
    );
    if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' });
  });
</script>

<!-- <svelte:window on:keydown={() => console.log('this works')} /> -->

<main class="grid">
  <div class="header">
    <Navbar />
  </div>
  <div class="clear">
    <ClearButton />
  </div>
  <div class="footer">
    <Footer />
  </div>
  <div class="content">
    <DummyTree />
  </div>
  <div class="sidebar">
    <Sidebar />
  </div>
</main>

<style>
  main {
    height: 100vh;
    width: 100%;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template:
      'clr clr hd hd hd  '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'sd sd  main main main '
      'ft ft ft ft ft '
      'ft ft ft ft ft '
      'ft ft ft ft ft '
      'ft ft ft ft ft ';
  }

  .clear {
    grid-area: clr;
  }

  .header {
    grid-area: hd;
    background-color: white;
  }

  .footer {
    grid-area: ft;
    background-color: red;
  }

  .content {
    grid-area: main;
    background-color: green;
  }

  .sidebar {
    grid-area: sd;
    background-color: blue;
    width: 15vw;
    /* overwrites automatic grid spacing to give the sidebar more space */
  }
</style>
