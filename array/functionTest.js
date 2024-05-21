let nums = [
  ["Bob", 95],
  ["David", 95],
  ["Alice", 85],
  ["Charlie", 80],
  ["Eve", 70],
];

nums.sort((a, b) => a[0].localeCompare(b[0]));
console.log(nums);
