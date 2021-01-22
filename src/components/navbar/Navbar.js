import React, {useState, useEffect} from "react";
import { getFirestore } from '../../firebase'
import { Link, NavLink } from 'react-router-dom'
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

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = db.collection('categories')
        itemsCollection.get()
        .then((res)=>{
            res.forEach(category => {
                /* console.log(category.data()) */
                setCategories(categories=>[...categories, {id: category.id, ...category.data()}])
            });
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    useEffect(() => {
        console.log(categories)
    }, [categories])

    return(
        <Navbar fixed="top" expand="xl" className="justify-content-between">
            <Link to="/">
                <Brand />
            </Link>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5">
                    {categories.length > 0 ?
                        categories.map(category=>{
                            return(
                                <NavLink 
                                    className="nav-link" 
                                    to={`/categorias/${category.key}`}
                                    key={category.id}
                                >
                                    {category.name}
                                </NavLink>
                            )
                        })
                        : null
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


