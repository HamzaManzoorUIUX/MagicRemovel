import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import Logo from '../img/logo 2 (1).png';
import { FaUserCircle } from 'react-icons/fa';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory
} from "react-router-dom";

// import Navbar from 'react-bootstrap/Navbar'
// import Dropdown from 'react-bootstrap/Dropdown';
function Navbar1() {

    let history = useHistory();
    console.log(history)
    return (
        <React.Fragment>
            <div className="myContainer">
                <Navbar className="nav-new px-0" expand="lg">
                    <Navbar.Brand as={Link} to="/" >
                        <img src={Logo} className='web-logo' alt="Magic-Remover Logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto nav-links">

                        </Nav>
                        <Form inline>
                            <Nav.Link className="nav-links" as={Link} to="/upload" >Remove Background</Nav.Link>
                            <Nav.Link className="nav-links" as={Link} to="/" >Use Case</Nav.Link>
                            <Nav.Link className="nav-links" as={Link} to="/" >Downloads</Nav.Link>
                            <Nav.Link className="nav-links" as={Link} to="/api" >API</Nav.Link>
                            <Nav.Link className="nav-links" as={Link} to="/pricing" >Pricing</Nav.Link>
                            {/* <Nav.Link className="nav-links" as={Link} to="/backgroundapi" >Background API</Nav.Link>
                        <Nav.Link className="nav-links" as={Link} to="/psextension" >PS Extension</Nav.Link>
                        <Nav.Link className="nav-links" as={Link} to="/functionalities" >Functionalaties</Nav.Link>
                        */}
                            <Button as={Link} to="/login" variant="outline-success log-btn"><FaUserCircle className="login-icon" /> Login / Signup</Button>
                            {/* <Button  as={Link} to="/upload"  className="remove-backgroundBtn">Remove Background</Button> */}
                            {/*  */}
                            <NavDropdown className="nav-links" alignRight title="En" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </React.Fragment>
    );
}


export default Navbar1;
