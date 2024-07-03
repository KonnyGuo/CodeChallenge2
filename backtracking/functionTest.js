// var subsets = function (nums) {
//   nums.sort((a, b) => a - b);

//   let subsets = [[]];

//   for (const num of nums) {
//     console.log("num", num);
//     const levels = subsets.length;

//     for (let level = 0; level < levels; level++) {
//       const nextLevel = [...subsets[level], num];
//       console.log("nextLevel", nextLevel);
//       subsets.push(nextLevel);
//       console.log("subsets", subsets);
//     }
//   }

//   return subsets;
// };

// subsets([1, 2, 3]);

let empty = [];
let test = [1, 2, 3];
empty.push(test.slice());

console.log(empty);
