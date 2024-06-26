/**
 * Brute Force
 * Greedy - Max Score
 * Time O (N^3) | Space O(1)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums, maxScore = 0) => {
  for (const num of nums) {
    /* Time O(N) */
    let [currNum, score] = [num, 1];

    while (isStreak(nums, currNum + 1)) {
      /* Time O(N * N) */
      currNum++;
      score++;
    }

    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};

const isStreak = (nums, num) => {
  for (let i = 0; i < nums.length; i++) {
    /* Time O(N) */
    const isEqual = nums[i] === num;
    if (isEqual) return true;
  }

  return false;
};

/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(K))
 * Greedy - Max Score
 * Time O (N * log(N)) | Space O(1)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums) => {
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b); /* Time O(N * log(N)) | Space O(1 || log(N)) */

  return search(nums); /* Time O(N) */
};

const search = (nums) => {
  let [maxScore, score] = [1, 1];

  for (let i = 1; i < nums.length; i++) {
    /* Time O(N) */
    const isPrevDuplicate = nums[i - 1] === nums[i];
    if (isPrevDuplicate) continue;

    const isStreak = nums[i] === nums[i - 1] + 1;
    if (isStreak) {
      score++;
      continue;
    }

    maxScore = Math.max(maxScore, score);
    score = 1;
  }

  return Math.max(maxScore, score);
};

/**
 * Hash Set - Intelligent Sequence
 * Greedy - Max Score
 * Time O (N) | Space O(N)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums, maxScore = 0) => {
  const numSet = new Set(nums); /* Time O(N) | Space O(N) */

  for (const num of [...numSet]) {
    /* Time O(N) */
    const prevNum = num - 1;

    if (numSet.has(prevNum)) continue; /* Time O(N) */

    let [currNum, score] = [num, 1];

    const isStreak = () => numSet.has(currNum + 1);
    while (isStreak()) {
      /* Time O(N) */
      currNum++;
      score++;
    }

    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};

// Time O (N) | Space O(N)
var longestConsecutive = (nums, maxScore = 0) => {
  const numSet = new Set(nums); /* Time O(N) | Space O(N) */

  for (const num of numSet) {
    /* Time O(N) */
    const prevNum = num - 1;

    if (!numSet.has(prevNum)) {
      // score will always be start at 1
      let [currNum, score] = [num, 1];

      const isStreak = () => numSet.has(currNum + 1);
      while (isStreak()) {
        /* Time O(N) */
        currNum++;
        score++;
      }

      maxScore = Math.max(maxScore, score);
    }
  }
  return maxScore;
};

// // time O(N+M) | space O(N)
// var longestConsecutive = function (nums) {
//   const numSet = new Set(nums);
//   let maxLength = 0;

//   for (const num of nums) {
//     if (!numSet.has(num - 1)) {
//       let currLength = 1;
//       let currNum = num + 1;

//       while (numSet.has(currNum)) {
//         currLength++;
//         currNum++;
//       }

//       maxLength = Math.max(maxLength, currLength);
//     }
//   }

//   return maxLength;
// };
