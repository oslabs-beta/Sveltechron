<script lang="ts">
  import { onMount } from 'svelte';
  import svelteLogo from './assets/svelte.svg';
  import viteLogo from '/vite.svg';
  import Counter from './lib/Counter.svelte';
  import DummyTree from './dummyTree.svelte';
  import { svelteParser } from './util/parser.ts';
  import Navbar from './components/navbar/navbar.svelte';
  import Footer from './components/footer/footer.svelte';

  let arrFiles: any;

  async function getData() {
    try {
      const data = await svelteParser();
      arrFiles = JSON.stringify(data);
      // arrFiles = "hello";
      return arrFiles;
    } catch (error) {
      console.error('Error fetching data');
    }
  }

  onMount(async () => {
    await getData();
  });

  // async function getData() {
  //   new Promise(async (resolve, reject) => {
  //     const data = await svelteParser();
  //     resolve(data);
  //   }).then((data) => {
  //     arrFiles = JSON.stringify(data);
  //     return arrFiles;
  //   });
  // }

  // onMount(() => {
  //   async function parseSvelte() {
  //     const targetAppFiles = await new Promise((resolve, reject) => {
  //       chrome.devtools.inspectedWindow.getResources((resources) => {
  //         const filteredResources = resources.filter((file) =>
  //           file.url.includes(".svelte")
  //         );
  //         if (filteredResources) resolve(filteredResources);
  //         else reject("No Svelte Resources Found");
  //       });
  //     });
  //   }

  //   function getData() {
  //     new Promise(async (resolve, reject) => {
  //       const data = await parseSvelte();
  //       resolve(data);
  //     }).then((data) => {
  //       console.log(data);
  //     });
  //   }
  // });
  // const data = getData();
</script>

<main class="grid">
  <div class="header">
    <Navbar />
  </div>
  <div class="footer">
    <Footer />
  </div>
  <div class="content">Content</div>
  <div class="sidebar">Sidebar</div>

  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
  <div>
    <DummyTree />
  </div>
  <div><h1>{arrFiles}</h1></div>
</main>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-auto-rows: minmax(100px, auto); */
    grid-template:
      'sd hd hd hd'
      'sd main main main'
      'ft ft ft ft';
    width: 100vw;
  }

  .header {
    grid-area: hd;
    background-color: yellow;
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
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
