import React from 'react'
import { HashRouter, Link, Switch, Route } from 'react-router-dom'
import Page1 from "./views/page1";
import Page2 from "./views/page2";
import Page3 from "./views/page3";
import Page4 from "./views/page4";
import ScrollToTop from './ScrollToTop'

const routers = [
  {
    path: '/page1',
    label: 'page1',
    component: Page1
  },
  {
    path: '/page2',
    label: 'page2',
    component: Page2
  },
  {
    path: '/page3',
    label: 'page3',
    component: Page3
  },
  {
    path: '/page4',
    label: 'page4',
    component: Page4
  },
]

export default class RouterView extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to='/page1'>page1</Link>
            </li>
            <li>
              <Link to='/page2'>page2</Link>
            </li>
            <li>
              <Link to='/page3'>page3</Link>
            </li>
            <li>
              <Link to='/page4'>page4</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/page1">
              <Page1></Page1>
            </Route>
            <Route path="/page2">
              <Page2></Page2>
            </Route>
            <Route path="/page3">
              <Page3></Page3>
            </Route>
            <Route path="/page4">
              <Page4></Page4>
            </Route>
          </Switch>
        </div>
        <ScrollToTop></ScrollToTop>
      </HashRouter>
    )
  }
}