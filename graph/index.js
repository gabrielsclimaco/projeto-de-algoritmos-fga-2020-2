const Graph = require('./Graph');

main = () => {
  const graph = new Graph();

  console.log('Add Nodes 1 to 4');

  graph.addVertex('Node 1');
  graph.addVertex('Node 2');
  graph.addVertex('Node 3');
  graph.addVertex('Node 4');

  graph.print();

  console.log('\nConnect nodes 1 and 2');
  graph.addEdge('Node 1', 'Node 2');
  graph.print();

  console.log('\nConnect nodes 1 and 3');
  graph.addEdge('Node 1', 'Node 3');
  graph.print();

  console.log('\nConnect nodes 2 and 3');
  graph.addEdge('Node 2', 'Node 3');
  graph.print();

  console.log('\nConnect nodes 3 and 4');
  graph.addEdge('Node 3', 'Node 4');
  graph.print();

  console.log('\nRemove node 3');
  graph.removeVertex('Node 3');
  graph.print();
}

main();
