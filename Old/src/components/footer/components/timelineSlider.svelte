<script lang="ts">
  import Slider from '@bulatdashiev/svelte-slider';
  import DummyTree from '../../../dummyTree.svelte';

  let value = [10, 100]; // this needs to change to match the DummyTree hierarchy which is a nested object with arrays
</script>

value: {value[0]}
<Slider bind:value />
