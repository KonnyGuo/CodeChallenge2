/**
 * https://leetcode.com/problems/reorder-list/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const mid = getMid(head); /* Time O(N) */
  const reversedFromMid = reverse(mid); /* Time O(N) */

  reorder(head, reversedFromMid); /* Time O(N) */
};

const getMid = (head) => {
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    /* Time O(N) */
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const reverse = (head) => {
  let [prev, curr, next] = [null, head, null];

  while (curr) {
    /* Time O(N) */
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
};

const reorder = (l1, l2) => {
  let [first, next, second] = [l1, null, l2];

  while (second.next) {
    /* Time O(N) */
    next = first.next;
    first.next = second;
    first = next;

    next = second.next;
    second.next = first;
    second = next;
  }
};

/**
 * https://leetcode.com/problems/reorder-list/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  // Step 1: Find the middle of the list
  let [slow, fast] = [head, head];

  // end of this part, slow will be mid of the list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const mid = slow;

  // Step 2: Reverse the second half of the list starting from mid
  // at the end of this part, prev will be tail basically (at the end)
  let prev = null;
  let curr = mid;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  // this starts from tail
  const reversedFromMid = prev;

  // Step 3: Reorder the original list and the reversed list
  let [first, second] = [head, reversedFromMid];
  while (second.next !== null) {
    const firstNext = first.next;
    const secondNext = second.next;

    first.next = second;
    second.next = firstNext;

    first = firstNext;
    second = secondNext;
  }
};
