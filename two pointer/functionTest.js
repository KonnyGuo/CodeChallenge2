// var threeSum = function (nums) {
//   const res = [];
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     console.log(i);
//     const a = nums[i];
//     if (a > 0) break;
//     if (i > 0 && a === nums[i - 1]) continue;

//     let l = i + 1;
//     let r = nums.length - 1;
//     while (l < r) {
//       const threeSum = a + nums[l] + nums[r];
//       console.log("left,", l);
//       console.log("right,", r);
//       console.log(
//         "threeSum, a, nums[l], nums[r]",
//         threeSum,
//         a,
//         nums[l],
//         nums[r]
//       );
//       if (threeSum > 0) {
//         r--;
//       } else if (threeSum < 0) {
//         l++;
//       } else {
//         res.push([a, nums[l], nums[r]]);
//         console.log("pushing to res", [a, nums[l], nums[r]]);
//         l++;
//         r--;
//         while (nums[l] === nums[l - 1] && l < r) {
//           console.log("skipping duplicate", nums[l]);
//           l++;
//         }
//       }
//     }
//   }
//   return res;
// };

// let inputArr = [-2, 0, 0, 2, 2];

// threeSum(inputArr);

// // for (let i = 0; i < 5; i++) {
// //   if (i > 0) continue;
// //   console.log(i);
// // }

var trap = function (height) {
  const maxLeft = [];
  const maxRight = [];
  const minLeftRight = [];

  let current = 0;
  for (let i = 0; i < height.length; i++) {
    maxLeft.push(current);
    current = Math.max(current, height[i]);
  }

  console.log("array of left", maxLeft);
  current = 0;
  for (let i = height.length - 1; i > -1; i--) {
    maxRight.push(current);
    current = Math.max(current, height[i]);
  }
  console.log("array of right", maxRight);

  // because the elements were added reverse.
  maxRight.reverse();
  console.log("array of right reverse", maxRight);

  for (let i = 0; i < height.length; i++) {
    const minofLeftRight = Math.min(maxLeft[i], maxRight[i]);
    minLeftRight.push(minofLeftRight);
  }

  let water = 0;
  for (let i = 0; i < height.length; i++) {
    if (minLeftRight[i] - height[i] > 0) {
      water += minLeftRight[i] - height[i];
    }
  }

  return water;
};

let inputHeight = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
trap(inputHeight);
