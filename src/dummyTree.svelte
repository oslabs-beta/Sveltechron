<script lang="ts">
  import * as d3 from 'd3';
  import { onMount } from 'svelte';

  interface TreeNode {
    name: string;
    children?: TreeNode[];
  }

  onMount(() => {
    let data: TreeNode = {
      name: 'A',
      children: [
        { name: 'C' },
        { name: 'D', children: [{ name: 'F' }, { name: 'E' }] },
        { name: 'B' },
      ],
    };

    let root = d3
      .hierarchy(data)
      .sort(
        (a: any, b: any) =>
          b.height - a.height || a.data.name.localeCompare(b.data.name)
      );

    let treeLayout = d3.tree().size([300, 80]);

    // Next, we call the layout function, passing it the root node. The layout function adds x and y properties to each node in the model.

    treeLayout(root);
    //render the circles
    let svg = d3.select('#tree-container'); //change this to change where tree is inserted
    console.log('this is the svg:', svg);
    console.log('this is the root:', root);
    console.log('this is the data:', data);

    svg
      .select('g.links')
      .selectAll('line.link')
      .data(root.links())
      .enter()
      .append('line')
      .attr('x1', function (d: any) {
        return d.source.x;
      })
      .attr('y1', function (d: any) {
        return d.source.y;
      })
      .attr('x2', function (d: any) {
        return d.target.x;
      })
      .attr('y2', function (d: any) {
        return d.target.y;
      })
      .attr('stroke', 'darkgray')
      .attr('stroke-width', 2);

    svg
      .select('g.nodes')
      .selectAll('circle.node')
      .data(root.descendants())
      .enter()
      .append('circle')
      .attr('cx', function (d: any) {
        return d.x;
      })
      .attr('cy', function (d: any) {
        return d.y;
      })
      .attr('r', 10)
      .attr('fill', 'lightblue')
      .attr('stroke', 'darkgray')
      .attr('stroke-width', 1);
  });
</script>

<div id="main-container">
  <div>Tree</div>
  <div>Step</div>
  <svg id="tree-container">
    <g>
      <g class="links" />
      <g class="nodes" />
    </g>
  </svg>
  <div id="state-props-container">
    <div id="state-container">State</div>
    <div id="props-container">Props</div>
  </div>
</div>

<style>
  #main-container {
    display: flex;
    flex-direction: row;
    border: 3px solid black;
    background-color: grey;
    height: calc(100%);
    width: calc(100% - 3px);
  }

  #tree-container {
    width: 50%;
    border: 1px solid yellow;
  }

  #state-props-container {
    display: flex;
    flex-direction: column;
    width: 50%;
    border: 1px solid red;
  }

  #state-container {
    border: 1px solid pink;
    height: 50%;
  }

  #props-container {
    border: 1px solid pink;
    height: 50%;
  }
</style>
