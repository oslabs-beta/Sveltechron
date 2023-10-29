<script lang="ts">
  import { connected } from './store';

  import MainPanel from './components/mainPanel/mainPanel.svelte';
  import Connect from './components/connect/connect.svelte';

  // conditionally render mainPanel if successfully connected
  let connectSuccess;
  connected.subscribe((bool) => (connectSuccess = bool));
</script>

<div class="content">
  {#if connectSuccess === false}
    <Connect />
  {:else}
    <MainPanel />
  {/if}
</div>

<style>
  div {
    height: 100vh;
    width: 100vw;
  }
</style>
