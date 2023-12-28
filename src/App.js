import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h1>Test OnChange Event with Text Input</h1>
    </div>
  );
}

export default App;
