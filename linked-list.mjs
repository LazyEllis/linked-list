import Node from "./node.mjs";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    return current;
  }

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
