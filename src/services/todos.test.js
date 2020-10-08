import { initialTodos, todoTemplate, getTodosLeft } from 'services/todos';

describe('Todos service', () => {
  it('Constructs a todo template as expected', () => {
    const todo = todoTemplate('Get milk', false, 0);
    expect(todo).toEqual({
      text: 'Get milk',
      done: false,
      id: 0
    });
  });

  it('Has the expected initial todo template', () => {
    expect(initialTodos).toEqual([
      todoTemplate('Get milk', false, 0)
    ]);
  });

  it('todos left returns correct result', () => {
    const todos = [
      todoTemplate('Get milk', false, 0),
      todoTemplate('Get paper', true, 1)
    ];
    expect(getTodosLeft(todos)).toBe(1);
  });
});
