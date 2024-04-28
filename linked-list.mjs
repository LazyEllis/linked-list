import createNode from "./node.mjs";

export const createLinkedList = () => ({});

export const append = (list, value) => {
  if (Object.keys(list).length === 0) Object.assign(list, createNode(value));
  else tail(list).next = createNode(value);
};

export const prepend = (list, value) => {
  if (Object.keys(list).length === 0) Object.assign(list, createNode(value));
  else {
    const listCopy = { ...list };
    Object.assign(list, createNode(value));
    list.next = listCopy;
  }
};

export const size = (list) => {
  if (Object.keys(list).length === 0) return 0;
  else if (!list.next) return 1;
  else return 1 + size(list.next);
};

export const head = (list) => (Object.keys(list).length === 0 ? null : list);

export const tail = (list) => {
  if (Object.keys(list).length === 0) return null;
  else if (!list.next) return list;
  else return tail(list.next);
};

export const at = (list, index) => {
  if (!list) return null;
  if (index === 0) return list;
  else return at(list.next, index - 1);
};

export const pop = (list) => {
  if (Object.keys(list).length === 0) return null;
  else if (list.next === null) for (var property in list) delete list[property];
  else at(list, size(list) - 2).next = null;
};

export const contains = (list, value) =>
  !list ? false : list.value === value || contains(list.next, value);

export const find = (list, value) => {
  if (!contains(list, value)) return null;
  else if (list.value === value) return 0;
  else return 1 + find(list.next, value);
};

export const toString = (list) =>
  !list || Object.keys(list).length === 0
    ? `null`
    : `( ${list.value} ) -> ${toString(list.next)}`;

export const insertAt = (list, value, index) => {
  if (index < 0 || index > size(list)) throw new Error("Choose a Valid Index");
  else if (index === 0) prepend(list, value);
  else if (index === size(list)) append(list, value);
  else {
    const listExtract = { ...at(list, index) };
    at(list, index - 1).next = createNode(value);
    tail(list).next = listExtract;
  }
};

export const removeAt = (list, index) => {
  if (index < 0 || index >= size(list)) throw new Error("Choose a Valid Index");
  else if (index === size(list) - 1) pop(list);
  else {
    const targetNode = at(list, index);
    Object.assign(targetNode, targetNode.next);
  }
};
