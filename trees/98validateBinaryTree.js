/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function (root, min = -Infinity, max = Infinity) {
  const isBaseCase = root === null;
  if (isBaseCase) return true;

  const isInvalid = root.val <= min || max <= root.val;
  if (isInvalid) return false;

  return dfs(root, min, max);
};

const dfs = (root, min, max) => {
  const left = isValidBST(root.left, min, root.val);
  const right = isValidBST(root.right, root.val, max);

  return left && right;
};

// TODO
/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {boolean}
 */
