import React from 'react';
// import { Clock } from "./components/clock/Clock";
// import { Toggle } from "./components/clock/Toggle";
// import { LoginControl } from "./components/login/Login";
// import RouterView from "./components/router"
import Footer from './components/redux/components/Footer'
import AddTodo from './components/redux/containers/AddTodo'
import VisibleTodoList from './components/redux/containers/VisibleTodoList'

import './App.css';


function App() {
  return (
    <div className="App">
      {/* <Clock></Clock> */}
      {/* <Toggle></Toggle>
      <LoginControl></LoginControl> */}
      {/* <RouterView></RouterView> */}
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
