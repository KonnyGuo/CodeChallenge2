/**
 * BFS
 * https://leetcode.com/problems/alien-dictionary/
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  const { graph, frequencyMap, queue, buffer } = buildGraph(words);

  if (!canBuildGraph(words, graph, frequencyMap)) return "";

  queueSources(queue, frequencyMap);
  bfs(queue, frequencyMap, graph, buffer);

  return frequencyMap.size <= buffer.length ? buffer.join("") : "";
};

var initGraph = () => ({
  graph: new Map(),
  frequencyMap: new Map(),
  queue: new Queue(),
  buffer: [],
});
