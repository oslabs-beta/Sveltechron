<script lang="ts">
  import Slider from '@bulatdashiev/svelte-slider';

  let value = [10, 100];
  let range = [20, 70];
  let range2 = [30, 40];
</script>

value: {value[0]}
<Slider bind:value />
Custom slot: left: {range[0]}
right: {range[1]}
<div>
  <Slider bind:value={range} range on:input={(e) => console.log(e.detail)}>
    <span slot="left" style="font-size: 20px;">&#128078;</span>
    <span slot="right" style="font-size: 20px;">&#128077;</span>
  </Slider>
</div>
