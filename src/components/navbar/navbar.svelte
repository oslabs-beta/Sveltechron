<script lang="ts">
  //if button cicked then access focus state

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let currentPage: string = 'Map';
  let stateOrDiff: string = 'State';
  //on click toggle to true
  //if true, then change other components to false
</script>

<nav>
  <div class="pages">
    <button
      class:selected={currentPage === 'Map'}
      on:click={() => (currentPage = 'Map')}>Map</button
    >
    <button
      class:selected={currentPage === 'Metrics'}
      on:click={() => (currentPage = 'Metrics')}>Metrics</button
    >
    <button
      class:selected={currentPage === 'Performance'}
      on:click={() => (currentPage = 'Performance')}>Performance</button
    >
  </div>
  <div class="state-diff">
    <button
      id="state"
      class:selected={stateOrDiff === 'State'}
      on:click={() => (stateOrDiff = 'State')}>State</button
    >
    <button
      id="diff"
      class:selected={stateOrDiff === 'Diff'}
      on:click={() => (stateOrDiff = 'Diff')}>Diff</button
    >
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    color: black;
  }

  .pages {
    display: flex;
    align-items: center;
  }

  .pages button {
    padding: 5px 30px;
    border-radius: 5px;
  }

  nav button {
    margin: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 3px solid black;
  }

  #diff {
    border-radius: 0px 18px 18px 0px;
    padding: 5px 21px;
  }

  #state {
    padding: 5px 21px;
    border-radius: 18px 0px 0px 18px;
  }

  .selected {
    background-color: white;
    color: black;
  }

  .state-diff {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
