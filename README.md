# Linked List

This repository contains a simple implementation of a linked list data structure in JavaScript, including classes for nodes and linked lists.

## Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

A linked list is a linear data structure where elements are not stored in contiguous memory locations. Each element, known as a node, points to the next element in the sequence. This implementation provides basic operations such as appending, prepending, inserting, removing, and searching for elements in the linked list.

## Usage

To use this linked list implementation in your project, simply import the provided classes into your JavaScript file:

```javascript
import LinkedList from "./linked-list.mjs";

// Create a new linked list instance
const myList = new LinkedList();

// Append some values to the linked list
myList.append(1);
myList.append(2);
myList.append(3);
```

## API Reference

### `LinkedList`

#### `constructor()`

Creates a new linked list.

#### `append(value)`

Appends a new node with the given value to the end of the linked list.

#### `prepend(value)`

Prepends a new node with the given value to the beginning of the linked list.

#### `size()`

Gets the number of nodes in the linked list.

#### `head()`

Gets the first node of the linked list.

#### `tail()`

Gets the last node of the linked list.

#### `at(index)`

Gets the node at the specified index in the linked list.

#### `pop()`

Removes the last node from the linked list.

#### `contains(value)`

Checks if the linked list contains a node with the specified value.

#### `find(value)`

Finds the index of the first occurrence of the specified value in the linked list.

#### `toString()`

Converts the linked list to a string representation.

#### `insertAt(value, index)`

Inserts a new node with the given value at the specified index in the linked list.

#### `removeAt(index)`

Removes the node at the specified index from the linked list.

## Examples

```javascript
// Create a new linked list instance
const myList = new LinkedList();

// Append some values to the linked list
myList.append(1);
myList.append(2);
myList.append(3);

// Print the linked list
console.log("Linked list:", myList.toString());
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
