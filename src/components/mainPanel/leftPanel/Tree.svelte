<script>
  // @ts-nocheck
  import * as d3 from 'd3';
  import {
    treeData,
    rootNodes,
    propsNodeCont,
    stateNodeCont,
    hasBeenChanged,
  } from '../../../store';
  import { onMount, afterUpdate } from 'svelte';

  let shouldWait = false;
  const treeColors = {
    childrenHidden: 'black',
    childrenShown: 'black',
    leafNode: 'black',
    linkStroke: 'black',
  };

  function nodeTraverse(arr, childrenArr = []) {
    if (arr.length === 0) return;
    for (let node of arr) {
      if (node.type === 'component') childrenArr.push(rootParser(node));
      else {
        nodeTraverse(node.children, childrenArr);
      }
    }
    return childrenArr;
  }

  // NOTE: rootNodes from store is an array with the root node object as its only element
  function rootParser(root) {
    // root is an object
    // output is an object
    console.log('this is the root passed in:', root);
    const output = {};
    output.name = root.tagName;
    if (root.detail.ctx) {
      console.log('this is the root.detail:', root.detail);
      // @ts-ignore
      output.variables = process_ctx(root.detail.ctx);
    }
    if (root.detail.attributes) {
      // @ts-ignore
      output.props = process_ctx(root.detail.attributes);
    }

    output.children = nodeTraverse(root.children); //array of child objects

    // output: this is the tree data we will use
    return output;
  }

  if ($rootNodes[0]) {
    console.log('$rootNodes in the conditional:', $rootNodes);
    const parsedData = rootParser($rootNodes[0]);
    console.log('this is the parsedData:', parsedData);
    treeData.set(parsedData);
  }

  let margin = { top: 20, right: 90, bottom: 20, left: 90 };
  let width = 600 - margin.left - margin.right;
  let height = 960 - margin.top - margin.bottom;

  // create a tidy tree layout with specified size [height, width]
  const treeLayout = d3.tree().size([width, height]);

  // transition duration
  let i = 0;
  const duration = 500;
  //adding a counter so we can number the g nodes in the order they are incremented
  //(will help us resolve a bug where nodes are superimposed over textboxes in onhover events later)
  let counter = 0;

  function update(source) {
    // @ts-ignore
    const treeData = treeLayout(root);

    // nodes
    const nodes = treeData.descendants();
    nodes.forEach((d) => (d.y = d.depth * 150));

    const node = svg
      .selectAll('g.node')
      .data(nodes, (d) => d.id || (d.id = ++i));

    //attaching a circle to represent each node
    const nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr(
        'transform',
        (d) => 'translate(' + d.y + ', ' + d.x + ')' // Swap d.x and d.y
      )
      // .attr(
      //   "transform",
      //   (d) => "translate(" + source.x0 + ", " + source.y0 + ")"
      // )
      .attr('id', () => `${counter++}`)
      .on('click', click);

    const circleSVG = nodeEnter
      .append('circle')
      .attr('r', 8)
      .style('fill', (d) =>
        d.children
          ? treeColors.childrenShown
          : d._children
          ? treeColors.childrenHidden
          : treeColors.leafNode
      )
      .attr('cursor', 'pointer');

    const gSVG = nodeEnter.append('g').attr('transform', 'translate(-6, 4)');

    //adding component name to each node
    // @ts-ignore
    // const text = nodeEnter
    //   .append("text")
    //   .attr("dy", ".35em")
    //   .attr("y", (d) => (d.children || d._children ? -20 : 0))
    //   .attr("x", 14)
    //   .attr("text-anchor", (d) => (d.children || d._children ? "end" : "start"))
    //   .text((d) => d.data.name)
    //   .style("fill", "black");
    const text = nodeEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('y', 0) // Adjust the y position if needed
      .attr('x', (d) => (d.children || d._children ? 10 : -10)) // Adjust the x position
      .attr('text-anchor', (d) => (d.children || d._children ? 'start' : 'end')) // Adjust the text-anchor
      .text((d) => d.data.name)
      .style('fill', 'black');
    // @ts-ignore
    const rect = gSVG
      .append('rect')
      .attr('width', (d) => `${((d.data.name.length * 81) / 945) * 100}vh`)
      // .attr('width', (d) => console.log(d))
      .attr('height', (d) => `${((d.data.name.length * 81) / 945) * 100}vh`)
      .attr('fill', '#F5F5F5')
      .style('opacity', 0)
      .attr('rx', 10)
      .attr('ry', 10);

    const enterSVG = gSVG
      .append('foreignObject')
      .attr('width', (d) => `${((d.data.name.length * 80 + 10) / 945) * 100}vh`)
      .attr(
        'height',
        (d) => `${((d.data.name.length * 80 + 10) / 945) * 100}vh`
      );

    const textDiv = enterSVG
      .append('xhtml:div')
      .style('font-size', '15px')
      .style('overflow-wrap', 'anywhere')
      .style('color', 'black')
      .text((d) => d.data.name)
      .style('opacity', 0)
      .attr('class', 'wrapped-text')
      .style('word-wrap', 'break-word')
      .style('font-family', 'Arial');

    // @ts-ignore
    circleSVG.on('mouseover', function (event, d) {
      console.log('this is d', d);
      const stateArr = [];
      const propsArr = [];
      if (d.data.variables) {
        for (const el of d.data.variables) {
          stateArr.push(el);
        }
        console.log('this is d.data.variables', d.data.variables);
      }
      if (d.data.props) {
        for (const el of d.data.props) {
          propsArr.push(el);
        }
        console.log('this is d.data.props', d.data.props);
      }
      const hasBeenChanged2 = !$hasBeenChanged;
      stateNodeCont.set(stateArr);
      propsNodeCont.set(propsArr);
      hasBeenChanged.set(hasBeenChanged2);
      // // @ts-ignore
      // let str = "";
      // let textLength = 0;
      // let varTextContent = "";
      // let propTextContent = "";
      // let elCounter = 0;
      // if (d.data.variables) elCounter += 2;
      // for (const el of d.data.variables) {
      //   if (typeof el.value === "object") {
      //     for (const [key, value] of Object.entries(el.value)) {
      //       if (typeof value === "string") {
      //         // textLength += value.length;
      //         textLength = Math.max(
      //           textLength,
      //           `${el.value}`.length + `${el.key}`.length
      //         );
      //         varTextContent += `${key} — ${value}<br>`;
      //         elCounter += 1;
      //       }
      //     }
      //   } else {
      //     // textLength += `${el.value}`.length;
      //     textLength = Math.max(
      //       textLength,
      //       `${el.value}`.length + `${el.key}`.length
      //     );
      //     varTextContent += `${el.key}: ${el.value}<br>`;
      //     elCounter += 1;
      //   }
      // }
      // for (const el of d.data.props) {
      //   if (typeof el.value === "object") {
      //     for (const [key, value] of Object.entries(el.value)) {
      //       if (typeof value === "string") {
      //         // textLength += value.length;
      //         textLength = Math.max(
      //           textLength,
      //           `${el.value}`.length + `${el.key}`.length
      //         );
      //         propTextContent += `${key} — ${value}<br>`;
      //         elCounter += 1;
      //       }
      //     }
      //   } else {
      //     // textLength += `${el.value}`.length;
      //     textLength = Math.max(
      //       textLength,
      //       `${el.value}`.length + `${el.key}`.length
      //     );
      //     propTextContent += `${el.key}: ${el.value}<br>`;
      //     elCounter += 1;
      //   }
      // }
      console.log('state and props in tree', $stateNodeCont, $propsNodeCont);
    });

    // @ts-ignore
    circleSVG.on('mouseout', function (event, d) {
      //handling text bug

      //rest of code handling foreign object of current element's opacity
      d3.select(this.parentNode)
        .select('foreignObject')
        .select('div')
        .style('opacity', 0);
      d3.select(this.parentNode).select('rect').style('opacity', 0);
      const currentNodeId = Number(this.parentNode.id);
      d3.selectAll('g.node').each(function () {
        // @ts-ignore
        const nodeId = this.id;
        const nodeNumber = Number(nodeId);
        if (nodeNumber > currentNodeId) {
          d3.select(this).style('opacity', 1);
        }
      });
    });

    const nodeUpdate = nodeEnter.merge(node);

    nodeUpdate
      .transition()
      .duration(duration)
      .attr('transform', (d) => `translate(${d.x},${d.y})`)
      .select('circle.node')
      .attr('r', 8);
    // .style('fill', d => d._children ? "yellow" : "black")

    const nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      // @ts-ignore
      .attr('transform', (d) => 'translate(' + source.y + ',' + source.x + ')')
      .remove();

    nodeExit.select('circle').attr('r', 0);
    nodeExit.select('text').style('fill-opacity', 0);

    // links;
    // function diagonal(s, d) {
    //   let path = `M ${s.y} ${s.x}
    //     C ${(s.y + d.y) / 2} ${s.x}
    //       ${(s.y + d.y) / 2} ${d.x}
    //       ${d.y} ${d.x}`;
    //   return path;
    // }
    function diagonal(s, d) {
      let path = `M ${s.x} ${s.y}
      L ${d.x} ${d.y}`;
      return path;
    }

    let links = treeData.descendants().slice(1);
    let link = svg.selectAll('path.link').data(links, (d) => d.id);
    const linkEnter = link
      .enter()
      .insert('path', 'g')
      .attr('class', 'link')
      .attr('d', (d) => {
        return `
      M ${d.y},${d.x}
      C ${(d.y + d.parent.y) / 2},${d.x}
      ${(d.y + d.parent.y) / 2},${d.parent.x}
      ${d.parent.y},${d.parent.x}`;
      })
      .style('opacity', '0.9')
      .style('stroke', 'black')
      .style('stroke-width', '1px')
      .style('fill', 'none');

    const linkUpdate = linkEnter.merge(link);
    linkUpdate
      .transition()
      .duration(duration)
      .attr('d', (d) => diagonal(d, d.parent));

    // @ts-ignore
    const linkExit = link
      .exit()
      .transition()
      .duration(duration)
      // @ts-ignore
      .attr('d', (d) => {
        let o = { x: source.x, y: source.y };
        return diagonal(o, o);
      })
      .remove();

    // store old positions to be able to transition back
    nodes.forEach((d) => {
      const temp = d.x;
      d.x = d.y;
      d.y = temp;
    });

    // define click function
    // @ts-ignore
    function click(event, d) {
      if (shouldWait) return;

      if (d.children) {
        d._children = d.children;
        d.children = null;
        // @ts-ignore
        d3.select(this)._groups[0][0].querySelector('circle').style.fill =
          'black';
      } else {
        d.children = d._children;
        d._children = null;
        // @ts-ignore
        d3.select(this)._groups[0][0].querySelector('circle').style.fill =
          'black';
      }

      // throttle
      shouldWait = true;
      setTimeout(() => {
        shouldWait = false;
      }, 500);

      update(d);
    }
  }

  //append the svg object to the body of the page
  //appends a 'group' element to 'svg'
  let svg;
  let root;
  onMount(() => {
    /* d3.hierarchy(data,[children]) assigns parent, child, height, depth
    used to construct a root node data from a given hierarchial data
    data MUST be of an object and represent a root node
    returns an array of object(s) */
    console.log('$treeData', $treeData);
    // @ts-ignore
    root = d3.hierarchy($treeData, (d) => d.children);
    root.each((d) => {
      if (d.children) {
        d.children.forEach((child, i) => {
          // @ts-ignore
          child.data.originalOrder = i;
        });
      }
    });
    // @ts-ignore
    root.x0 = height / 2;
    // @ts-ignore
    root.y0 = 0;
    if ($treeData) {
      svg = d3
        .select('#body')
        .append('svg')
        .attr('width', width + margin.right + margin.left)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr(
          'transform',
          'translate(' + margin.left + ', ' + margin.top + ')'
        );

      update(root);
    }
  });

  afterUpdate(() => {
    if ($treeData && svg) {
      update(root);
    }
  });

  // function takes as input a ctx array and returns a processed ctx without functions
  function process_ctx(ctx_array) {
    // helper function that returns boolean based on if the element contains a function
    function hasFunction(obj) {
      if (typeof obj !== 'object' || obj === null) {
        return false;
      }

      if (obj.__isFunction) {
        return true;
      }

      for (const key in obj) {
        if (typeof obj[key] === 'function' || hasFunction(obj[key])) {
          return true;
        }
      }
      return false;
    }

    // new array to hold processed ctx elements
    const processed_ctx = [];

    // iterate through the given ctx array and check for functions
    for (let i = 0; i < ctx_array.length; i++) {
      if (!hasFunction(ctx_array[i])) processed_ctx.push(ctx_array[i]);
    }
    return processed_ctx;
  }
</script>

<main id="body" style="overflow: auto;" />
