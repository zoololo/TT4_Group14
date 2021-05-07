import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    let history = useHistory();

    const handleLogout = () => {
        const remembermeToken = localStorage.getItem('rememberme');
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem('rememberme', remembermeToken);
        history.push("/");
    }
//
    return (
        <div id="header">
            <ul id="navigation">
                <li className="selected">
                    <Link to="/AccountDetails">
                        Home
                    </Link>
                </li>
                <li className="menu">
                    <Link to="/transactionHist">
                        View Transaction History
                    </Link>
                </li>
                <li className="menu">
                    <Link to="/addTransaction">
                        Add Transaction
                    </Link>
                </li>
                <li>
                    <Link to="/AccountDetails">
                        View Account Details
                    </Link>
                </li>
                <li>
                    <Button variant="outline-success" onClick={handleLogout}>Logout</Button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;