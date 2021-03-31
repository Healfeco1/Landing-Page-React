import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './styles.css';

class Menu extends React.Component{
    componentDidMount(){
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }
    resizeHeaderOnScroll(){
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 200,
        headerElement = document.getElementById("mainNav");

        if(distanceY > shrinkOn){
            headerElement.classList.add("navbar-shrink");
        }else{
            headerElement.classList.remove("navbar-shrink");
        }
    }
    render(){
        const categories = ["portfolio","about","contact"];
        return(
            <ReactBootstrap.Navbar bg="categories" variant="categories" expand="lg" id="mainNav" className="fixed-top text-uppercase">
                <div className="container">
                    <ReactBootstrap.Navbar.Brand id="mainNav1"  className="text-white js-scroll-trigger" href="#page-top">Brand</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                        <ReactBootstrap.Nav className="ml-auto">
                        {Object.values(categories).map(category => {
                            return <ReactBootstrap.Nav.Link className="categories" key={category} href={'#'+category}>{category}</ReactBootstrap.Nav.Link>
                        })}
                        {/* <ReactBootstrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Divider />
                            <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                        </ReactBootstrap.NavDropdown> */}
                        </ReactBootstrap.Nav>
                    </ReactBootstrap.Navbar.Collapse>
                </div>
            </ReactBootstrap.Navbar>
        );
    }
}

// function Menu() {
    
    
// }

export default Menu; 