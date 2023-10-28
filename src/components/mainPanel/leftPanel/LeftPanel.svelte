<script lang="ts">
  import DummyTree2 from './dummyTree2.svelte';
  import { onMount } from 'svelte';
  import { connected } from '../../../store';

  const connectToPage = () => {
    connected.update((val) => !val);
    console.log('connectToPage fired in LeftPanel.svelte');
  };
</script>

<div class="container">
  <button on:click={connectToPage}> Connect </button>
  <!-- <DummyTree2 /> -->
</div>

<style>
  .container {
    color: black;
    height: 100%;
  }
</style>
