import Node from "./node.js";

/**
 * Class representing a linked list.
 */
class LinkedList {
  /**
   * Create a new LinkedList.
   */
  constructor() {
    this.head = null; // Initialize the head of the linked list to null
  }

  /**
   * Append a new node with the given value to the end of the linked list.
   * @param {*} value - The value to append.
   */
  append(value) {
    const newNode = new Node(value); // Create a new node with the given value
    if (!this.head) {
      this.head = newNode; // If the list is empty, set the new node as the head
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode; // Traverse to the end of the list and append the new node
    }
  }

  /**
   * Prepend a new node with the given value to the beginning of the linked list.
   * @param {*} value - The value to prepend.
   */
  prepend(value) {
    const newNode = new Node(value); // Create a new node with the given value
    newNode.next = this.head; // Set the next pointer of the new node to the current head
    this.head = newNode; // Set the new node as the head
  }

  /**
   * Get the number of nodes in the linked list.
   * @returns {number} - The number of nodes in the linked list.
   */
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  /**
   * Get the first node of the linked list.
   * @returns {Node|null} - The first node of the linked list, or null if the list is empty.
   */
  head() {
    return this.head;
  }

  /**
   * Get the last node of the linked list.
   * @returns {Node|null} - The last node of the linked list, or null if the list is empty.
   */
  tail() {
    let current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    return current;
  }

  /**
   * Get the node at the specified index in the linked list.
   * @param {number} index - The index of the node to retrieve.
   * @returns {Node} - The node at the specified index.
   * @throws {Error} - If the index is out of bounds.
   */
  at(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Invalid index");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  /**
   * Remove the last node from the linked list.
   */
  pop() {
    if (!this.head) {
      throw new Error("Empty list");
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  /**
   * Check if the linked list contains a node with the specified value.
   * @param {*} value - The value to search for.
   * @returns {boolean} - True if the value is found, false otherwise.
   */
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * Find the index of the first occurrence of the specified value in the linked list.
   * @param {*} value - The value to search for.
   * @returns {number|null} - The index of the value in the linked list, or null if not found.
   */
  find(value) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  /**
   * Convert the linked list to a string representation.
   * @returns {string} - A string representation of the linked list.
   */
  toString() {
    let result = "";
    let current = this.head;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.next;
    }
    result += "null";
    return result;
  }

  /**
   * Insert a new node with the given value at the specified index in the linked list.
   * @param {*} value - The value to insert.
   * @param {number} index - The index at which to insert the value.
   * @throws {Error} - If the index is out of bounds.
   */
  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      throw new Error("Invalid index");
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size()) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let prev = null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }
    newNode.next = current;
    prev.next = newNode;
  }

  /**
   * Remove the node at the specified index from the linked list.
   * @param {number} index - The index of the node to remove.
   * @throws {Error} - If the index is out of bounds.
   */
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Invalid index");
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let prev = null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }
}

export default LinkedList;
