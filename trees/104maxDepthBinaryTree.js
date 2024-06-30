/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Time O(N) | Space O(N)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const isBaseCase = root === null;
  if (isBaseCase) return 0;

  return dfs(root);
};

const dfs = (root) => {
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  const height = Math.max(left, right);

  return height + 1;
};

/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Time O(N) | Space O(N)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const isBaseCase = root === null;
  if (isBaseCase) return 0;

  return iterativeDfs([[root, 1]]);
};

const iterativeDfs = (stack, height = 0) => {
  while (stack.length) {
    const [root, depth] = stack.pop();

    height = Math.max(height, depth);

    if (root.right) stack.push([root.right, depth + 1]);
    if (root.left) stack.push([root.left, depth + 1]);
  }

  return height;
};

/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Time O(N) | Space O(N)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const isBaseCase = root === null;
  if (isBaseCase) return 0;

  return bfs([[root, 0]]);
};

const bfs = (queue, height = 0) => {
  while (queue.length) {
    for (let i = queue.length - 1; 0 <= i; i--) {
      const [root, depth] = queue.shift();

      height = Math.max(height, depth + 1);

      if (root.left) queue.push([root.left, depth + 1]);
      if (root.right) queue.push([root.right, depth + 1]);
    }
  }

  return height;
};

/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Time O(N) | Space O(N)
 * @param {TreeNode} root
 * @return {number}
 */
// dfs recursion
var maxDepth = function (root) {
  if (root === null) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};

/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Time O(N) | Space O(N)
 * @param {TreeNode} root
 * @return {number}
 */
// bfs
var maxDepth = function (root) {
  if (root === null) return 0;

  let queue = [[root, 1]];
  let maxDepth = 0;

  while (queue.length) {
    const [node, depth] = queue.shift();

    maxDepth = Math.max(maxDepth, depth);

    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }

  return maxDepth;
};
