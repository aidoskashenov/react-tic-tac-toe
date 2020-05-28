import React from "react";
import "./App.css";

import { Square } from "./components";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="status"></div>
        <div className="board-row"></div>
        <div className="board-row"></div>
        <div className="board-row"></div>
      </div>
    );
  }
}
