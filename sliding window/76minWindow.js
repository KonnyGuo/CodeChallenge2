/**
 * https://leetcode.com/problems/minimum-window-substring/
 * Time O(N + M) | SpaceO(N + M)
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const isMissingArgs = !s.length || !t.length;
  if (isMissingArgs) return "";

  const frequencyMap = getFrequencyMap(t);
  const { start, end } = getWindowPointers(s, t, frequencyMap);

  return getSubString(s, start, end);
};

const getFrequencyMap = (str, frequencyMap = new Map()) => {
  for (const char of str) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  return frequencyMap;
};

const getWindowPointers = (s, t, frequencyMap) => {
  let [left, right, matched, start, end] = [0, 0, 0, 0, s.length + 1];

  while (right < s.length) {
    matched = addRightFrequency(s, right, frequencyMap, matched);

    const canSlide = () => matched === t.length;
    while (canSlide()) {
      const window = right - left + 1;

      const isSmaller = window < end;
      if (isSmaller) {
        [start, end] = [left, window];
      }

      matched = subtractLeftFrequency(s, left, frequencyMap, matched);
      left++;
    }

    right++;
  }

  return { start, end };
};

const addRightFrequency = (s, right, frequencyMap, matched) => {
  const char = s[right];

  if (frequencyMap.has(char)) {
    frequencyMap.set(char, frequencyMap.get(char) - 1);

    const isInWindow = 0 <= frequencyMap.get(char);
    if (isInWindow) matched++;
  }

  return matched;
};

const subtractLeftFrequency = (s, left, frequencyMap, matched) => {
  const char = s[left];

  if (frequencyMap.has(char)) {
    const isOutOfWindow = frequencyMap.get(char) === 0;
    if (isOutOfWindow) matched--;

    frequencyMap.set(char, frequencyMap.get(char) + 1);
  }

  return matched;
};

const getSubString = (s, start, end) =>
  end <= s.length ? s.slice(start, start + end) : "";

/**
 * https://leetcode.com/problems/minimum-window-substring/
 * Time O(N + M) | SpaceO(N + M)
 * @param {string} s
 * @param {string} t
 * @return {string}
 */ function minWindow(s, t) {
  const need = new Map();
  const window = new Map();
  let left = 0,
    right = 0;
  let valid = 0;
  let start = 0,
    len = Infinity;

  for (let char of t) {
    if (need.has(char)) {
      need.set(char, need.get(char) + 1);
    } else {
      need.set(char, 1);
    }
  }

  while (right < s.length) {
    let c = s[right];
    right++;

    if (need.has(c)) {
      if (window.has(c)) {
        window.set(c, window.get(c) + 1);
      } else {
        window.set(c, 1);
      }
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    while (valid === need.size) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      let d = s[left];
      left++;

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }

  if (len === Infinity) {
    return "";
  } else {
    return s.slice(start, start + len);
  }
}
