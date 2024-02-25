/**
 * Array - Filter && Clone && Reverse
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s.length) return true;

  const alphaNumeric = filterAlphaNumeric(s); /* Time O(N) | Space O(N) */
  const reversed = reverse(alphaNumeric); /* Time O(N) | Space O(N) */

  return alphaNumeric === reversed;
};

const filterAlphaNumeric = (
  s,
  nonAlphaNumeric = new RegExp("[^a-z0-9]", "gi")
) =>
  s
    .toLowerCase() /* Time O(N) | Space O(N) */
    .replace(nonAlphaNumeric, ""); /* Time O(N) | Space O(N) */
