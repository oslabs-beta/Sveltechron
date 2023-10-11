<script lang="ts">
  import * as d3 from 'd3';
  import { onMount } from 'svelte';
  import LeftPanel from './leftPanel/LeftPanel.svelte';
  import RightPanel from './rightPanel/RightPanel.svelte';
</script>

<div id="main-container">
  <div id="left-panel">
    <LeftPanel />
  </div>
  <div id="right-panel">
    <RightPanel />
  </div>
</div>

<style>
  #main-container {
    display: flex;
    flex-direction: row;
    border: 3px solid black;
    background-color: white;
    height: calc(100%);
    width: calc(100% - 3px);
  }

  #left-panel {
    width: 65%;
  }

  #right-panel {
    display: flex;
    flex-direction: column;
    width: 35%;
    border-left: 3px solid black;
  }
</style>
