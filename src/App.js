import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>First React Test Case</p>
      <p>Rakesh Kundu</p>
      <input type="text" placeholder="Enter user name" name="username" id="userId" value="Rakesh Kundu" />
      <br />
      <img
        title="AI generated img"
        src="https://img.freepik.com/free-photo/medium-shot-woman-training-outdoors_23-2150405486.jpg?w=740&t=st=1703598706~exp=1703599306~hmac=f26062c470676e3b1bd66d274a140d2f0b0612ef09f52963f769565f215acd99"
        height={600}
      />
    </div>
  );
}

export default App;
