import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h1>Multiple Item with Role</h1>
      <h1>Custom Role</h1>
      <button>Click 1</button>
      <button>Click 2</button>
      <label htmlFor="input1">User Name</label>
      <input type="text" id="input1" />
      <label htmlFor="input2">User Age</label>
      <input type="text" id="input2" />
    </div>
  );
}

export default App;
