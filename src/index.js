import React from "react";
import ReactDOM from "react-dom";
import Input from "../src/components/input";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Input />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
