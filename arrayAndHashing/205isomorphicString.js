// time O(N) | space O(N)
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapOne = new Map();
  const mapTwo = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapOne.has(s[i])) {
      if (mapOne.get(s[i]) !== t[i]) return false;
    } else mapOne.set(s[i], t[i]);

    if (mapTwo.has(t[i])) {
      if (mapTwo.get(t[i]) !== s[i]) return false;
    } else mapTwo.set(t[i], s[i]);
  }

  return true;
};

/**
 * time O(N) | space O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const sToT = new Map();
  const tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!sToT.has(charS) && !tToS.has(charT)) {
      sToT.set(charS, charT);
      tToS.set(charT, charS);
    } else if (sToT.get(charS) !== charT || tToS.get(charT) !== charS) {
      return false;
    }
  }

  return true;
};
