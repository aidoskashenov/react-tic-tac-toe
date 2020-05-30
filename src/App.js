import React from "react";
import "./App.css";

import { Square } from "./components";

import { createRange } from "./utils";

const createSquares = () =>
  createRange(9).reduce(
    (accumulator, currentNum) => ({
      ...accumulator,
      // Each numbered square will start with a numerical value.
      // This will get changed to either an 'X' or 'O' upon clicking
      ...{ [currentNum]: currentNum },
    }),
    {}
  );

export class App extends React.Component {
  state = {
    squares: createSquares(),
    turn: "X",
  };

  toggleTurn = () => {
    if (this.state.turn === "X") {
      return "O";
    }
    return "X";
  };

  updateSquare = (clickedSq) => {
    const squares = { ...this.state.squares };
    squares[clickedSq] = this.state.turn;
    this.setState({ squares, turn: this.toggleTurn() });
  };

  renderRow(seqOf3) {
    return seqOf3.map((num) => {
      return (
        <Square
          // We don't want to just use the 'num'
          // We want the actual value of the square
          val={this.state.squares[num].toString()}
          key={num}
          updateSquare={this.updateSquare}
        />
      );
    });
  }

  renderSquares() {
    return Object.keys(this.state.squares)
      .filter((key) => !(key % 3))
      .map((key) => {
        return (
          <div className="board-row" key={key}>
            {/* Create a row by using an Array of 3 elements, we offset using our keys - 0, 3, 6 */}
            {this.renderRow(createRange(3, Number.parseInt(key)))}
          </div>
        );
      });
  }

  render() {
    return this.renderSquares();
  }
}
