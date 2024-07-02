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

let stones = [2, 7, 4, 1, 8, 1];

console.log(lastStoneWeight(stones));
