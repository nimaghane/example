'use client';

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="buttons">
        <button
          className="btn"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>

        <button
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>

      <h1>عدد: {count}</h1>
    </div>
  );
}
