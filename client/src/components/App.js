import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import './App.css';
import Login from './Login/Login';
import addTransaction from '../addTransaction'
import Footer from './Footer/Footer';
import PrivateRoute from './PrivateRoute';
import TransactionHist from './TransactionHist/TransactionHist';


function App() {
  return (
    <Router>
      {/* Header Component */}
      <Switch>
        <Route path="/" />
      </Switch>
      {/* Main body Component - Make Routes here */}    
      <Switch>
        <Route exact path="/loginPage" component={Login}/>       
        <Route exact path="/">
          <Redirect to="/LoginPage" />
        </Route>
        <Route exact path="/addTransaction" component={addTransaction} />
        <Route exact path="/transactionHist" component={TransactionHist} />
        {/* Add Private routes for all pages only accessible after login */}
        <PrivateRoute exact path="/" />
        <PrivateRoute exact path="/" />
      </Switch>
      {/* Footer Component */}
      <Footer />
    </Router>
  );
}

export default App;