import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    counter: 0
  }
  increment = () => { 
    this.setState({
      counter:this.state.counter + 1
    })
  }
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  clear = () => {
    this.setState({
      counter: 0
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Counter: { this.state.counter }
          <button onClick={ this.increment }>+</button>
          <button onClick={ this.decrement }>-</button>
          <button onClick={ this.clear }>clear</button>
        </header>
      </div>
    )
  }
}

export default App
