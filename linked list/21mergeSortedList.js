/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Time O(N + M) | Space O(N + M)
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const isBaseCase1 = list1 === null;
  if (isBaseCase1) return list2;

  const isBaseCase2 = list2 === null;
  if (isBaseCase2) return list1;

  const isL2Greater = list1.val <= list2.val;
  if (isL2Greater) {
    list1.next = mergeTwoLists(
      list1.next,
      list2
    ); /* Time O(N + M) | Space O(N + M) */

    return list1;
  }

  const isL2Less = list2.val <= list1.val;
  if (isL2Less) {
    list2.next = mergeTwoLists(
      list1,
      list2.next
    ); /* Time O(N + M) | Space O(N + M) */

    return list2;
  }
};

/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Time O(N + M) | Space O(N + M)
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let sentinel = (tail = new ListNode());

  while (list1 && list2) {
    /* Time O(N + M) */
    const isL2Greater = list1.val <= list2.val;
    const isL2Less = list2.val < list1.val;

    if (isL2Greater) {
      tail.next = list1;
      list1 = list1.next;
    }

    if (isL2Less) {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  tail.next = list1 || list2;

  return sentinel.next;
};

/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Time O(N + M) | Space O(N + M)
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Avoiding Special Cases: By using a sentinel node as the initial placeholder (null node), we ensure that sentinel.next always points to the beginning of the merged list, even if no elements were merged (resulting in an empty list).
var mergeTwoLists = function (list1, list2) {
  let sentinel = new ListNode();
  let currentNode = sentinel;

  while (list1 && list2) {
    const isL2Greater = list1.val <= list2.val;
    const isL2Less = list2.val < list1.val;

    if (isL2Greater) {
      currentNode.next = list1;
      list1 = list1.next;
    }

    if (isL2Less) {
      currentNode.next = list2;
      list2 = list2.next;
    }

    currentNode = currentNode.next;
  }

  currentNode.next = list1 || list2;

  return sentinel.next;
};
