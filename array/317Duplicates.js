/**
 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  for (let right = 0; right < nums.length; right++) {
    /* Time O(N) */
    for (let left = 0; left < right; left++) {
      /* Time O(N) */
      const isDuplicate = nums[left] === nums[right];
      if (isDuplicate) return true;
    }
  }

  return false;
};

/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
 * Time O(N * log(N)) | Space O(1)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  nums.sort((a, b) => a - b); /* Time O(N * log(N)) | Space O(1 || log(N)) */

  return hasDuplicate(nums);
};

const hasDuplicate = (nums) => {
  for (let curr = 0; curr < nums.length - 1; curr++) {
    /* Time O(N) */
    const next = curr + 1;

    const isNextDuplicate = nums[curr] === nums[next];
    if (isNextDuplicate) return true;
  }

  return false;
};

/**
 * Hash Set
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  const numsSet = new Set(nums); /* Time O(N) | Space O(N) */
  const isEqual = numsSet.size === nums.length;

  return !isEqual;
};

/**
 * Hash Set - Early Exit
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums, numsSet = new Set()) => {
  for (const num of nums) {
    /* Time O(N) */
    if (numsSet.has(num)) return true;

    numsSet.add(num); /* Space O(N) */
  }

  return false;
};

//alternate way
function containsDuplicate(nums) {
  const numsSet = new Set();

  for (const num of nums) {
    if (numsSet.has(num)) {
      return true; // If the Set already contains the current number, it's a duplicate.
    }

    numsSet.add(num); // Add the current number to the Set.
  }

  return false; // No duplicates were found.
}

//set vs arrays
// Sets and arrays are both data structures in JavaScript, but they have some key differences in terms of their characteristics and use cases. Here are the main differences between sets and arrays:

// Unique Values:

// Arrays: Allow duplicate values. You can have the same value appear multiple times in an array.
// Sets: Store only unique values. Duplicate values are automatically ignored.
// Ordering:

// Arrays: Maintain the order of elements based on the order in which they are added. Each element has a numeric index.
// Sets: Do not guarantee any specific order of elements. Elements are ordered based on their insertion order, but this order is not used for access or iteration.
// Indexing:

// Arrays: Accessed by index. You can use numeric indices to access elements in an array.
// Sets: No indexing. Elements cannot be accessed by an index since there is no defined order.
// Methods:

// Arrays: Have a rich set of methods specifically designed for working with ordered collections. Examples include push, pop, shift, unshift, etc.
// Sets: Have methods for basic set operations such as add, delete, has, and iterator methods (keys, values, entries, forEach).
// Use Cases:

// Arrays: Typically used when the order of elements is important, and you need to access elements by index. Useful for sequences and lists of items.
// Sets: Useful when you need to store unique values and when the order of elements is not significant. Also useful for performing set operations like union, intersection, and difference.
// Performance:

// Arrays: Generally optimized for fast random access and are well-suited for situations where elements need to be accessed by index.
// Sets: Optimized for checking the presence of elements and performing set operations efficiently. They are not designed for random access by index.
// Initialization:

// Arrays: Created using square brackets ([]) and can be initialized with values.
// Sets: Created using the Set constructor and can be initialized with an iterable (e.g., an array).
