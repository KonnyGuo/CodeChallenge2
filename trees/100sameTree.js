/**
 * https://leetcode.com/problems/same-tree/
 * TIme O(N) | Space O(H)
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const isBaseCase = !(p || q);
  if (isBaseCase) return true;

  const isBalanced = p && q;
  if (!isBalanced) return false;

  const isSame = p.val === q.val;
  if (!isSame) return false;

  return dfs(p, q);
};

const dfs = (p, q) => {
  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);

  return left && right;
};

/**
 * https://leetcode.com/problems/same-tree/
 * TIme O(N) | Space O(W)
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function isSameNode(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val;
  }

  let queue = [[p, q]];

  while (queue.length > 0) {
    let [nodeP, nodeQ] = queue.shift();

    if (!isSameNode(nodeP, nodeQ)) return false;

    if (nodeP) {
      if (!isSameNode(nodeP.left, nodeQ.left)) return false;
      if (!isSameNode(nodeP.right, nodeQ.right)) return false;

      if (nodeP.left) queue.push([nodeP.left, nodeQ.left]);
      if (nodeP.right) queue.push([nodeP.right, nodeQ.right]);
    }
  }

  return true;
};
