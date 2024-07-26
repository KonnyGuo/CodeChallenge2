/**
 * https://leetcode.com/problems/find-pivot-index/
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const totalSum = nums.reduce((sum, el) => {
    sum += el;
    return sum;
  }, 0);
  let pos = 0;
  let leftSum = 0;
  while (pos <= nums.length - 1) {
    if (leftSum === totalSum - nums[pos] - leftSum) {
      return pos;
    }
    leftSum += nums[pos];
    pos++;
  }
  return -1;
};

function pivotIndex(nums) {
  let totalSum = 0;
  let leftSum = 0;

  // Calculate the total sum of the array
  for (let num of nums) {
    totalSum += num;
  }

  // Iterate through the array to find the pivot index
  for (let i = 0; i < nums.length; i++) {
    // Check if the current index is the pivot
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }

    // Update the left sum for the next iteration
    leftSum += nums[i];
  }

  // If no pivot index is found, return -1
  return -1;
}
