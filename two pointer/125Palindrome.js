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
