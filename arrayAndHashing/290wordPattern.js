// problem link https://leetcode.com/problems/word-pattern
// time coplexity O(n)
// space complexity O(n)

var wordPattern = function (pattern, s) {
  s = s.split(" ");

  if (s.length !== pattern.length) return false;

  wordToChar = new Map();
  charToWord = new Map();

  for (let i = 0; i < pattern.length; i++) {
    wordToChar.set(s[i], pattern[i]);
    charToWord.set(pattern[i], s[i]);
  }

  for (let i = 0; i < pattern.length; i++) {
    if (
      charToWord.get(pattern[i]) !== s[i] ||
      pattern[i] !== wordToChar.get(s[i])
    ) {
      return false;
    }
  }

  return true;
};

/**
 * time O(n) | space O(k)
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

function wordPattern(pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (charToWord.has(char)) {
      if (charToWord.get(char) !== word) {
        return false;
      }
    } else {
      charToWord.set(char, word);
    }

    if (wordToChar.has(word)) {
      if (wordToChar.get(word) !== char) {
        return false;
      }
    } else {
      wordToChar.set(word, char);
    }
  }

  return true;
}
