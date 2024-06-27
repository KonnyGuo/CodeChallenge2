stack = [];
left = ["123", "abc"];
right = ["()"];

// template literal gets rid of array and try to concat it as string
stack.push(`${left}${right}`);
console.log(stack);

// var generateParenthesis = (n, combos = []) => {
//   const isBaseCase = n === 0;
//   if (isBaseCase) {
//     combos.push("");
//     return combos;
//   }

//   for (let c = 0; c < n; c++) {
//     console.log("iteration", c);
//     for (const left of generateParenthesis(c)) {
//       //   console.log("left, c", left, c);
//       for (const right of generateParenthesis(n - 1 - c)) {
//         // console.log("right, n - 1 - c", right, n - 1 - c);
//         combos.push(`(${left})${right}`);
//       }
//     }
//   }

//   return combos;
// };

// generateParenthesis(3);
