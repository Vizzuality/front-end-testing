export const todoTemplate = (text, done, id) => ({ text, done, id });

export const initialTodos = [
  todoTemplate('Get milk', false, 0)
];

export const getTodosLeft = todos => todos.filter(todo => !todo.done).length;
