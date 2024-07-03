function minCostClimbingStairs(cost) {
  const n = cost.length;
  let first = 0; // Represents dp[i-2]
  let second = 0; // Represents dp[i-1]

  for (let i = 2; i <= n; i++) {
    const current = Math.min(first + cost[i - 2], second + cost[i - 1]);
    first = second;
    second = current;
  }

  return second;
}
