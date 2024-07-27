// problem link https://leetcode.com/problems/maximum-number-of-balloons
// time complexity O(n)
// space complexity O(n)

var maxNumberOfBalloons = function (text) {
  const balloonCach = {};
  const ballonSet = new Set(text.split(""));

  for (const char of text) {
    if (!ballonSet.has(char)) continue;

    const count = (balloonCach[char] ?? 0) + 1;
    balloonCach[char] = count;
  }

  let min = Math.min(
    balloonCach["b"],
    balloonCach["a"],
    balloonCach["n"],
    Math.floor(balloonCach["l"] / 2),
    Math.floor(balloonCach["o"] / 2)
  );

  return min ? min : 0;
};

function maxNumberOfBalloons(text) {
  const charCount = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  // Count occurrences of each character
  for (let char of text) {
    if (charCount.hasOwnProperty(char)) {
      charCount[char]++;
    }
  }

  // Adjust counts for 'l' and 'o' as they appear twice in "balloon"
  charCount["l"] = Math.floor(charCount["l"] / 2);
  charCount["o"] = Math.floor(charCount["o"] / 2);

  // Find the minimum count, which represents the maximum number of "balloon" instances
  return Math.min(
    charCount["b"],
    charCount["a"],
    charCount["l"],
    charCount["o"],
    charCount["n"]
  );
}
