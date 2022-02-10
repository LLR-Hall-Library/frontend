import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Search from "./Component/Search";

 
function App() {
  return (
    <>
    <Router>
    <div className="container my-3">
    <Switch>
          <Route exact path="/">
            <Search/>
          </Route>
          <Route exact path="/about">
           
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;