let myMap = new Map();

myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);
myMap.set("d", 4);

console.log(myMap.get("b"));
console.log(myMap.size);
console.log(myMap.has("b"));

for (let [key, value] of myMap) {
  console.log(key, value);
}
