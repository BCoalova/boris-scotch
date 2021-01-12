import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
//context
import {StoreContext} from '../../context/StoreContext'
//BOOTSTRAP
import Card from "react-bootstrap/Card";
//SCSS
import './itemList.scss'

const ItemList = ({item}) => {
    const {id, name, price, imageUrl} = item

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
                <Link 
                    className="addToCart btn btn-primary" 
                    to={`/producto/${id}`}
                    >Detalle</Link>
            </Card.Body>
        </Card>
    )
}

export default ItemList