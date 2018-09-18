import React from "react";

class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    this.setState({ hasBeenClicked: !this.state.hasBeenClicked }, () =>
      console.log(this.state.hasBeenClicked)
    );
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
