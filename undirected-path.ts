/*
  Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/

const buildGraph = (edges: string[][]) => {
  const graph: Record<string, string[]> = {};

  for (const edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) {
      graph[a] = [];
    }

    if (!(b in graph)) {
      graph[b] = [];
    }

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const hasPath = (
  graph: Record<string, string[]>,
  src: string,
  dest: string,
  visited: Set<string>
) => {
  if (visited.has(src)) return false;
  if (src === dest) return true;

  visited.add(src);

  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dest, visited)) {
      return true;
    }
  }

  return false;
};

const undirectedPath = (edges: string[][], nodeA: string, nodeB: string) => {
  const graph = buildGraph(edges);

  return hasPath(graph, nodeA, nodeB, new Set());
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedPath(edges, "j", "m")); // -> true
console.log(undirectedPath(edges, "k", "o")); // -> false
