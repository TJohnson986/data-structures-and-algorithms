'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);

    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if(!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw Error('Invalid Verticies');
    }

    let edgesArray = this.adjacencyList.get(startVertex);
    edgesArray.push(new Edge(endVertex, weight));
  }

  getNodes() {
    return this.adjacencyList;
  }

  breadthFirst(startVertex) {
    let queue = [];
    let visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while(queue.length) {
      const current = queue.shift();
      const neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        let neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
          queue.push(neighborNode);
        }
      }
    }

    return visitedNodes;
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw Error('Invalid Vertex', vertex);
    }

    return[...this.adjacencyList.get(vertex)];
  }
}

const graph = new Graph();

const a = graph.addVertex('A');
const b = graph.addVertex('B');
const c = graph.addVertex('C');
const d = graph.addVertex('D');
const e = graph.addVertex('E');
const f = graph.addVertex('F');
const g = graph.addVertex('G');
const h = graph.addVertex('H');

graph.addDirectedEdge(a, c);
graph.addDirectedEdge(a, b);
graph.addDirectedEdge(c, b);
graph.addDirectedEdge(b, f);
graph.addDirectedEdge(f, e);
graph.addDirectedEdge(f, h);
graph.addDirectedEdge(e, h);
graph.addDirectedEdge(c, g);

console.log(graph.adjacencyList);
console.log(graph.breadthFirst(a));