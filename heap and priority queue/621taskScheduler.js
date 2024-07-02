/**
 * https://leetcode.com/problems/task-scheduler/
 * Time O(N * log(N)) | Space O(N)
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const frequencyMap = getFrequencyMap(tasks);
  const maxHeap = getMaxHeap(frequencyMap);

  return getMinimumCpuIntervals(maxHeap, n);
};

var getFrequencyMap = (tasks, frequencyMap = new Array(26).fill(0)) => {
  for (const task of tasks) {
    const index = task.charCodeAt(0) - "A".charCodeAt(0);

    frequencyMap[index]++;
  }

  return frequencyMap;
};

const getMaxHeap = (frequencyMap, maxHeap = new MaxPriorityQueue()) => {
  for (const frequency of frequencyMap) {
    const hasFrequency = 0 < frequency;
    if (hasFrequency) maxHeap.enqueue(frequency);
  }

  return maxHeap;
};

const getMinimumCpuIntervals = (maxHeap, n, cpuIntervals = [0]) => {
  while (!maxHeap.isEmpty()) {
    const { iterations, coolingPeriodQueue } = execute(
      n,
      maxHeap,
      cpuIntervals
    );

    reQueueCoolingPeriod(coolingPeriodQueue, maxHeap);

    if (!maxHeap.isEmpty()) cpuIntervals[0] += iterations;
  }

  return cpuIntervals[0];
};

const execute = (
  n,
  maxHeap,
  cpuIntervals,
  iterations = n + 1,
  coolingPeriodQueue = new Queue()
) => {
  while (0 < iterations && !maxHeap.isEmpty()) {
    const frequency = maxHeap.dequeue().element;

    const hasFrequency = 0 < frequency - 1;
    if (hasFrequency) coolingPeriodQueue.enqueue(frequency - 1);

    cpuIntervals[0]++;
    iterations--;
  }

  return { iterations, coolingPeriodQueue };
};

const reQueueCoolingPeriod = (coolingPeriodQueue, maxHeap) => {
  while (!coolingPeriodQueue.isEmpty()) {
    maxHeap.enqueue(coolingPeriodQueue.dequeue());
  }
};

/**
 * https://leetcode.com/problems/task-scheduler/
 * Time O(N) | Space O(1)
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const frequencyMap = getFrequencyMap(tasks);
  const maxFrequency = getMaxFrequency(frequencyMap);
  const mostFrequentTask = getMostFrequentTask(frequencyMap, maxFrequency);
  const interval = (maxFrequency - 1) * (n + 1) + mostFrequentTask;

  return Math.max(tasks.length, interval);
};

var getFrequencyMap = (tasks, frequencyMap = new Array(26).fill(0)) => {
  for (const task of tasks) {
    const index = task.charCodeAt(0) - "A".charCodeAt(0);

    frequencyMap[index]++;
  }

  return frequencyMap;
};

const getMaxFrequency = (frequencyMap, maxFrequency = 0) => {
  for (const frequency of frequencyMap) {
    maxFrequency = Math.max(maxFrequency, frequency);
  }

  return maxFrequency;
};

const getMostFrequentTask = (
  frequencyMap,
  maxFrequency,
  mostFrequentTask = 0
) => {
  for (const frequency of frequencyMap) {
    const isSame = frequency === maxFrequency;
    if (isSame) mostFrequentTask++;
  }

  return mostFrequentTask;
};

/**
 * https://leetcode.com/problems/task-scheduler/
 * Time O(N) | Space O(1)
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // Create and fill the frequency map
  const frequencyMap = new Array(26).fill(0);
  for (const task of tasks) {
    const index = task.charCodeAt(0) - "A".charCodeAt(0);
    frequencyMap[index]++;
  }

  // Find the maximum frequency and count of most frequent tasks
  let maxFrequency = 0;
  let mostFrequentTask = 0;
  for (const frequency of frequencyMap) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mostFrequentTask = 1;
    } else if (frequency === maxFrequency) {
      mostFrequentTask++;
    }
  }

  // Calculate the minimum interval
  const interval = (maxFrequency - 1) * (n + 1) + mostFrequentTask;

  // Return the maximum of the calculated interval and the total number of tasks
  return Math.max(tasks.length, interval);
};
// The formula is: ((maxFreq - 1) * (n + 1)) + mostFreq
// We use maxFreq - 1 because:

// We're dealing with "complete cycles" of the most frequent task(s).
// A "complete cycle" consists of the task itself plus the required idle time (n).
// The last occurrence of the task doesn't need to be followed by idle time, so we don't count it as a complete cycle.

// Let's illustrate with an example:
// Tasks: ["A","A","A","B","B"], n = 2
// Here, A is the most frequent task with maxFreq = 3.
// If we schedule A, we get:
// A _ _ | A _ _ | A
// Where:

// A is the task
// _ represents a slot that can be filled with another task or left idle
// | separates the "complete cycles"

// Notice:

// We have 2 complete cycles (A _ _), not 3.
// The last A doesn't need idle time after it.

// So, we calculate:

// Number of complete cycles: maxFreq - 1 = 3 - 1 = 2
// Length of each cycle: n + 1 = 2 + 1 = 3

// This gives us: (maxFreq - 1) * (n + 1) = 2 * 3 = 6
// Then we add mostFreq (1 in this case) to account for the final A, giving us 7.
// This matches our schedule: A B _ A B _ A
// By using maxFreq - 1, we're correctly accounting for the structure of the schedule, where the last occurrence of the most frequent task doesn't need to be followed by idle time. This approach ensures we don't overestimate the required time while still maintaining the correct spacing between tasks.

// The formula uses (n + 1) to represent the length of each complete cycle. Here's why:

// n represents the cooldown period required between two instances of the same task.
// We add 1 to account for the task itself.

// So, n + 1 gives us the total length of a cycle, which includes:

// 1 slot for the task
// n slots for the cooldown period

// Let's illustrate this with an example:
// Suppose we have tasks = ["A","A","A","B","C"], and n = 2
// For task A (the most frequent task), each cycle looks like this:
// A _ _
// Where:

// A is the task itself (accounting for the 1 in n + 1)
// _ _ are the two cooldown slots (accounting for the n in n + 1)

// This cycle has a total length of 3, which is indeed n + 1 (2 + 1).
// If we had n = 3, each cycle would look like:
// A _ _ _
// With a total length of 4, which is again n + 1 (3 + 1).
// The n + 1 ensures that:

// We allocate enough time for each instance of the task.
// We maintain the required cooldown period between instances of the same task.
// We create enough slots to potentially fit in other tasks during the cooldown period.

// By using n + 1, we're correctly sizing each cycle to accommodate both the task and its required cooldown, which is essential for creating a valid schedule that meets the problem's constraints.

// The main part of the formula, (maxFreq - 1) * (n + 1), calculates the time needed for all but the last occurrence of the most frequent task(s).
// mostFreq represents the number of tasks that have the maximum frequency.
// Adding mostFreq accounts for the final occurrences of all the most frequent tasks.

// Here's why this is necessary:

// If there's only one most frequent task:

// We need one more slot for its final occurrence.

// If there are multiple tasks with the max frequency:

// We need additional slots at the end to fit all their final occurrences.

// Let's look at an example:
// Tasks: ["A","A","A","B","B","B","C","D"], n = 2
// Here:

// maxFreq = 3 (A and B both occur 3 times)
// mostFreq = 2 (both A and B have max frequency)

// Without adding mostFreq, our formula would give:
// (3 - 1) * (2 + 1) = 2 * 3 = 6
// This would result in a schedule like: A _ _ A _ _ A
// But we still need to account for all the B tasks!
// By adding mostFreq (2 in this case), we get:
// 2 * 3 + 2 = 8
// This gives us enough slots for a schedule like:
// A B C A B D A B
// Without the + mostFreq, we would underestimate the time needed in cases where multiple tasks have the maximum frequency.
// In essence, adding mostFreq:

// Ensures we have enough slots for all instances of the most frequent tasks.
// Handles the edge case of multiple tasks having the same maximum frequency.
// Provides the correct minimum time even when we can't fit all tasks perfectly into the idle slots of the main cycle structure.
