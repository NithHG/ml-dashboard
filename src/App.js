import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head.js";
import Body from "./components/Body.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head />
        <Body />
      </header>
    </div>
  );
}

export default App;
