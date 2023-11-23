const depthFirstIterative = (
  graph: Record<string, string[]>,
  source: string
) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop() as string;

    console.log(current);

    for (const neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
};

const depthFirstRecursive = (
  graph: Record<string, string[]>,
  source: string
) => {
  console.log(source);

  for (const neighbour of graph[source]) {
    depthFirstRecursive(graph, neighbour);
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

depthFirstIterative(graph, "a");
depthFirstRecursive(graph, "a");
