"use client"
import React, { useState } from 'react';

type CounterProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const CounterHome: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <Counter count={count} setCount={setCount} />
    </div>
  );
};

export default CounterHome;
