import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import ResetButton from "./components/ResetButton";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const buttonStyle = { backgroundColor: "lightgreen" };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <ResetButton
        buttonStyle={buttonStyle}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
