
let data: object = {"name": "A", "children": [
    {"name": "C"},
    {"name": "D", "children": [
        {"name": "F"},
        {"name": "E"}
    ]},
    {"name": "B"}
]};

let root = d3.hierarchy(data)
.sort((a,b) => b.height - a.height || a.data.name.localeCompare(b.data.name));

var treeLayout = d3.tree()
    .size([580, 80]);

// Next, we call the layout function, passing it the root node. The layout function adds x and y properties to each node in the model.

treeLayout(root);

//render the circles
var svg = d3.select("#demo1");

svg.select('g.links')
    .selectAll('line.link')
    .data(root.links())
    .enter()
    .append('line')
    .attr('x1', function(d) {return d.source.x;})
    .attr('y1', function(d) {return d.source.y;})
    .attr('x2', function(d) {return d.target.x;})
    .attr('y2', function(d) {return d.target.y;})
    .attr('stroke', "darkgray")
    .attr('stroke-width', 2);

svg.select('g.nodes')
    .selectAll('circle.node')
    .data(root.descendants())
    .enter()
    .append('circle')
    .attr('cx', function(d) {return d.x;})
    .attr('cy', function(d) {return d.y;})
    .attr('r', 10)
    .attr("fill", "lightblue")
    .attr('stroke', "darkgray")
    .attr('stroke-width', 1);

