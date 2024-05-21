// let nums = [
//   ["Bob", 95],
//   ["David", 95],
//   ["Alice", 85],
//   ["Charlie", 80],
//   ["Eve", 70],
// ];

// nums.sort((a, b) => a[0].localeCompare(b[0]));
// console.log(nums);

const person = {
  1: "Alice",
  2: 25,
};

list = [1, 2, 3, 4];

let result = Object.keys(person).map((p) => {
  return [Number(p), person[p]];
});

// for (let i = 0; i < result.length; i++) {
//   console.log(result[i]);
// }
// console.log(...result);
// console.log(...list);

let newlist = [...list];
for (let i = 0; i < newlist.length; i++) {
  console.log(newlist[i]);
}
