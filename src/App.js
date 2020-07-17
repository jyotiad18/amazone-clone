import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './Header.js';
import Home from "./Home.js";
import Checkout from "./Checkout";
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
  
function App() {
  const [ dispatch ] = useStateValue();

  // Piece of code  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });        
      }
      else {
      dispatch({
        type: "SET_USER",
        user: null
      });  
      }
    })

    return () => {
      // cleanup
      unsubscribe();
    }

  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
