/**
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * Time O(N * (K * log(K))) | Space O(K)
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   * @constructor
   */
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new MinPriorityQueue();

    nums.forEach((num) => this.add(num));
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val, { minHeap } = this) {
    const isUnderCapacity = minHeap.size() < this.k;
    if (isUnderCapacity) {
      minHeap.enqueue(val);

      return this.top();
    }

    const isLarger = this.top() < val;
    if (isLarger) {
      minHeap.dequeue();
      minHeap.enqueue(val);
    }

    return this.top();
  }

  top({ minHeap } = this) {
    return minHeap.front()?.element || 0;
  }
}

/**
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * Time O(N * (K * log(K))) | Space O(K)
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   * @constructor
   */
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new MinPriorityQueue();

    nums.forEach((num) => this.add(num));
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    const isUnderCapacity = this.minHeap.size() < this.k;
    if (isUnderCapacity) {
      this.minHeap.enqueue(val);
      return this.top();
    }

    const isLarger = this.top() < val;
    if (isLarger) {
      this.minHeap.dequeue();
      this.minHeap.enqueue(val);
    }

    return this.top();
  }

  top() {
    if (this.minHeap.front()) {
      return this.minHeap.front().element;
    } else {
      return 0;
    }
  }
}

class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.heap = [];
    nums.forEach((num) => this.add(num));
  }

  add(val) {
    if (this.heap.length < this.k) {
      this.heap.push(val);
      this.bubbleUp(this.heap.length - 1);
    } else if (val > this.heap[0]) {
      this.heap[0] = val;
      this.bubbleDown(0);
    }
    return this.heap[0];
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const lastIndex = this.heap.length - 1;
    while (true) {
      let smallestIndex = index;
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;

      if (
        leftIndex <= lastIndex &&
        this.heap[leftIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.heap[rightIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightIndex;
      }

      if (smallestIndex === index) break;

      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
