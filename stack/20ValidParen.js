/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-brackettheses/
 * @param {string} s
 * @return {boolean}
 */
// last in first out
var isValid = (s, stack = []) => {
  for (const bracket of s.split("")) {
    /* Time O(N) */
    const isbracketthesis = bracket === "(";
    if (isbracketthesis) stack.push(")"); /* Space O(N) */

    const isCurlyBrace = bracket === "{";
    if (isCurlyBrace) stack.push("}"); /* Space O(N) */

    const isSquareBracket = bracket === "[";
    if (isSquareBracket) stack.push("]"); /* Space O(N) */

    const isOpenPair = isbracketthesis || isCurlyBrace || isSquareBracket;
    if (isOpenPair) continue;

    const isEmpty = !stack.length;
    const isWrongPair = stack.pop() !== bracket;
    const isInvalid = isEmpty || isWrongPair;
    if (isInvalid) return false;
  }

  return stack.length === 0;
};

/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-brackettheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s, stack = []) => {
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of s) {
    /* Time O(N) */
    const isBracket = char in map;
    if (!isBracket) {
      stack.push(char);
      continue;
    } /* Space O(N) */

    const isEqual = stack[stack.length - 1] === map[char];
    if (isEqual) {
      stack.pop();
      continue;
    }

    return false;
  }

  return stack.length === 0;
};

/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-brackettheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s, stack = []) => {
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const bracket of s) {
    /* Time O(N) */
    const isBracket = bracket in map;
    if (!isBracket) {
      stack.push(bracket);
    } else {
      const isEqual = stack[stack.length - 1] === map[bracket];
      if (isEqual) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
