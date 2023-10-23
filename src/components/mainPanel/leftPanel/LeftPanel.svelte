<script lang="ts">
  import DummyTree2 from './dummyTree2.svelte';
  import { onMount } from 'svelte';

  let treeOrStep: string = 'Tree';
</script>

<div class="container">
  <DummyTree2 />
</div>

<style>
  .container {
    color: black;
    height: 100%;
  }
</style>
