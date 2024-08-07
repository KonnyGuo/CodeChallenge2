/**
 * Brute Force - DFS
 * Time O(2^N) | Space O(N)
 * https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = (nums, i = 0) => {
  const isBaseCase = nums <= i;
  if (isBaseCase) return 0;

  const [next, nextNext] = [i + 1, i + 2];
  const right = nums[i];
  const mid = rob(nums, next); /* Time O(2^N) | Space O(N) */
  const left = rob(nums, nextNext); /* Time O(2^N) | Space O(N) */
  const house = left + right;

  return Math.max(house, mid);
};

/**
 * DP - Top Down
 * Array - Memoization
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = (nums, i = 0, memo = initMemo(nums)) => {
  const isBaseCase = nums.length <= i;
  if (isBaseCase) return 0;

  const hasSeen = 0 <= memo[i];
  if (hasSeen) return memo[i];

  const [next, nextNext] = [i + 1, i + 2];
  const right = nums[i];
  const mid = rob(nums, next, memo); /* Time O(N) | Space O(N) */
  const left = rob(nums, nextNext, memo); /* Time O(N) | Space O(N) */
  const house = left + right;

  memo[i] = Math.max(mid, house); /*           | Space O(N) */

  return memo[i];
};

const initMemo = (nums) => Array(nums.length + 1).fill(-1);

/**
 * DP - Bottom Up
 * Array - Tabulation
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = (nums) => {
  if (!nums.length) return 0;

  const tabu = initTabu(nums);

  for (let i = 1; i < nums.length; i++) {
    /* Time O(N) */
    const right = nums[i];
    const mid = tabu[i];
    const left = tabu[i - 1];
    const house = left + right;

    tabu[i + 1] = Math.max(mid, house); /* Space O(N) */
  }

  return tabu[nums.length];
};

const initTabu = (nums) => {
  const tabu = Array(nums.length + 1).fill(0);

  tabu[1] = nums[0];

  return tabu;
};

/**
 * DP - Bottom Up
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = (nums) => {
  if (!nums.length) return 0;

  let [left, mid] = [0, 0];

  for (const right of nums) {
    /* Time O(N) */
    const temp = mid;
    const house = left + right;

    mid = Math.max(mid, house);
    left = temp;
  }

  return mid;
};

// Time O(N) | Space O(N)
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}

// Time O(N) | Space O(1)
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev2 = nums[0];
  let prev1 = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let current = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
