/**
 * Time O(N^2) | Space O(N)
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let pre = strs[0];

  for (let word of strs) {
    for (let i = pre.length - 1; i >= 0; i--) {
      if (pre[i] !== word[i]) {
        pre = pre.slice(0, i);
      }
    }
  }

  return pre;
};

/**
 * time O(N) | space O(1)
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};
