/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * Time O(((N + 26) * N) * (M - N)) | Space O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let res = 0;
  let count = new Map();
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    let len = r - l + 1;
    count.set(s[r], 1 + (count.get(s[r]) || 0));

    if (len - Math.max(...count.values()) > k) {
      count.set(s[l], count.get(s[l]) - 1);
      l++;
    }
    len = r - l + 1;
    res = Math.max(res, len);
  }

  return res;
};

/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * Time O(((N + 26) * N) * (M - N)) | Space O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let [left, right, longest, max] = new Array(4).fill(0);
  const frequencyMap = new Array(26).fill(0);

  while (right < s.length) {
    const count = addRightFrequency(s, right, frequencyMap);

    longest = Math.max(longest, count);

    let window = right - left + 1;
    const canSlide = k < window - longest;
    if (canSlide) {
      subtractLeftFrequency(s, left, frequencyMap);
      left++;
    }

    window = right - left + 1;
    max = Math.max(max, window);

    right++;
  }

  return max;
};

const addRightFrequency = (s, right, map) => {
  const char = s[right];
  const index = getCode(char);

  map[index]++;

  return map[index];
};

const subtractLeftFrequency = (s, left, map) => {
  const char = s[left];
  const index = getCode(char);

  map[index]--;

  return map[index];
};

const getCode = (char) => char.charCodeAt(0) - "A".charCodeAt(0);

/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * Time O(((N + 26) * N) * (M - N)) | Space O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let res = 0;
  let myMap = new Map();
  let left = 0;
  let maxCount = 0;

  for (let right = 0; right < s.length; right++) {
    myMap.set(s[right], 1 + (myMap.get(s[right]) || 0));
    maxCount = Math.max(maxCount, myMap.get(s[right]));

    // window size - maxCount should not be greater than k as we  are not trying to shrink window size
    if (right - left + 1 - maxCount > k) {
      // Remove leftmost character so it loses a count
      myMap.set(s[left], myMap.get(s[left]) - 1);
      left++;
    }
    res = Math.max(res, right - left + 1);
  }

  return res;
};
