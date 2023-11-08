<script lang="ts">
  import { onMount } from 'svelte';
  import { rootNodes } from '../../../store';
  let timeOver = false;
  import DummyTree2 from './dummyTree2.svelte';
  setTimeout(() => (timeOver = !timeOver), 10000);
  rootNodes.subscribe(() => console.log($rootNodes, Date.now()));
</script>

<!-- check to see if rootNodes is undefined or not -->

{#if $rootNodes.length}
  <div class="container">
    <DummyTree2 />
  </div>
{:else}
  <div class="container">not yet ready</div>
{/if}

<style>
  .container {
    color: black;
    height: 100%;
  }
</style>
