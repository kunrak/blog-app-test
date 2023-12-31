import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h1>getByRole</h1>
      <input type="text" defaultValue={"hello"} />
    </div>
  );
}

export default App;
