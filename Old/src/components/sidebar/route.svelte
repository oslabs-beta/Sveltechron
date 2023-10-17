<script lang="ts">
  export let route;
  export let snapshotNumber;
  export let time;
</script>

<!-- first make routes look like the one in the figma page -->
<!-- then export routes component to a separate page-->
<!-- then generate routes components when fed data -->
<!-- need to create separate Routes component which appends a new routes component on each dom re-render -->
<div id="route-container">
  <div id="route">Routes: {route}</div>
  <div id="snapshot">
    Snapshot: {snapshotNumber} <span id="time">+{time}</span>
  </div>
</div>

<style>
  #route {
    text-align: left;
    padding-left: 10px;
  }

  #snapshot {
    margin-top: -2px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
  }

  #time {
    /* border: 1px solid red; */
    font-style: italic;
    font-family: Istok Web;
    margin-right: 10px;
  }
</style>
