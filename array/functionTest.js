var groupAnagrams = function (strs) {
  if (!strs.length) {
    return [];
  }
  const getHash = (word) => {
    const freq = new Array(26).fill(0);
    for (const char of word) {
      const charCode = char.charCodeAt(0) - "a".charCodeAt(0);
      freq[charCode]++;
    }
    return console.log(freq.toString());
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

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams2 = function (strs) {
  if (!strs.length) {
    return [];
  }

  const getHash = (word) => {
    const freq = new Array(26).fill(0);
    for (const char of word) {
      const charCode = char.charCodeAt(0) - "a".charCodeAt(0);
      freq[charCode]++;
    }
    return console.log(freq.join(","));
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

strArr = ["bdddddddddd", "bbbbbbbbbbc"];
// groupAnagrams(strArr);
// groupAnagrams2(strArr);

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numArr.join(""));
