import React from 'react';

class Counter extends React.Component {

  constructor() {
    super()
    this.state = {
      number: 0,
    }
  }

  incrementCounter = () => {
    this.setState({
      number: this.state.number += 1,
    });    
  }

  render() {
    return (
      <button style={{
        color: "white",
        height: "100px",
        width: "100px",
        backgroundColor: `${this.state.number % 2 === 0 ? 'green' : 'red'}`
      }}
        onClick={this.incrementCounter}>{this.state.number}</button>
    )
  }
}

export default Counter;
