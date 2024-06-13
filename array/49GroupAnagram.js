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

/**
 * Group anagrams together using a hash function.
 * Time Complexity: O(N * K), where N is the number of strings and K is the maximum length of a string.
 * Space Complexity: O(N * K), where N is the number of strings and K is the maximum length of a string.
 * @param {string[]} words - Array of strings.
 * @return {string[][]} - Grouped anagrams.
 */
const groupAnagrams = (words) => {
  // Define a hash function to calculate the hash value of a word
  const getHash = (word) => {
    const frequency = new Array(26).fill(0); // Initialize an array to store character frequencies

    // Calculate frequency of each character in the word
    for (const char of word) {
      const charCode = getCode(char); // Get the character code
      frequency[charCode]++; // Increment the frequency of the character
    }

    return frequency.join(","); // Build the hash string from the frequency array
  };

  // Helper function to get the character code
  const getCode = (char) => char.charCodeAt(0) - "a".charCodeAt(0);

  // Initialize a Map to store grouped anagrams
  const map = new Map();

  // Iterate through each string in the array
  for (const word of words) {
    const hash = getHash(word); // Get the hash value of the word
    const anagrams = map.get(hash) || []; // Get the array of anagrams for the hash value
    anagrams.push(word); // Add the word to the array of anagrams
    map.set(hash, anagrams); // Update the map with the new array of anagrams
  }

  // Return an array containing the grouped anagrams
  return [...map.values()];
};

// Time Complexity: O(n * m)
// Space Complexity: O(n)
var groupAnagrams = function (strs) {
  const getHash = (word) => {
    const freq = new Array(26).fill(0);
    for (const char of word) {
      const charCode = char.charCodeAt(0) - "a".charCodeAt(0);
      freq[charCode]++;
    }
    // toString() also works
    return freq.join(",");
  };

  const map = new Map();
  for (const word of strs) {
    const hash = getHash(word);
    const anagram = map.get(hash) || [];
    anagram.push(word);
    map.set(hash, anagram);
  }

  return [...map.values()];
};
