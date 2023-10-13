import React, { useState } from "react";
import "./styles.css";

import contador from "./coments/contador.png";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <div className="App">
        <img src={contador} alt="Logo" />
      </div>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={increment} disabled={count === 10}>
        +
      </button>
    </div>
  );
}

export default App;
<div className="App"></div>;
