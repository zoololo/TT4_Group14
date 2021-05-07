import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import './Balance';

import './App.css';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      {/* Header Component */}
      <Switch>
        <Route path="/" />
      </Switch>
      {/* Main body Component - Make Routes here */}    
      <Switch>
        <Route exact path="/loginPage" />       
        <Route exact path="/">
          {/* <Redirect to="/LoginPage" /> */}
          <div></div>
        </Route>
        {/* Add Private routes for all pages only accessible after login */}
        <PrivateRoute exact path="/balance" />
        Balance
        <PrivateRoute exact path="/" />
      </Switch>
      {/* Footer Component */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
