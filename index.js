import LinkedList from "./linked-list.js";

// Create a new linked list instance
const myList = new LinkedList();

// Append some values to the linked list
myList.append(1);
myList.append(2);
myList.append(3);

// Prepend a value to the linked list
myList.prepend(0);

// Print the size of the linked list
console.log("Size of the linked list:", myList.size());

// Print the head of the linked list
console.log("Head of the linked list:", myList.head);

// Print the tail of the linked list
console.log("Tail of the linked list:", myList.tail());

// Print the linked list
console.log("Linked list:", myList.toString());

// Insert a value at a specific index
myList.insertAt(2.5, 3);

// Print the modified linked list
console.log("Modified linked list:", myList.toString());

// Remove a value at a specific index
myList.removeAt(2);

// Print the modified linked list
console.log("Modified linked list after removal:", myList.toString());

// Check if the linked list contains a certain value
console.log("Does the linked list contain 2?", myList.contains(2));

// Find the index of a value in the linked list
console.log("Index of value 2 in the linked list:", myList.find(2));
