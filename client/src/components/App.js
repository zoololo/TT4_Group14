import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

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
          <div>delete me after adding your own routes, this is just to test the page renders</div>
        </Route>
        {/* Add Private routes for all pages only accessible after login */}
        <PrivateRoute exact path="/" />
        <PrivateRoute exact path="/" />
      </Switch>
      {/* Footer Component */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
