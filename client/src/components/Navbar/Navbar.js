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
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li className="menu">
                    <Link to="/home">
                        View Transaction History
                    </Link>
                </li>
                <li className="menu">
                    <Link to="/home">
                        Add Transaction
                    </Link>
                </li>
                <li>
                    <Link to="/home">
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