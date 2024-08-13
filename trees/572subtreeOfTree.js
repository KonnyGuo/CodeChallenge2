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

const merkle = (root) => {
  if (!root) return "#";

  const { left, val, right } = root;

  const leftMerkle = merkle(left);
  const rightMerkle = merkle(right);

  const merkleVal = [leftMerkle, val, rightMerkle].join("");
  const merkleHash = hash(merkleVal);

  root.merkle = merkleHash;

  return root.merkle;
};

const search = (root, subRoot) => {
  if (!root) return false;

  const hasSamePath = root.merkle === subRoot.merkle;
  if (hasSamePath) return true;

  const left = search(root.left, subRoot);
  const right = search(root.right, subRoot);

  return left || right;
};

var isSubtree = function (root, subRoot) {
  [root, subRoot].forEach(merkle);

  return search(root, subRoot);
};

const hashify = (root, hash, postOrderKey) => {
  if (!root) return "#";

  const left = hashify(root.left, hash, postOrderKey);
  const right = hashify(root.right, hash, postOrderKey);

  const key = [left, root.val, right].join("");

  if (!hash.has(key)) {
    hash.set(key, postOrderKey[0]);
    postOrderKey[0]++;
  }

  return hash.get(key);
};

var isSubtree = function (root, subRoot, hash = new Map(), postOrderKey = [0]) {
  hashify(root, hash, postOrderKey);

  const hashKey = [
    hashify(subRoot.left, hash, postOrderKey),
    subRoot.val,
    hashify(subRoot.right, hash, postOrderKey),
  ].join("");

  return hash.has(hashKey);
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // If subRoot is null, it's always a subtree
  if (subRoot === null) return true;
  // If root is null but subRoot is not, it can't be a subtree
  if (root === null) return false;

  // Check if the current root is same as subRoot
  if (isSameTree(root, subRoot)) return true;

  // Recursively check left and right subtrees
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

/**
 * Helper function to check if two trees are identical
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  // If both nodes are null, trees are same
  if (p === null && q === null) return true;
  // If one is null and other is not, trees are different
  if (p === null || q === null) return false;

  // Check if current node values are same and recursively check left and right subtrees
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}
