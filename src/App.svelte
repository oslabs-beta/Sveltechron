<script lang="ts">
  import { onMount } from 'svelte';
  import svelteLogo from './assets/svelte.svg';
  import viteLogo from '/vite.svg';
  import Counter from './lib/Counter.svelte';
  import DummyTree from './dummyTree.svelte';
  import { svelteParser } from './util/parser.ts';
  import Navbar from './components/navbar/navbar.svelte';
  import Footer from './components/footer/footer.svelte';
  import Sidebar from './components/sidebar/sidebar.svelte';

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
</script>

<main class="grid">
  <div class="header">
    <Navbar />
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

  <div />
  <div><h1>{arrFiles}</h1></div>
</main>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    /* grid-auto-rows: minmax(100px, auto); */
    grid-template:
      'sd hd hd hd hd hd hd hd'
      'sd main main main main main main main'
      'ft ft ft ft ft ft ft ft';
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
</style>
