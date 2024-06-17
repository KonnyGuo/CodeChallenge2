let obj = {};

if (obj.hasOwnProperty(1)) {
  obj[1] = obj[1] + 1;
} else {
  obj[1] = 1;
}

console.log(obj.hasOwnProperty(1));
