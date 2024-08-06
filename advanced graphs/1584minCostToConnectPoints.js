/**
 * Prim's algorithm
 * https://leetcode.com/problems/min-cost-to-connect-all-points/solution/
 * @param {number[][]} points
 * @return {number}
 */
const minCostConnectPoints = (points) => {
  const isBaseCase = points.length === 0 || 1000 <= points.length;
  if (isBaseCase) return 0;

  const { graph, seen, minHeap } = buildGraph(points);

  return search(points, graph, seen, minHeap);
};

const initGraph = (points) => ({
  graph: new Array(points.length).fill().map(() => []),
  seen: new Array(points.length).fill(false),
  minHeap: new MinPriorityQueue(),
});

const buildGraph = (points) => {
  const { graph, seen, minHeap } = initGraph(points);

  for (let src = 0; src < points.length - 1; src++) {
    for (let dst = src + 1; dst < points.length; dst++) {
      const cost = getCost(points, src, dst);

      graph[src].push([dst, cost]);
      graph[dst].push([src, cost]);
    }
  }

  const [src, cost, priority] = [0, 0, 0];
  const node = [src, cost];

  minHeap.enqueue(node, priority);

  return { graph, seen, minHeap };
};
