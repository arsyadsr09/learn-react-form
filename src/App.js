import React, { Component } from "react";
import "./App.scss";

import Header from "./Header";
import Todo from "./Todo";

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header />
        <Todo />
      </div>
    );
  }
}

export default App;
