import React, { Component } from 'react';
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { Greeting } from "./Greeting";

export class LoginControl extends Component {
  state = {
    isLoggedIn: false
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  renderButton = () => {
    const { isLoggedIn } = this.state
    if (isLoggedIn) {
      return <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
    } else {
      return <LoginButton onClick={this.handleLoginClick}></LoginButton>
    }
  }

  render () {
    
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn}>
          {this.renderButton()}
        </Greeting>
      </div>
    )
  }
}