import React, { Component } from 'react'

export class Toggle extends Component {
  state = {
    isToggleOn: true
  }
  
  toggle = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render () {
    return (
      <button onClick={this.toggle}>
        { this.state.isToggleOn ? 'ON' : 'OFF' }
      </button>
    )
  }
}