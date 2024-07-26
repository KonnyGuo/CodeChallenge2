/**
 * https://leetcode.com/problems/range-sum-query-immutable/
 * @param {number[]} nums
 */
class NumArray {
  constructor(nums) {
    this.arr = nums;
  }

  /**
   * Time O(n) | Space O(1)
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    let total = 0;
    for (let i = left; i < right + 1; i++) {
      total += this.arr[i];
    }
    return total;
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

/**
 * Constructor: O(n), where n is the length of the input array.
 * sumRange: O(1) for each query.
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.prefixSum = [0];
  for (let i = 0; i < nums.length; i++) {
    this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
  }
};

/**
 * O(n) to store the prefix sum array
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefixSum[right + 1] - this.prefixSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
