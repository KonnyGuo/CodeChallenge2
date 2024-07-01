/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * TIme O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root, max = [0]) {
  diameterOfTree(root, max);

  return max[0];
};

const diameterOfTree = (root, max) => {
  const isBaseCase = root === null;
  if (isBaseCase) return 0;

  return dfs(root, max);
};

const dfs = (root, max) => {
  const left = diameterOfTree(root.left, max);
  const right = diameterOfTree(root.right, max);

  const diameter = left + right;
  max[0] = Math.max(max[0], diameter);

  const height = Math.max(left, right);

  return height + 1;
};

/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * TIme O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  function dfs(node) {
    if (node === null) return 0;

    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);

    // Update the max diameter
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

    // Return the height of this subtree
    return Math.max(leftHeight, rightHeight) + 1;
  }

  dfs(root);
  return maxDiameter;
};
