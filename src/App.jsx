import React from 'react';
import { Clock } from "./components/clock/Clock";
import { Toggle } from "./components/clock/Toggle";
import { LoginControl } from "./components/login/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock></Clock>
      <Toggle></Toggle>
      <LoginControl></LoginControl>
    </div>
  );
}

export default App;
