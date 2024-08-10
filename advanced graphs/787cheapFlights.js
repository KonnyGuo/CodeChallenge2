/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

var findCheapestPrice = function (n, flights, src, dst, K) {
  const { graph, seen, minHeap } = buildGraph(n, flights, src, dst, K);

  return search(graph, src, dst, seen, minHeap);
};

var initGraph = (n) => ({
  graph: new Array(n).fill().map(() => []),
  seen: new Map(),
  minHeap: new MinPriorityQueue(),
});
