/**
 * https://leetcode.com/problems/combination-sum/
 * Time O(N * ((Target/MIN) + 1)) | Space O(N * (Target/Min))
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (
  candidates,
  target,
  index = 0,
  combination = [],
  combinations = []
) {
  const isBaseCase = target < 0;
  if (isBaseCase) return combinations;

  const isTarget = target === 0;
  if (isTarget) return combinations.push(combination.slice());

  for (let i = index; i < candidates.length; i++) {
    backTrack(candidates, target, i, combination, combinations);
  }

  return combinations;
};

const backTrack = (candidates, target, i, combination, combinations) => {
  combination.push(candidates[i]);
  combinationSum(
    candidates,
    target - candidates[i],
    i,
    combination,
    combinations
  );
  combination.pop();
};

/**
 * https://leetcode.com/problems/combination-sum/
 * Time O(N * ((Target/MIN) + 1)) | Space O(N * (Target/Min))
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (
  candidates,
  target,
  index = 0,
  combination = [],
  combinationsAns = []
) {
  if (target < 0) return combinationsAns;

  if (target === 0) {
    combinationsAns.push(combination.slice());
    return combinationsAns;
  }

  for (let i = index; i < candidates.length; i++) {
    combination.push(candidates[i]);
    combinationSum(
      candidates,
      target - candidates[i],
      i,
      combination,
      combinationsAns
    );
    combination.pop();
  }

  return combinationsAns;
};

/**
 * Time O(2^N) | Space O(N)
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const result = [];

  function backtrack(combination, start, sum) {
    if (sum === target) {
      return result.push([...combination]);
    }
    if (sum > target) return combination;

    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(combination, i, sum + candidates[i]);
      combination.pop();
    }
  }

  backtrack([], 0, 0);
  return result;
}
