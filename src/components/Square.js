import PropType from "prop-types";
import React from "react";

export class Square extends React.Component {
  static propTypes = {
    updateSquare: PropType.func.isRequired,
    val: PropType.string,
  };

  handleClick = () => {
    this.props.updateSquare(this.props.val);
  };

  render() {
    return (
      <button className="square" onClick={this.handleClick}>
        {this.props.val}
      </button>
    );
  }
}
