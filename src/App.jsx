import React from 'react';
import { Clock } from "./components/clock/Clock";
import { Toggle } from "./components/clock/Toggle";
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock></Clock>
      <Toggle></Toggle>
    </div>
  );
}

export default App;
