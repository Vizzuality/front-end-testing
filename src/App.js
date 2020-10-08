import React, { useState } from 'react';

import Counter from 'components/counter';
import Todos from 'components/todos';

import './App.css';

function App() {
  const [currentExample, setCurrentExample] = useState(1);
  return (
    <div className="App">
        <h2>Testing talk</h2>
        <div className="buttons">
          <button onClick={() => setCurrentExample(0)}>Example 1</button>
          <button onClick={() => setCurrentExample(1)}>Example 2</button>
        </div>
       {currentExample === 0 && <Counter />}
       {currentExample === 1 && <Todos />}
    </div>
  );
}

export default App;
