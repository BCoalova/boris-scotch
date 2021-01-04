import React, {useState} from "react";
import {Link, NavLink} from 'react-router-dom'
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


function AppNavBar() {
    const [navBarLinks] = useState(['AMD', 'GeForce'])

    return(
        <Navbar fixed="top" expand="xl" className="justify-content-between">
            <Link to="/">
                <Brand />
            </Link>
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5">
                    {
                        navBarLinks.map((navBarLink)=>{
                            return(
                                <NavLink 
                                    className="nav-link" 
                                    to={`/categorias/${navBarLink}`}
                                    key={navBarLink}
                                >
                                    {navBarLink}
                                </NavLink>
                            )
                        })
                    }
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

export default AppNavBar


