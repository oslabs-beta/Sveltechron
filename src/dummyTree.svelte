<script lang="ts">
  import * as d3 from "d3";
  import { onMount } from "svelte";

  interface TreeNode {
    name: string;
    children?: TreeNode[];
  }

  onMount(() => {
    let data: TreeNode = {
      name: "A",
      children: [
        { name: "C" },
        { name: "D", children: [{ name: "F" }, { name: "E" }] },
        { name: "B" },
      ],
    };

    let root = d3
      .hierarchy(data)
      .sort(
        (a: any, b: any) =>
          b.height - a.height || a.data.name.localeCompare(b.data.name),
      );

    let treeLayout = d3.tree().size([580, 80]);

    // Next, we call the layout function, passing it the root node. The layout function adds x and y properties to each node in the model.

    treeLayout(root);
    //render the circles
    let svg = d3.select("#demo1");
    console.log("this is the svg:", svg);
    console.log("this is the root:", root);
    console.log("this is the data:", data);

    svg
      .select("g.links")
      .selectAll("line.link")
      .data(root.links())
      .enter()
      .append("line")
      .attr("x1", function (d: any) {
        return d.source.x;
      })
      .attr("y1", function (d: any) {
        return d.source.y;
      })
      .attr("x2", function (d: any) {
        return d.target.x;
      })
      .attr("y2", function (d: any) {
        return d.target.y;
      })
      .attr("stroke", "darkgray")
      .attr("stroke-width", 2);

    svg
      .select("g.nodes")
      .selectAll("circle.node")
      .data(root.descendants())
      .enter()
      .append("circle")
      .attr("cx", function (d: any) {
        return d.x;
      })
      .attr("cy", function (d: any) {
        return d.y;
      })
      .attr("r", 10)
      .attr("fill", "lightblue")
      .attr("stroke", "darkgray")
      .attr("stroke-width", 1);
  });

  // function createAndAppendElement() {
  //     let element = document.createElement('div');
  //     element.textContent = 'Programmatically created element';
  //     document.getElementById('test').appendChild(element); // Append to the component's root
  //   }
</script>

<div id="test">Test test</div>
<svg id="demo1" width="600" height="100">
  <g transform="translate(0,10)">
    <g class="links"></g>
    <g class="nodes"></g>
  </g>
</svg>

<!-- <button on:click={createAndAppendElement}>Create Element</button> -->

<style>
  /* Add styles to the programmatically created element if needed */
  div {
    background-color: lightblue;
    padding: 10px;
    margin-top: 10px;
  }
</style>
