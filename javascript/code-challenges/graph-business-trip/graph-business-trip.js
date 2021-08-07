const Graph = require('../../graph/graph.js');

function businessTrip (graph, arr) {
  let cityNames = [];
}

const graph = new Graph();

const pandora = graph.addVertex('Pandora');
const arendelle = graph.addVertex('arendelle');
const metroville = graph.addVertex('metroville');
const monstropolis = graph.addVertex('monstropolis');
const narnia = graph.addVertex('narnia');
const naboo = graph.addVertex('naboo');

graph.addDirectedEdge(metroville, pandora);
graph.addDirectedEdge(arendelle, monstropolis, naboo);

