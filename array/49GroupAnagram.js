/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(K))
 * Hash Map - Adjacency List
 * Time O(N * (K * log(K))) | Space O(N * K)
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (words, map = new Map()) => {
  if (!words.length) return [];

  groupWords(words, map); /* Time O(N * (K * log(K)) | Space O(N * K) */

  return [...map.values()]; /* Time O(N)               | Space O(N * K) */
};

var groupWords = (words, map) => {
  for (const original of words) {
    /* Time O(N) */
    const sorted = reorder(original); /* Time O(K * log(K)) | Space O(K) */
    const values = map.get(sorted) || [];

    values.push(original); /*                    | Space O(N) */
    map.set(sorted, values); /*                    | Space O(N * K) */
  }
};

const reorder = (str) =>
  str
    .split("") /* Time O(K)          | Space O(K) */
    .sort((a, b) =>
      a.localeCompare(b)
    ) /* Time O(K * log(K)) | Space O(1 || log(K)) */
    .join(""); /* Time O(K)          | Space O(K) */

/**
 * Hash Map
 * Time O(N * K) | Space O(N * K)
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} words
 * @return {string[][]}
 */
var groupAnagrams = (words, map = new Map()) => {
  if (!words.length) return [];

  groupWords(words, map); /* Time O(N * K) | Space O(N * K) */

  return [...map.values()]; /* Time O(N)     | Space O(N * K) */
};

var groupWords = (words, map) => {
  for (const original of words) {
    /* Time O(N) */
    const hash = getHash(original); /* Time O(K) | Space O(1) */
    const values = map.get(hash) || [];

    values.push(original); /*           | Space O(N) */
    map.set(hash, values); /*           | Space O(N * K) */
  }
};

const getHash = (word) => {
  const frequency = new Array(26).fill(0);

  for (const char of word) {
    /* Time O(K) */
    const charCode = getCode(char); /* Time O(1) | Space (1) */

    frequency[charCode]++; /*           | Space O(1) */
  }

  return buildHash(frequency);
};

const getCode = (char) => char.charCodeAt(0) - "a".charCodeAt(0);

const buildHash = (frequency) => frequency.toString();

/**
 * Group anagrams together.
 * Time Complexity: O(N * (K * log(K))), where N is the number of strings and K is the maximum length of a string.
 * Space Complexity: O(N * K), where N is the number of strings and K is the maximum length of a string.
 * @param {string[]} strs - Array of strings.
 * @returns {string[][]} - Grouped anagrams.
 */

const groupAnagrams = (strs) => {
  const map = new Map();
  for (const word of strs) {
    const sorted = word.split("").sort().join("");
    const val = map.get(sorted) || [];
    val.push(word);
    map.set(sorted, val);
  }

  return [...map.values()];
};
