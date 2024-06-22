var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const threeSum = a + nums[l] + nums[r];
      console.log("left,", l);
      console.log("right,", r);
      console.log(
        "threeSum, a, nums[l], nums[r]",
        threeSum,
        a,
        nums[l],
        nums[r]
      );
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([a, nums[l], nums[r]]);
        console.log("pushing to res", [a, nums[l], nums[r]]);
        l++;
        r--;
        while (nums[l] === nums[l - 1] && l < r) {
          console.log("skipping duplicate", nums[l]);
          l++;
        }
      }
    }
  }
  return res;
};

let inputArr = [-2, 0, 0, 2, 2];

threeSum(inputArr);

// for (let i = 0; i < 5; i++) {
//   if (i > 0) continue;
//   console.log(i);
// }
