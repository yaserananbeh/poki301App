import React, { Component } from 'react'
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main'
import Favorites from './components/Favorites'
export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route exact path="/favorite">
              <Favorites/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
