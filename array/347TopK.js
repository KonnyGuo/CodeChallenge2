/**
 * Set - Frequency Counter | Using sort
 * Time O(NlogN) | Space O(N)
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let frequency = {};
  for (let i = 0; i < nums.length; i++) {
    if (frequency.hasOwnProperty(nums[i])) frequency[nums[i]] += 1;
    else frequency[nums[i]] = 1;
  }
  let result = Object.keys(frequency).map((key) => [
    Number(key),
    frequency[key],
  ]);
  let sortedResult = result.sort((a, b) => {
    return b[1] - a[1];
  });
  let output = [];
  for (let i = 0; i < k; i++) {
    output.push(sortedResult[i][0]);
  }
  return output;
};

/**
 * Without Sort
 * Time O(N) | Space O(k)
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  const mp = new Map();
  const arr = new Array(nums.length + 1).fill(0);
  const ans = [];

  nums.forEach((el) => {
    const val = mp.get(el) || 0;
    mp.set(el, val + 1);
  });

  for (let [key, value] of mp) {
    const prev = arr[value] || [];
    prev.push(key);
    arr[value] = prev;
  }

  arr.reverse();
  for (let el of arr) {
    if (k < 1) break;
    if (el) {
      for (let el2 of el) {
        ans.push(el2);
        k--;
      }
    }
  }

  return ans;
};

// time O(N) | space O(N)
var topKFrequent = function (nums, k) {
  let frequency = {};

  // Count the frequency of each element in nums
  for (let i = 0; i < nums.length; i++) {
    if (frequency.hasOwnProperty(nums[i])) {
      frequency[nums[i]] += 1;
    } else {
      frequency[nums[i]] = 1;
    }
  }

  // Convert the frequency object to an array of [element, frequency] pairs
  let result = Object.keys(frequency).map((key) => [
    Number(key),
    frequency[key],
  ]);

  // Sort the result array in descending order of frequency
  let sortedResult = result.sort((a, b) => {
    return b[1] - a[1]; // Compare function to sort based on frequency
  });

  // Extract the top k elements
  let output = [];
  for (let i = 0; i < k; i++) {
    output.push(sortedResult[i][0]); // Push the element, not the frequency
  }

  return output; // Return the array of top k frequent elements
};

// Time O(N) | Space O(k)
var topKFrequent = function (nums, k) {
  const mp = new Map(); // Map to store frequency of each element
  const arr = new Array(nums.length + 1).fill(0); // Array to store elements grouped by frequency
  const ans = []; // Array to store the final answer

  // Count frequencies of each element in nums
  nums.forEach((el) => {
    const val = mp.get(el) || 0; // Get current frequency or 0 if not present
    mp.set(el, val + 1); // Increment the frequency
  });

  // Group elements by their frequencies
  for (let [key, freq] of mp) {
    const prev = arr[freq] || []; // Get current array of elements with this frequency or empty array
    prev.push(key); // Add current element to this array
    arr[freq] = prev; // Update the array at the index of the frequency
  }

  // Reverse the array to start with the highest frequencies
  arr.reverse();

  // Extract the top K frequent elements
  for (let el of arr) {
    if (k < 1) break; // Stop if we have added k elements
    if (el) {
      for (let el2 of el) {
        ans.push(el2); // Add the element to the answer
        k--; // Decrement k
        if (k === 0) break; // Stop if we have added k elements
      }
    }
  }

  return ans; // Return the final answer
};
