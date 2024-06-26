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
// Time O(N) | Space O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const myMap = new Map();

  for (const charOfS of s) {
    myMap.set(charOfS, (myMap.get(charOfS) || 0) + 1);
  }

  for (const charOfT of t) {
    if (!myMap.has(charOfT)) {
      return false;
    }

    myMap.set(charOfT, myMap.get(charOfT) - 1);
    if (myMap.get(charOfT) === 0) {
      myMap.delete(charOfT);
    }
  }

  return myMap.size === 0;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let myMap = new Map();

  for (const char of s) {
    myMap.set(char, (myMap.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!myMap.has(char)) {
      return false;
    }

    myMap.set(char, myMap.get(char) - 1);
    if (myMap.get(char) === 0) {
      myMap.delete(char);
    }
  }

  return myMap.size === 0;
};
