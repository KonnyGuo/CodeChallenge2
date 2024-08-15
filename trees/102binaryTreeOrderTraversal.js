/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Time O(N) | Space O(W)
 * Note that the time complexity is actually O(N^2) if we consider the fact that we use an array as a queue. Calling Array.shift() takes O(N).
 * @param {TreeNode} root
 * @return {number[][]}
 */
