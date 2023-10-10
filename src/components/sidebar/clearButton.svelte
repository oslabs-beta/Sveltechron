<script lang="ts">
  const clearAll = () => {
    const routesContainer = document.querySelector('.routes-container');
    while (routesContainer.firstChild) {
      routesContainer.removeChild(routesContainer.firstChild);
    }
  };
</script>

<div id="clear-button-container">
  <button id="clear-button" on:click={clearAll}>Clear</button>
</div>

<style>
  button {
    border: 3px solid #000;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  #clear-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: white;
    border: 3px solid #000;
  }

  #clear-button {
    color: black;
    background-color: white;
    padding: 5px 25px;
    border-radius: 5px;
  }
</style>
