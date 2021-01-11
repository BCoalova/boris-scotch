import React, {useContext} from 'react'; 
//context
import {StoreContext} from '../../context/StoreContext'
//BOOTSTRAP

import Button from "react-bootstrap/Button";
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';
//STYLES
import './counter.scss'


const Counter = ({currentStock, item}) => {

    const { 
        count, 
        initial, 
        handleIncrement, 
        handleDecrement,
        setAdded,
        setStock,
        added,
        stock,
        totalQuantity,
        setTotalQuantity,
        setCart,
        cart,
        handleAdd
    } = useContext(StoreContext)

    return (
        <>
            <div className="counter">
                <Button 
                    onClick={handleDecrement} 
                    disabled={count === initial}
                    variant="outline-secondary" 
                >
                    <Dash size={20} />
                </Button>
                <p>{count}</p>
                <Button 
                    onClick={handleIncrement} 
                    disabled={count === currentStock} 
                    variant="outline-secondary">
                    <Plus size={20} />
                </Button>
            </div>
            <Button 
                id={item.id}
                disabled={count === 0} 
                variant={count === 0 ? 'outline-secondary' : 'primary'}
                onClick={handleAdd}
            >Agregar al carrito</Button>
            
        </>
    )
}

export default Counter