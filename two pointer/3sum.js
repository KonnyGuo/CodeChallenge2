/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;


};
