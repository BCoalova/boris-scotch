import React, {useState} from 'react';
import {Link} from 'react-router-dom'
//Bootstrap
import Button from 'react-bootstrap/Button'
//Components
import Counter from '../counter/Counter'
import ItemSpecs from '../ItemSpecs/ItemSpecs'
//SCSS
import './itemDetails.scss'



const ItemDetails = ({details: {name, imageUrl, description, price, currentStock, id, specs}}) => {

    const initial = 0
    let [stock, setStock] = useState(currentStock)
    let [count, setCount] = useState(initial)
    let [added, setAdded] = useState(false)
    

    const handleIncrement = () => {
        if (count < currentStock) {
            setCount(++count);
            setStock(--stock)
        }
    }
    const handleDecrement = () => {
        if (count > initial) {
            setCount(--count)
            setStock(stock + 1)
        };
    }

    const onAdd = () => {
        if (count <= currentStock) {
            setAdded(true)
        }
    }


    return(
        <>
            <h3>{name}</h3>
            <div className="detailOverview">
                <img alt={id} src={imageUrl} />
                <div className="detailsDescription">
                    <h2>$ {price}</h2>
                    <p>{description}</p>
                    <p>Disponibles: {stock}</p>
                    {added?
                        <Link 
                            className='btn btn-primary'
                            to={`/cart`}
                        >Finalizar compra</Link>
                        : <Counter 
                        count={count}
                        stock={currentStock} 
                        initial={initial} 
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                        onAdd={onAdd}
                    />
                    }

                </div>
            </div>
            <ItemSpecs specs={specs} />
        </>
    )
}

export default ItemDetails