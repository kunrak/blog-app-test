import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h1>Jest Testing</h1>
      <button onClick={() => setData("Hello")}>Update Component</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
