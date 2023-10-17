<script lang="ts">
  import DummyTree from './dummyTree.svelte';
  import { onMount } from 'svelte';
  //if button cicked then access focus state

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let treeOrStep: string = 'Tree';
  //on click toggle to true
  //if true, then change other components to false

  // onMount(() => {
  //   chrome.runtime.onMessage.addListener(function (
  //     request,
  //     sender,
  //     sendResponse
  //   ) {
  //     switch (request.message) {
  //       case 'test test':
  //         () => console.log('this is the request.message');
  //         break;
  //     }
  //   });
  // });
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
    <div>
      <DummyTree />
    </div>
  {:else}
    <div>Step</div>
  {/if}
</div>

<style>
  .container {
    color: black;
    height: 100%;
    border: 1px solid red;
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
