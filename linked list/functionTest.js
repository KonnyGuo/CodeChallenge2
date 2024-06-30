// for most node problem. Store the next node in a variable. Set the pointer of the current node to the next node. set the current node to next node

// Define a node class
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Function to print nodes of the linked list
function printList(head) {
  let currentNode = head; // Start with the head node
  while (currentNode !== null) {
    // Continue until the end of the list
    console.log(currentNode); // Print the value of the current node
    currentNode = currentNode.next; // Move to the next node
  }
}

// Create nodes
let node3 = new ListNode(3, null);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

// Head of the list
let head = node1;

console.log(head);
