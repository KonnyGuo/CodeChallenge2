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

// Why we track maxFrequency and mostFrequentTask:

// maxFrequency: This tells us how many times we need to schedule the most frequent task(s). It determines the "skeleton" of our schedule.
// mostFrequentTask: This counts how many tasks share the maximum frequency. It's crucial for determining if we need extra slots at the end of our schedule.

// How the interval math works:
// The formula is: ((maxFrequency - 1) * (n + 1)) + mostFrequentTask
// Let's break this down:
// a) (maxFrequency - 1): This represents the number of "full" cycles we need. We subtract 1 because the last occurrence doesn't need idle time after it.
// b) (n + 1): This is the length of each cycle. It includes the task itself (1) plus the idle time (n).
// c) ((maxFrequency - 1) * (n + 1)): This gives us the total length of all full cycles.
// d) + mostFrequentTask: This adds slots for the final occurrence of each of the most frequent tasks.
// Why this works:

// The formula creates a "skeleton" schedule based on the most frequent task(s).
// Other less frequent tasks can be slotted into the idle times without extending the overall length.
// If there are multiple tasks with the max frequency, we need extra slots at the end to accommodate them all.
