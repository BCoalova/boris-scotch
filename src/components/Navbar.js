import React from "react";
//BOOTSTRAP
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
//COMPONENTS
import Brand from './Brand';
import CartWidget from "./CartWidget";
//CSS
import './NavBar.css';

const AppNavBar = () => {
    return (
        <Navbar fixed="top" expand="lg">
            <Navbar.Brand href="#home"><Brand /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5">
                    <Nav.Link href="#link">MicroProcesadores</Nav.Link>
                    <Nav.Link href="#link">MotherBoards</Nav.Link>
                    <Nav.Link href="#link">Tarjetas Gráficas</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-dark">Search</Button>
                </Form>
                
            </Navbar.Collapse>
            <CartWidget />
        </Navbar>
    );
};

export default AppNavBar;
