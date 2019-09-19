import React from "react";
import ReactDOM from "react-dom";

import Content from "./Content";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

ReactDOM.render(<Content />, document.querySelector("main"));
