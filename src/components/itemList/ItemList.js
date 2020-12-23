import React from 'react'
import {Link} from 'react-router-dom'
//BOOTSTRAP
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
//Components
import Counter from '../counter/Counter';
//SCSS
import './itemList.scss'

const ItemList = ({name, stock, price, imageUrl, id}) => {
    return(
        <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text>
                    $ {price}
                </Card.Text>
                <Link to={`/producto/${id}`}>Detalle</Link>
                <Counter 
                    initial={1}
                    stock={stock}
                />
                <Button variant="primary" className="addToCart">Sumar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemList