/**
 * https://leetcode.com/problems/swim-in-rising-water/
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = (grid) => {
  const seen = new Set();
  const minHeap = getHeap(grid);

  return getTime(grid, seen, minHeap);
};

const getHeap = (grid, minHeap = new MinPriorityQueue()) => {
  minHeap.enqueue([0, 0], grid[0][0]);

  return minHeap;
};

var getTime = (grid, seen, minHeap, maxTime = 0) => {
  const [rows, cols] = [grid.length - 1, grid[0].length - 1];

  while (!minHeap.isEmpty()) {
    const { element, priority: cost } = minHeap.dequeue();
    const [row, col] = element;

    seen.add(grid[row][col]);
    maxTime = Math.max(maxTime, cost);

    const isEnd = row === rows && col === cols;
    if (isEnd) return maxTime;

    checkNeighbors(grid, row, rows, col, cols, seen, minHeap);
  }
};
