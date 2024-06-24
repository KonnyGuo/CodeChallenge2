/**
 * https://leetcode.com/problems/min-stack
 * Time O(1) | Space O(N)
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
class MinStack {
  /**
   * @constructor
   */
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val, { minStack } = this) {
    this.stack.push(val); /* Space O(N) */

    const isMinEmpty = !minStack.length;
    const hasNewMin = val <= this.top(minStack);
    const canAddMin = isMinEmpty || hasNewMin;
    if (canAddMin) minStack.push(val); /* Space O(N) */
  }

  /**
   * @return {void}
   */
  pop({ stack, minStack } = this) {
    const top = stack.pop(); /* Time O(1) */

    const canPopMin = top === this.getMin();
    if (canPopMin) minStack.pop(); /* Time O(1) */
  }

  /**
   * @param {Array}
   * @return {number}
   */
  top(stack = this.stack) {
    return stack.length ? stack[stack.length - 1] /* Time O(1) */ : null;
  }

  /**
   * @return {number}
   */
  getMin(minStack = this.minStack) {
    return this.top(minStack); /* Time O(1) */
  }
}

/**
 * https://leetcode.com/problems/min-stack
 * Time O(1) | Space O(1)
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
class MinStack {
  constructor() {
    this.head = null;
  }

  push(val) {
    this.head = !this.head /* Space O(1) */
      ? new Node(val, val, null)
      : new Node(val, Math.min(val, this.head.min), this.head);
  }

  pop() {
    this.head = this.head.next; /* Time O(1) */
  }

  top() {
    return this.head.val; /* Time O(1) */
  }

  getMin() {
    return this.head.min; /* Time O(1) */
  }
}

class Node {
  constructor(val, min, next) {
    this.val = val;
    this.min = min;
    this.next = next;
  }
}

/**
 * https://leetcode.com/problems/min-stack
 * Time O(1) | Space O(N)
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
class MinStack {
  /**
   * Initializes the MinStack.
   */
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * Pushes an element onto the stack.
   * @param {number} val - The value to be pushed onto the stack.
   * @returns {void}
   */
  push(val) {
    this.stack.push(val); // Space O(N)

    const isMinEmpty = this.minStack.length === 0;
    const hasNewMin =
      isMinEmpty || val <= this.minStack[this.minStack.length - 1];
    if (hasNewMin) {
      this.minStack.push(val); // Space O(N)
    }
  }

  /**
   * Removes the element on top of the stack.
   * @returns {void}
   */
  pop() {
    if (this.stack.length === 0) {
      return;
    }
    const top = this.stack.pop(); // Time O(1)

    if (top === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop(); // Time O(1)
    }
  }

  /**
   * Get the top element of the stack.
   * @returns {number|null} The top element of the stack, or null if the stack is empty.
   */
  top() {
    if (this.stack.length === 0) {
      return null;
    }
    return this.stack[this.stack.length - 1]; // Time O(1)
  }

  /**
   * Retrieve the minimum element in the stack.
   * @returns {number|null} The minimum element in the stack, or null if the stack is empty.
   */
  getMin() {
    if (this.minStack.length === 0) {
      return null;
    }
    return this.minStack[this.minStack.length - 1]; // Time O(1)
  }
}
