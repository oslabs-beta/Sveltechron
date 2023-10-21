<script lang="ts">
  import DummyTree from './dummyTree.svelte';
  import { onMount } from 'svelte';

  let treeOrStep: string = 'Tree';
</script>

<div class="container">
  <div class="tree-step">
    <button
      id="tree"
      class:selected={treeOrStep === 'Tree'}
      on:click={() => (treeOrStep = 'Tree')}>Tree</button
    >
    <button
      id="step"
      class:selected={treeOrStep === 'Step'}
      on:click={() => (treeOrStep = 'Step')}>Step</button
    >
  </div>
  {#if treeOrStep === 'Tree'}
    <DummyTree currentView="tree" />
  {:else}
    <DummyTree currentView="step" />
  {/if}
</div>

<style>
  .container {
    color: black;
    height: 100%;
  }

  button {
    margin: 3px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 3px solid black;
    color: black;
    background-color: white;
    padding: 5px 18px;
  }

  #step {
    border-radius: 0px 18px 18px 0px;
  }

  #tree {
    border-radius: 18px 0px 0px 18px;
  }

  .selected {
    background-color: black;
    color: white;
  }

  .tree-step {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
