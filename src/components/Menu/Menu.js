import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './styles.css';

function Menu() {
    const categories = ["Portafolio","About","Contact"];
    return(
        <ReactBootstrap.Navbar expand="lg" id="mainnav" className="text-uppercase fixed-top p-4">
            <div className="container">
                <ReactBootstrap.Navbar.Brand className="js-scroll-trigger text-white" href="#page-top">Brand</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootstrap.Nav className="ml-auto ">
                    {Object.values(categories).map(category => {
                        return <ReactBootstrap.Nav.Link className="text-white" key={category} href={category}>{category}</ReactBootstrap.Nav.Link>
                    })}
                    <ReactBootstrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Divider />
                        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                    </ReactBootstrap.NavDropdown>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </div>
        </ReactBootstrap.Navbar>
    );
}

export default Menu; 