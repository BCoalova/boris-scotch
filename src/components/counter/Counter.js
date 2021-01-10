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
        cart
    } = useContext(StoreContext)

    const toggleAdded = () => {
        if (cart.length === 0 ) {
            setAdded(!added);
            setCart([{item:item,quantity:count}])
            setStock(stock - count);
            setTotalQuantity(count + totalQuantity);
        } else {
            cart.map((product)=>{
                if (product.item.id === item.id) {
                    console.log('producto ya en carrito' + item.id + product.item.id )
                    console.log(cart)
                } else {
                    setAdded(!added);                   
                    setStock(stock - count);
                    setCart(cart => [...cart, {item:item,quantity:count}])
                    setStock(stock - count);
                    setTotalQuantity(count + totalQuantity);
                }
            })
            
        }
    }

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
                disabled={count === 0} 
                variant={count === 0 ? 'outline-secondary' : 'primary'}
                onClick={toggleAdded}
            >Agregar al carrito</Button>
            
        </>
    )
}

export default Counter