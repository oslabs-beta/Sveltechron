<script lang="ts" type="module">
  import { stateNodeCont, propsNodeCont, hasBeenChanged } from "../../../store";
</script>

<div>
  <div id="state-container">
    <h3>State</h3>
    {#if ($hasBeenChanged = true)}
      {#each $stateNodeCont as { key, value }}
        {#if typeof value !== "object"}
          <p>{key}: <span>{value}</span></p>
        {:else}
          <p>{key}: <span>{JSON.stringify(value)}</span></p>
        {/if}
      {/each}
    {/if}
    {#if ($hasBeenChanged = false)}
      {#each $stateNodeCont as { key, value }}
        {#if typeof value !== "object"}
          <p>{key}: <span>{value}</span></p>
        {:else}
          <p>{key}: <span>{JSON.stringify(value)}</span></p>
        {/if}
      {/each}
    {/if}
  </div>
  <div id="props-container">
    <h3>Props</h3>
    {#if ($hasBeenChanged = true)}
      {#each $propsNodeCont as { key, value }}
        {#if typeof value !== "object"}
          <p>{key}: <span>{value}</span></p>
        {:else}
          <p>{key}: <span>{JSON.stringify(value)}</span></p>
        {/if}
      {/each}
    {/if}
    {#if ($hasBeenChanged = false)}
      {#each $propsNodeCont as { key, value }}
        {#if typeof value !== "object"}
          <p>{key}: <span>{value}</span></p>
        {:else}
          <p>{key}: <span>{JSON.stringify(value)}</span></p>
        {/if}
      {/each}
    {/if}
  </div>
</div>

<style>
  div {
    color: black;
  }

  #state-container {
    height: 100%;
  }

  #props-container {
    border-top: 3px solid black;
    height: 100%;
  }
</style>
