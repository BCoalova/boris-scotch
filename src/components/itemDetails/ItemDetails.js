import React from 'react';
//Boostrap
import Button from 'react-bootstrap/Button'
//Components
import Counter from '../counter/Counter'
import ItemSpecs from '../ItemSpecs/ItemSpecs'
//SCSS
import './itemDetails.scss'



const ItemDetails = ({details: {name, imageUrl, category, description, price, stock, id, specs}}) => {
    return(
        <>
            <h3>{name}</h3>
            <div className="detailOverview">
                <img alt={id} src={imageUrl} />
                <div className="detailsDescription">
                    <p>{category}</p>
                    <p>{description}</p>
                    <p>$ {price}</p>
                    <Counter stock={stock} initial={1} />
                    <Button>Sumar al Carrito</Button>
                </div>
            </div>
            <ItemSpecs specs={specs} />
        </>
    )
}

export default ItemDetails