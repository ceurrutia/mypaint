import { useState } from "react";
import "./App.css";
import Paint from "./components/Paint";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Select colour and draw!</h1>
      <Paint />
    </>
  );
}

export default App;
