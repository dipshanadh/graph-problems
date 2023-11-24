/*
  Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
*/

const hasPath = (
  graph: Record<string, string[]>,
  src: string,
  dest: string
) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift()!;

    if (current === dest) {
      return true;
    }

    for (const neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }

  return false;
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath(graph, "f", "k")); // true
console.log(hasPath(graph, "f", "j")); // false
