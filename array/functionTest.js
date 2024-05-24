// function productExceptSelf(nums) {
//   const result = [];
//   let prefix = 1;
//   let postfix = 1;

//   for (let i = 0; i < nums.length; i++) {
//     result[i] = prefix;
//     prefix = prefix * nums[i];
//     console.log("Iteration", i, "prefix", result[i]);
//   }
//   for (let i = nums.length - 2; i >= 0; i--) {
//     postfix = postfix * nums[i + 1];
//     result[i] = result[i] * postfix;
//     console.log("Iteration", i, "postfix", result[i]);
//   }

//   return result;
// }

// let nums = [1, 2, 3, 4];
// productExceptSelf(nums);

let testList = [1, 2];
console.log(testList[2]);
