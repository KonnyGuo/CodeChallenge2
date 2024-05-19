let myMap = new Map();

myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);
myMap.set("d", 4);

console.log(myMap.keys());
let mySet = new Set(myMap.keys());
console.log(mySet);
