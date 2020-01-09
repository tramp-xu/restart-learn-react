import React, { Component } from 'react';

export class Clock extends Component {
  state = {
    date: new Date()
  }

  componentDidMount () {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearImmediate(this.timerId)
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div>
        <h1 style={{height: '1400px'}}>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
