/*
  Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.
*/

type Vertex = number;
type Graph = Record<Vertex, Vertex[]>;

const explore = (graph: Graph, current: Vertex, visited: Set<Vertex>) => {
  if (visited.has(current)) return false;

  visited.add(current);

  for (const neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

const connectedComponentsCount = (graph: Graph) => {
  let count = 0;

  const visited = new Set<Vertex>();

  for (const node in graph) {
    if (explore(graph, Number(node), visited)) {
      count++;
    }
  }

  return count;
};

console.log(
  connectedComponentsCount({
    1: [2],
    2: [1, 8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2],
  })
); // -> 1

console.log(
  connectedComponentsCount({
    0: [4, 7],
    1: [],
    2: [],
    3: [6],
    4: [0],
    6: [3],
    7: [0],
    8: [],
  })
); // -> 5
