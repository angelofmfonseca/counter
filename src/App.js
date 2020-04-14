import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  clear = () => {
    this.setState({
      counter: 0
    });
  };

  render() {
    return (
      <section className="counter" data-test="component-app">
        <div data-test="counter-display">
          The count is <span>{this.state.counter}</span>
        </div>
        <div className="buttonsWrapper">
          <button
            className="incrementButton"
            onClick={this.increment}
            data-test="increment-button"
          >
            +
          </button>
          <button
            className="decrementButton"
            onClick={this.decrement}
            data-test="decrement-button"
          >
            -
          </button>
          <button
            className="clearButton"
            onClick={this.clear}
            data-test="clear-button"
          >
            clear
          </button>
        </div>
      </section>
    );
  }
}

export default App;
