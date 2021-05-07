import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';


const Header = () => {
    const status = localStorage.getItem('isLoggedIn');
    let history = useHistory();

    const handleLogout = () => {
        const remember =  localStorage.getItem('rememberme')
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem('rememberme', remember);
        history.push("/");
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>DBS SEED</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {status ? <><Nav className="mr-auto">
                    <Nav.Link to={`/home/${localStorage.getItem('firstName')}`} as={Link}>
                        Home
                    </Nav.Link>
                    <NavDropdown title="Actions" id="basic-nav-dropdown">
                        <NavDropdown.Item to='/AccountDetails' as={Link}>
                                Account Balance
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item to='/transactionHist' as={Link}>
                                Transaction History
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item to='/addTransaction' as={Link}>
                                Make Transaction
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                    <Button variant="outline-success" onClick={handleLogout}>Logout</Button></> : null}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;