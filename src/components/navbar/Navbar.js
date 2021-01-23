import React, { useState, useEffect, useContext} from "react";
import { StoreContext } from '../../context/StoreContext'
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
    const { search, setSearch } = useContext(StoreContext)

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
                <Form inline onSubmit={(e)=>e.preventDefault()}>
                    <FormControl 
                        onChange={(e)=>setSearch(e.target.value.toUpperCase())} 
                        type="text" 
                        placeholder="Buscar" 
                        className="mr-sm-2" 
                    />
                    <Link to={`/search/${search}`} className='btn btn-outline-dark'>Buscar</Link>
                </Form>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <CartWidget />
        </Navbar>
    )
}

export default AppNavBar


