export const getTodo = (todos, id) => {
  return todos.find((item) => {
    return item.id.toString() === id.toString();
  });
};
