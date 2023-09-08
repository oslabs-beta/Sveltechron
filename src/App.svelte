<script lang="ts">
  import svelteLogo from './assets/svelte.svg';
  import viteLogo from '/vite.svg';
  import Counter from './lib/Counter.svelte';
  import DummyTree from './dummyTree.svelte';
  import Navbar from './components/navbar/navbar.svelte';
  import Footer from './components/footer/footer.svelte';
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
  <!-- <Navbar />

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
  </div> -->
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
