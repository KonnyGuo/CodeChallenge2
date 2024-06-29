/**
 * @param {number[]} nums
 * Time O(log(N)) | Space O(1)
 * @return {number}
 */
var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1];

  while (left < right) {
    const mid = (left + right) >> 1;
    const guess = nums[mid];
    const [leftNum, rightNum] = [nums[left], nums[right]];

    const isTarget = leftNum < rightNum;
    if (isTarget) return leftNum;

    const isTargetGreater = leftNum <= guess;
    if (isTargetGreater) left = mid + 1;

    const isTargetLess = guess < leftNum;
    if (isTargetLess) right = mid;
  }

  return nums[left];
};

/**
 * @param {number[]} nums
 * Time O(log(N)) | Space O(1)
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const guess = nums[mid];
    const leftNum = nums[left];
    const rightNum = nums[right];

    if (leftNum < rightNum) {
      return leftNum;
    }

    if (leftNum <= guess) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};
