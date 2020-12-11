import React from 'react';
//BOOTSTRAP
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'

import './item.scss'
import Counter from './counter/Counter';

const Item = ({name, description, link, linkName, initial, stock}) => {

    return(
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Link href={link}>
                    {linkName}
                </Card.Link>
                <Counter 
                    initial={initial}
                    stock={stock}
                />
                <Button className="addToCart">Sumar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default Item