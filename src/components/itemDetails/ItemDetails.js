import React from 'react';
//Boostrap
import Button from 'react-bootstrap/Button'
//Components
import Counter from '../counter/Counter'



const ItemDetails = ({details: {name, imageUrl, category, description, price, stock, id}}) => {
    return(
        <>
            <h3>{name}</h3>
            <img alt={id} src={imageUrl} />
            <p>{category}</p>
            <p>{description}</p>
            <p>$ {price}</p>
            <Counter stock={stock} initial={1} />
            <Button>Sumar al Carrito</Button>
        </>
    )
}

export default ItemDetails