import React, { Component } from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggled: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isToggled: !prevState.isToggled,
    }));
  };
  render() {
    const { isToggled } = this.state;
    return (
      <div>
        <button
          onClick={this.handleToggle}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: isToggled ? "red" : "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {isToggled ? "OFF" : "ON"}
        </button>
      </div>
    );
  }
}
