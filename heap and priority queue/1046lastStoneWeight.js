/**
 * https://leetcode.com/problems/last-stone-weight/
 * Time O(N * log(N)) | Space O(N)
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = getMaxHeap(stones);

  shrink(maxHeap);

  return !maxHeap.isEmpty() ? maxHeap.front().element : 0;
};

const getMaxHeap = (stones, maxHeap = new MaxPriorityQueue()) => {
  for (const stone of stones) {
    maxHeap.enqueue(stone);
  }

  return maxHeap;
};

const shrink = (maxHeap) => {
  while (1 < maxHeap.size()) {
    const [x, y] = [maxHeap.dequeue().element, maxHeap.dequeue().element];
    const difference = x - y;

    const isPositive = 0 < difference;
    if (isPositive) maxHeap.enqueue(difference);
  }
};

/**
 * https://leetcode.com/problems/last-stone-weight/
 * Time O(N * log(N)) | Space O(N)
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);

  while (stones.length > 1) {
    let first = stones.shift();
    let second = stones.shift();

    if (first !== second) {
      const newStone = first - second;

      const index = stones.findIndex((stone) => stone <= newStone);
      if (index === -1) {
        stones.push(newStone);
      } else {
        stones.splice(index, 0, newStone);
      }
    }
  }

  if (stones.length === 1) {
    return stones[0];
  } else {
    return 0;
  }
};
