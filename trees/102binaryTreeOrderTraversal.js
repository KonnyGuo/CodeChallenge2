/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Time O(N) | Space O(W)
 * Note that the time complexity is actually O(N^2) if we consider the fact that we use an array as a queue. Calling Array.shift() takes O(N).
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
  const isBaseCase = root === null;
  if (isBaseCase) return [];

  return bfs([root]);
};

const bfs = (queue /* Space O(W) */, levels = []) => {
  while (queue.length) {
    // Time O(N)
    const level = [];

    for (let i = queue.length - 1; 0 <= i; i--) {
      const node = queue.shift(); // Time O(N) ... This can be O(1) if we use an actual queue data structure

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      level.push(node.val);
    }

    levels.push(level.slice());
  }

  return levels;
};

/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {number[]}
 */
