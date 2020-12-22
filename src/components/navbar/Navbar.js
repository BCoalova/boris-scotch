import React from "react";
//BOOTSTRAP
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
//COMPONENTS
import Brand from '../brand/Brand';
import CartWidget from "../cartWidget/CartWidget";
//CSS
import './navBar.scss';

class AppNavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            link_1 : "AMD",
            link_2 : "NVidia",
        }
    }
    render(){

        const {link_1, link_2} = this.state

        return(
            <Navbar fixed="top" expand="xl" className="justify-content-between">
                <Navbar.Brand href="#home">
                    <Brand />
                </Navbar.Brand>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <Nav.Link href="#link_1">{link_1}</Nav.Link>
                        <Nav.Link href="#link_2">{link_2}</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Button variant="outline-dark">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <CartWidget />
            </Navbar>
            
        )
    }
}

export default AppNavBar;
