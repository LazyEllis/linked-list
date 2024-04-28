/**
 * Class representing a node in a linked list.
 */
class Node {
  /**
   * Create a new Node.
   * @param {*} value - The value to be stored in the node. Defaults to null.
   */
  constructor(value = null) {
    this.value = value; // Store the value in the node
    this.next = null; // Initialize the next pointer to null
  }
}

export default Node;
