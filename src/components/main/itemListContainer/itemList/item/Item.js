import React from 'react';
//BOOTSTRAP
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'

import './item.scss'
import Counter from './counter/Counter';

const Item = ({name, stock}) => {

    return(
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text>
                    Disponibles: {stock}
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

export default Item