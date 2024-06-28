/**
 * @param {number[]} piles
 * @param {number} h
 * Time O(N * log(M)) | Space O(1)
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, Math.max(...piles)];

  while (left < right) {
    const mid = (left + right) >> 1;
    const hourSpent = getHourSpent(mid, piles);

    const isTargetGreater = h < hourSpent;
    if (isTargetGreater) left = mid + 1;

    const isTargetLess = hourSpent <= h;
    if (isTargetLess) right = mid;
  }

  return right;
};

const getHourSpent = (mid, piles, hourSpent = 0) => {
  for (const pile of piles) {
    hourSpent += Math.ceil(pile / mid);
  }

  return hourSpent;
};

/**
 * @param {number[]} piles
 * @param {number} h
 * Time O(N * log(M)) | Space O(1)
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, Math.max(...piles)];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let hourSpent = 0;

    for (const pile of piles) {
      hourSpent += Math.ceil(pile / mid);
    }

    if (hourSpent > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  // either left or right can be returned
  return right;
};

/**
 * @param {number[]} piles
 * @param {number} h
 * Time O(N * log(M)) | Space O(1)
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, Math.max(...piles)];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let hourSpent = 0;

    for (const pile of piles) {
      hourSpent += Math.ceil(pile / mid);
    }

    if (hourSpent > h) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
