import "./App.css";
import { useState } from "react";
import Headers from "./components/Header";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  const decreaseFunc = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const increaseFunc = () => {
    setCounter(counter + 1);
  };
  const resetFunc = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <Headers counter={counter} />
      <div>
        <Button handleClick={decreaseFunc} title="-" />
        <Button handleClick={resetFunc} title="reset" />
        <Button handleClick={increaseFunc} title="+" />
      </div>
    </div>
  );
}

export default App;
