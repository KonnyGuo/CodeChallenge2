/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Time O(N) | Space O(N)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const isBaseCase = !head?.next;
  if (isBaseCase) return head;

  return dfs(head); /* Time O(N) | Space O(N) */
};

const dfs = (curr) => {
  const prev = reverseList(curr.next); /* Time O(N) | Space O(N) */

  curr.next.next = curr;
  curr.next = null;

  return prev;
};

/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Time O(N) | Space O(N)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const isBaseCase = head === null || head.next === null;
  if (isBaseCase) return head;

  const dfs = (curr) => {
    if (curr.next === null) return curr;

    const prev = dfs(curr.next);

    curr.next.next = curr;
    curr.next = null;

    return prev;
  };

  return dfs(head);
};

/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null];

  while (curr !== null) {
    /* Time O(N) */

    // store next node
    next = curr.next;
    // reverse link
    curr.next = prev;

    // move prev to current node
    prev = curr;
    // move current to next node
    curr = next;
  }

  return prev;
};
