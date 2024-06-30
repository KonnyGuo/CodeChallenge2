/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Time O(N) | Space O(N)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const sentinel = new ListNode();

  sentinel.next = head;

  const fast = moveFast(sentinel, n); /* Time O(N) */
  const slow = moveSlow(sentinel, fast); /* Time O(N) */

  slow.next = slow.next.next || null;

  return sentinel.next;
};

const moveFast = (fast, n) => {
  for (let i = 1; i <= n + 1; i++) {
    /* Time O(N) */
    fast = fast.next;
  }

  return fast;
};

const moveSlow = (slow, fast) => {
  while (fast) {
    /* Time O(N) */
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const length = getNthFromEnd(head, n); /* Time O(N) */

  const isHead = length < 0;
  if (isHead) return head.next;

  const curr = moveNode(head, length); /* Time O(N) */

  curr.next = curr.next.next;

  return head;
};

const getNthFromEnd = (curr, n, length = 0) => {
  while (curr) {
    /* Time O(N) */
    curr = curr.next;
    length++;
  }

  return length - n - 1;
};

const moveNode = (curr, length) => {
  while (length) {
    /* Time O(N) */
    curr = curr.next;
    length--;
  }

  return curr;
};

/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  // Move first pointer n nodes ahead
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // Move both pointers until first reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // Remove the nth node from the end
  second.next = second.next.next;

  return dummy.next;
};
