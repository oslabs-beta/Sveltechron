<script lang="ts">
  import Route from './route.svelte';

  const clearAll = () => {
    const routesContainer = document.querySelector('.routes-container');
    while (routesContainer.firstChild) {
      routesContainer.removeChild(routesContainer.firstChild);
    }
  };
</script>

<div class="sidebar">
  <div id="clear-button-container">
    <button id="clear-button" on:click={clearAll}>Clear</button>
  </div>
  <div class="routes-container">
    <!-- first make routes look like the one in the figma page -->
    <!-- then export routes component to a separate page-->
    <!-- then generate routes components when fed data -->
    <!-- need to create separate Routes component which appends a new routes component on each dom re-render -->
    <Route route={'/'} snapshotNumber={1} time={'00:16.50'} />
    <Route route={'/routes'} snapshotNumber={5} time={'15:00'} />
  </div>
</div>

<style>
  button {
    border: 3px solid #000;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    color: black;
    height: 100%;
  }

  #clear-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    border: 3px solid #000;
  }

  #clear-button {
    color: black;
    background-color: white;
    padding: 5px 25px;
    border-radius: 5px;
  }

  .routes-container {
    width: calc(100%);
    height: calc(100% - 59px);
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: -3px;
    border: 3px solid black;
  }
</style>
