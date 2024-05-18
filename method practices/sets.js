let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);

console.log(mySet);
console.log(mySet.size);

let bool = mySet.has(2);
if (bool) {
  console.log("set contains 2");
} else {
  console.log("set does not contain 2");
}

for (let value of mySet) {
  console.log(`in for`, value);
}

mySet.forEach((value) => console.log(`in forEach ${value}`));

mySet.delete(2);
console.log("deleted 2", mySet);
