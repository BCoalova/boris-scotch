import React from 'react'
//BOOTSTRAP
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

import Counter from '../counter/Counter';
import './itemList.scss'

const ItemList = ({name, stock, price, imageUrl}) => {
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
                <Counter 
                    initial={1}
                    stock={stock}
                />
                <Button className="addToCart">Sumar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemList