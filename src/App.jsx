import React, {Component} from 'react';
import Home from './components/Home.jsx'
import Menu from './components/Menu.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return (
      <Router>
        <Switch>

          <Route path="/">
            <Home />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>

        </Switch>
      </Router>
    );
  }
}
 
export default App;

