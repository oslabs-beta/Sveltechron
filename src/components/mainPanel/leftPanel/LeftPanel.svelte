<script lang="ts">
  import DummyTree2 from './dummyTree2.svelte';
  import { onMount } from 'svelte';
  let timeOver = false;

  setTimeout(() => (timeOver = !timeOver), 10000);
</script>

{#if timeOver}
  <div class="container"><DummyTree2 /></div>
{/if}

<style>
  .container {
    color: black;
    height: 100%;
  }
</style>
