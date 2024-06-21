/**
 * Time O(N^2) | Space O(N)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const threeSum = a + nums[l] + nums[r];
      console.log("left,", l);
      console.log("right,", r);
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([a, nums[l], nums[r]]);
        l++;
        r--;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
};

/**
 * Time O(N^2) | Space O(N)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    // there are no negatives in loop
    if (a > 0) break;

    // Skip duplicates for 'a'
    // Skips first iteration when i = 0
    if (!(i > 0 && a === nums[i - 1])) {
      let l = i + 1;
      let r = nums.length - 1;

      while (l < r) {
        const threeSum = a + nums[l] + nums[r];
        if (threeSum < 0) {
          l++;
        } else if (threeSum > 0) {
          r--;
        } else {
          res.push([a, nums[l], nums[r]]);
          l++;
          r--;

          // Skip duplicates for 'l'
          while (l < r && nums[l] === nums[l - 1]) {
            l++;
          }
        }
      }
    }
  }
  return res;
};
