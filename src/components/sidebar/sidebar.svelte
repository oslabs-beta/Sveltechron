<script lang="ts">
  //if button cicked then access focus state

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let currentPage: string = 'Map';
  let stateOrDiff: string = 'State';
  //on click toggle to true
  //if true, then change other components to false
</script>

<div class="sidebar">
  <div id="clear-button-container">
    <button id="clear-button">Clear</button>
  </div>
  <div class="routes-container">
    <!-- need to create separate Routes component which appends a new routes component on each dom re-render -->
    <div id="route">Route</div>
  </div>
</div>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    color: black;
    height: 200px;
  }

  #clear-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid black;
    width: 100%;
    height: 50px;
  }

  #clear-button {
    color: black;
    background-color: white;
    padding: 5px 25px;
    border-radius: 5px;
    border: 3px solid #000;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
</style>
