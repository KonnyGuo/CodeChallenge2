/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
 * Time O(N * logN) | Space O(N)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = (s, t) => {
  const isEqual = s.length === t.length;
  if (!isEqual) return false;

  return reorder(s) === reorder(t); /* Time O(N * logN) | Space O(N) */
};

const reorder = (str) =>
  str
    .split("") /* Time O(N)          | Space O(N) */
    .sort((a, b) =>
      a.localeCompare(b)
    ) /* Time O(N * log(N)) | Space O(1 || log(N)) */
    .join(""); /* Time O(N)          | Space O(N) */

/**
 * Hash Map - Frequency Counter
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = (s, t, map = new Map()) => {
  const isEqual = s.length === t.length;
  if (!isEqual) return false;

  addFrequency(s, map); /* Time O(N) | Space O(1) */
  subtractFrequency(t, map); /* Time O(N) | Space O(1) */

  return checkFrequency(map); /* Time O(N) */
};

const addFrequency = (str, map) => {
  for (const char of str) {
    /* Time O(N) */
    const count = (map.get(char) || 0) + 1;

    map.set(char, count); /* Space O(1) */
  }
};

const subtractFrequency = (str, map) => {
  for (const char of str) {
    /* Time O(N) */
    if (!map.has(char)) continue;

    const count = map.get(char) - 1;

    map.set(char, count); /* Space O(1) */
  }
};

const checkFrequency = (map) => {
  for (const [char, count] of map) {
    /* Time O(N) */
    const isEmpty = count === 0;
    if (!isEmpty) return false;
  }

  return true;
};

// alternate solution
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false; // Anagrams must have the same length
  }

  const charFrequency = new Map();

  // Increment frequency for characters in string s
  for (const char of s) {
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }

  // Decrement frequency for characters in string t
  for (const char of t) {
    if (!charFrequency.has(char)) {
      return false; // Character in t not present in s
    }

    charFrequency.set(char, charFrequency.get(char) - 1);

    // Remove entry if frequency becomes zero
    if (charFrequency.get(char) === 0) {
      charFrequency.delete(char);
    }
  }

  return charFrequency.size === 0; // Check if all characters are balanced
};
