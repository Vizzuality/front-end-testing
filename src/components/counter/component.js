import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button className="decrement" onClick={() => setCount(count - 1)}>-</button>
      <button className="increment" onClick={() => setCount(count + 1)}>+</button>
      <p className="count">Current count: {count}</p>
    </div>
  )

}

export default Counter;
