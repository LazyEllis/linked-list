const createNode = (value = null) => {
  return {
    value: value,
    next: null,
  };
};

export default createNode;
