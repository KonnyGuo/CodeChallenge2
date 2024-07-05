/**
 * Greedy - Max
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/house-robber-ii/
 * @param {number[]} nums
 * @return {number}
 */
var rob = (nums) => {
  const isBaseCase1 = nums.length === 0;
  if (isBaseCase1) return 0;

  const isBaseCase2 = nums.length === 1;
  if (isBaseCase2) return nums[0];

  const left = search(nums, 0, nums.length - 2); /* Time O(N) */
  const right = search(nums, 1, nums.length - 1); /* Time O(N) */

  return Math.max(left, right);
};

const search = (nums, start, end) => {
  let [left, mid] = [0, 0];

  for (let i = start; i <= end; i++) {
    /* Time O(N) */
    const temp = mid;
    const right = nums[i];
    const house = left + right;

    mid = Math.max(mid, house);
    left = temp;
  }

  return mid;
};

/**
 * Bottom Up
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/house-robber-ii/
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // Helper function to solve the original House Robber problem
  function robLine(houses) {
    let dp = new Array(houses.length).fill(0);
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);

    for (let i = 2; i < houses.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
    }

    return dp[houses.length - 1];
  }

  // Rob houses 0 to n-2 (excluding the last house)
  let result1 = robLine(nums.slice(0, nums.length - 1));

  // Rob houses 1 to n-1 (excluding the first house)
  let result2 = robLine(nums.slice(1));

  return Math.max(result1, result2);
}

/**
 * Tabulation
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/house-robber-ii/
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // Helper function to solve the original House Robber problem
  function robLine(start, end) {
    let prev = 0;
    let curr = 0;

    for (let i = start; i <= end; i++) {
      let temp = curr;
      curr = Math.max(curr, prev + nums[i]);
      prev = temp;
    }

    return curr;
  }

  // Rob houses 0 to n-2 (excluding the last house)
  let result1 = robLine(0, nums.length - 2);

  // Rob houses 1 to n-1 (excluding the first house)
  let result2 = robLine(1, nums.length - 1);

  return Math.max(result1, result2);
}
