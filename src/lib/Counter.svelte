<script lang="ts">
  import {count} from "../store" //need to destructure from named exports

  const increment = () => {
    count.update((n)=> n += 1)
  }

  let count_value: number;

  count.subscribe((value) => count_value = value)

  const reset = () => {
    count.set(0)
  }
</script>

<!-- access example state from store.ts -->
<button on:click={increment}>
  count is {count_value}
</button>

<button on:click={reset} >
click to reset the count to 0
</button>
