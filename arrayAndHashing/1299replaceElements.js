/**
 * Reverse - Space O(1)
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = (arr, max = -1, ans = [-1]) => {
  arr = arr.reverse(); /* Time O(N) */

  for (let i = 0; i < arr.length - 1; i++) {
    /* Time O(N) */
    max = Math.max(max, arr[i]);
    ans[i + 1] = max; /* Space O(N) */
  }

  return ans.reverse(); /* Time O(N) */
};

/**
 * Backward - In-Place
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = (arr, max = -1) => {
  for (let i = arr.length - 1; 0 <= i; i--) {
    /* Time O(N) */
    const num = arr[i];

    arr[i] = max;
    max = Math.max(max, num);
  }

  return arr;
};
//  This is brute force with O(n^2). Just for reference's sake.
// submission link: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/submissions/844439163/
var replaceElementsBrute = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = biggestElement(i, arr);
  }

  arr[arr.length - 1] = -1;
  return arr;
};

function biggestElement(index, arr) {
  let biggest = 0;
  for (let i = index + 1; i < arr.length; i++) {
    biggest = Math.max(biggest, arr[i]);
  }

  return biggest;
}

/**
 * Time O(N) | Space O(1)
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr) {
  let max = -1; // Initialize max to -1 (for the last element)

  // Iterate from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i]; // Store the current element
    arr[i] = max; // Replace current element with max seen so far
    max = Math.max(max, current); // Update max if current is greater
  }

  return arr;
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let answerArr = [];
  let currentMax = -1;
  for (let i = arr.length - 1; i > -1; i--) {
    answerArr[i] = currentMax;
    currentMax = Math.max(currentMax, arr[i]);
  }
  return answerArr;
};
