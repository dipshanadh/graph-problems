const breadthFirstIterative = (
  graph: Record<string, string[]>,
  source: string
) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift() as string;

    console.log(current);

    for (const neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

breadthFirstIterative(graph, "a");
