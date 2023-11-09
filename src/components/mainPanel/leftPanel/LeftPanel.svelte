<script lang="ts">
  import { rootNodes } from '../../../store';
  import Tree from './Tree.svelte';
</script>

<!-- check to see if rootNodes is undefined or not -->

{#if $rootNodes.length}
  <div class="container">
    <Tree />
  </div>
{:else}
  <div class="container">not yet ready</div>
{/if}

<style>
  .container {
    color: black;
    height: 100%;
  }
</style>
