import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Shop from './Shop';
import Basket from './Basket';
import Order from './Order'
import Final from './Final';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/shop">
          <Navigation />
          <Shop />
          <Footer />
        </Route>
        <Route path="/basket">
          <Navigation />
          <Basket />
          <Footer />
        </Route>
        <Route path="/order">
          <Navigation />
          <Order />
          <Footer />
        </Route>
        <Route path="/final">
          <Navigation />
          <Final />
          <Footer />
        </Route>
        <Route path="/">
          <Navigation />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router >
  )
}

export default App;
