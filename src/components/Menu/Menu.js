import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Scrollspy from 'react-scrollspy'
import './styles.css';

class Menu extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }
    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            headerElement = document.getElementById("mainNav");

        if (distanceY > shrinkOn) {
            headerElement.classList.add("navScroll");
        } else {
            headerElement.classList.remove("navScroll");
        }
    }
    render() {
        const categories = ["portfolio", "about", "contact"];
        return (
            <ReactBootstrap.Navbar expand="lg" id="mainNav" className="fixed-top text-uppercase">
                <div className="container">
                    <ReactBootstrap.Navbar.Brand id="mainNav1" className="text-white js-scroll-trigger" href="#">Brand</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                        <ReactBootstrap.Nav className="ml-auto">
                            {Object.values(categories).map(category => {
                                return <Scrollspy items={[category]} currentClassName="menuActivo" scrolledPastClassName="scrolledPased" className="ul">
                                    <ReactBootstrap.Nav.Link className="categories" href={'#' + category}>{category}</ReactBootstrap.Nav.Link>
                                </Scrollspy>
                            })}
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </div>
            </ReactBootstrap.Navbar>
        );
    }
}

export default Menu;

/**
 *
 */