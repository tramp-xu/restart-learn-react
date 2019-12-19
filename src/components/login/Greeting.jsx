import React from 'react';
import { GuestGreeting } from "./Guest";
import { UserGreeting } from "./User";

export function Greeting (props) {
  const { isLoggedIn } = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting></UserGreeting>
  } else {
    return <GuestGreeting></GuestGreeting>
  }
}