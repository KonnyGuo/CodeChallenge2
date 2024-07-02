/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// time O(n * log(k)) | space O(k)
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => {
    return a - b;
  });

  return nums[nums.length - k];
};
