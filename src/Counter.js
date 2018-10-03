import React, { Component } from 'react';
import {connect} from 'react-redux';
class Counter extends Component {
    state = {count :0}

    increment = () => {
       this.setState({
          count : this.state.count + 1
       })
    }
    decrement = () => {
      this.setState({
      count :this.state.count - 1
    })
  }


  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
             <button onClick={this.increment}> + </button>
             <span>{this.state.count}</span>
             <button onClick={this.decrement}> - </button>
        </div>
      </div>
    );
  }
}

export default Counter;
