import PropType from "prop-types";
import React from "react";

export class Square extends React.Component {
  static propTypes = {
    handleClick: PropType.func.isRequired,
    val: PropType.string,
  };

  render() {
    return (
      <button className="square" onClick={this.props.handleClick}>
        {this.props.val}
      </button>
    );
  }
}
