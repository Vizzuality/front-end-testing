import React from 'react';

import {
  initialTodos,
  getTodosLeft
} from 'services/todos';

import './todos.css';

const Todos = () => {
  const [todos, setTodos] = React.useState(initialTodos);
  const [value, setValue] = React.useState('');

  const toggleDone = (todo) => {
    setTodos(todos.map(t => {
      if (t.id === todo.id) {
        return { ...t, done: !t.done }
      }
      return t;
    }))
  }

  const addTodo = text => {
    setTodos([...todos, { text, done: false, id: todos.length + 1 }])
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="todos">
      <h2>Todos ({getTodosLeft(todos)})</h2>
      <ul className="list">
        {todos.map((todo, index) => (
          <li key={index + todo.text} className={`todo ${todo.done ? '-done' : ''}`}>
            <p>{todo.text}</p>
            <input type="checkbox" checked={todo.done} onChange={() => toggleDone(todo)} />
          </li>
        ))}
      </ul>
      <form className="add-todo" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new todo"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Todos;
