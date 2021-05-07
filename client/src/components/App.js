import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import './App.css';
import Login from './Login/Login';
import addTransaction from '../addTransaction'
import Footer from './Footer/Footer';
import PrivateRoute from './PrivateRoute';
import Header from './Navbar/Header';
import AccountDetails from './AccountDetails/AccountDetails';
import TransactionHist from './TransactionHist/TransactionHist';


function App() {
  return (
    <Router>
      {/* Header Component */}
      <Switch>
        <Route path="/loginPage" />
        <Route path="/" component={Header} />
      </Switch>
      {/* Main body Component - Make Routes here */}    
      <Switch>
        <Route exact path="/loginPage" component={Login}/>       
        <Route exact path="/">
          <Redirect to="/LoginPage" />
        </Route>
        <PrivateRoute exact path="/addTransaction" component={addTransaction} />
        <PrivateRoute exact path="/transactionHist" component={TransactionHist} />
        <PrivateRoute exact path="/AccountDetails" component={AccountDetails}/>
        {/* Add Private routes for all pages only accessible after login */}

      </Switch>
      {/* Footer Component */}
      <Footer />
    </Router>
  );
}

export default App;