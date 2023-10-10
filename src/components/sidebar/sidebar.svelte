<script lang="ts">
  import Route from './route.svelte';
</script>

<div class="sidebar">
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
  .sidebar {
    width: 100%;
    height: calc(100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    color: black;
    border: 3px solid black;
  }

  .routes-container {
    width: calc(100%);
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: -3px;
  }
</style>
