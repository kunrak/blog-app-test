import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import handleOtherMethod from "./helper";

function App() {
  const [data, setData] = useState("");

  const handleData = () => {
    setData("Hello");
  };

  return (
    <div className="App">
      <h1>Functional Method Component Testing</h1>
      <button data-testid="btn1" onClick={handleData}>
        Update
      </button>
      <button onClick={handleOtherMethod}>Print</button>
      <h2>{data}</h2>
    </div>
  );
}

export default App;
