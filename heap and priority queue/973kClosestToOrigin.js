// time: O(N log(N))
// space: O(1)
// https://leetcode.com/problems/k-closest-points-to-origin/description/
var kClosest = function (points, K) {
  points.sort(
    (a, b) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1])
  );

  return points.slice(0, K);
};
