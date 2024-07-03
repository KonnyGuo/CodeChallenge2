function climbStairs(n) {
  if (n <= 1) return 1;

  let prev = 1; // Ways to climb 0 stairs (base case)
  let curr = 1; // Ways to climb 1 stair (base case)

  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr = prev + curr; // Ways to climb i stairs
    prev = temp;
  }

  return curr;
}

console.log(climbStairs(5));
