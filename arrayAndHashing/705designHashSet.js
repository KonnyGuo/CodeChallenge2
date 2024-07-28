// https://leetcode.com/problems/design-hashset
class MyHashSet {
  constructor() {
    this.set = [];
  }

  /**
   * Time O(1) | Space O(1)
   * @param {number} key
   * @return {void}
   */
  add(key) {
    this.set[key] = key;
  }

  /**
   * Time O(1) | Space O(1)
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    this.set[key] = undefined;
  }

  /**
   * Time O(1) | Space O(1)
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return this.set[key] !== undefined;
  }
}

/**
 *
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// Time Complexity:

// Average case (assuming good distribution):
// add: O(1)
// remove: O(1)
// contains: O(1)

// Worst case (all keys hash to the same bucket):
// add: O(n)
// remove: O(n)
// contains: O(n)

// Space Complexity: O(n), where n is the number of unique elements stored in the HashSet.

class MyHashSet {
  constructor() {
    this.size = 1000; // Size of the bucket array
    this.buckets = new Array(this.size).fill().map(() => []);
  }

  hash(key) {
    return key % this.size;
  }

  add(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (!bucket.includes(key)) {
      bucket.push(key);
    }
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const keyIndex = bucket.indexOf(key);
    if (keyIndex !== -1) {
      bucket.splice(keyIndex, 1);
    }
  }

  contains(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    return bucket.includes(key);
  }
}
