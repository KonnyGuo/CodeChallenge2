/**
 * https://leetcode.com/problems/subtree-of-another-tree/
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;

  if (isSame(root, subRoot)) return true;

  const hasLeftTree = isSubtree(root.left, subRoot);
  const hasRightTree = isSubtree(root.right, subRoot);

  return hasLeftTree || hasRightTree;
};

const isSame = (root, subRoot) => {
  const hasReachedEnd = !(root && subRoot);
  if (hasReachedEnd) return root === subRoot;

  const isMismatch = root.val !== subRoot.val;
  if (isMismatch) return false;

  const isLeftSame = isSame(root.left, subRoot.left);
  const isRightSame = isSame(root.right, subRoot.right);

  return isLeftSame && isRightSame;
};

const hash = (val) =>
  require("crypto").createHash("md5").update(val).digest("hex");
