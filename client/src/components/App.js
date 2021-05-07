import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import './App.css';
import PrivateRoute from './PrivateRoute';
import TransactionHist from './TransactionHist/TransactionHist';


function App() {
    return ( <
        Router >
        <
        div class = "center-align" >
        <
        Switch >

        <
        Route exact = { true }
        path = '/' > < h3 > This line is from App file by
        default < /h3> < /
        Route > <
        Route path = "/transactionHist" >
        <
        TransactionHist / >
        <
        /Route>

        <
        /Switch> < /
        div > <
        /Router>
    );
}

export default App;