// problem link https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
// time complexity O(n)

var findDisappearedNumbers = function (nums) {
  const numberSet = new Set();

  for (let i = 1; i < nums.length + 1; i++) {
    numberSet.add(i);
  }

  nums.forEach((element) => {
    if (numberSet.has(element)) {
      numberSet.delete(element);
    }
  });

  return Array.from(numberSet);
};

function findDisappearedNumbers(nums) {
  const result = [];

  // Mark numbers that are present
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  // Find unmarked numbers
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}
