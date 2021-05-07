import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import './App.css';
import Login from './Login/Login';
import addTransaction from '../addTransaction'
import Footer from './Footer/Footer';
import PrivateRoute from './PrivateRoute';
import Navbar from './Navbar/Navbar';
import AccountDetails from './AccountDetails/AccountDetails';

function App() {
  return (
    <Router>
      {/* Header Component */}
      <Switch>
        <Route path="/loginPage" />
        <Route path="/" component={Navbar} />
      </Switch>
      {/* Main body Component - Make Routes here */}    
      <Switch>
        <Route exact path="/loginPage" component={Login}/>       
        <Route exact path="/">
          <Redirect to="/LoginPage" />
        </Route>
        <Route exact path="/addTransaction" component={addTransaction} />
        {/* Add Private routes for all pages only accessible after login */}
        <PrivateRoute exact path="/AccountDetails" component={AccountDetails}/>
        <PrivateRoute exact path="/" />
      </Switch>
      {/* Footer Component */}
      <Footer />
    </Router>
  );
}

export default App;
