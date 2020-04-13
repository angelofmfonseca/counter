import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    counter: 0
  };

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
        The count is {this.state.counter}
        <div className="buttonsWrapper">
          <button className="incrementButton" onClick={this.increment}>
            +
          </button>
          <button className="decrementButton" onClick={this.decrement}>
            -
          </button>
          <button className="clearButton" onClick={this.clear}>
            clear
          </button>
        </div>
      </section>
    );
  }
}

export default App;
