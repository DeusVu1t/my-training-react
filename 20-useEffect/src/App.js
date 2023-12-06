import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    console.log('callback')
    fetch("https://jsonplaceholder.typicode.com/todos/5")
    .then((response) => response.json())
    .then((json) => setTodo(json));
  }, [])
  console.log('App render')




  return <div className="App">
    {todo && <h1>{todo.title}</h1>}
 
  </div>;
}

export default App;
