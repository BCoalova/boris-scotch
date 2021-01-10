import React, {useContext, useEffect} from 'react'
import {StoreContext} from '../../context/StoreContext'
import ItemInCart from '../itemInCart/ItemInCart'
import './cart.scss'

const Cart = () => {

    const {cart} = useContext(StoreContext)
    useEffect(() => {
        if (cart.lenght === 0) console.log('cart lengh 0')
    }, [])
    return (
        <div className='container'>
            {
                cart.lenght === 0 ? 
                <>
                <p>No hat productos en el carrito</p>
                {console.log('No hat productos en el carrito')}
                </>
                : cart.map((itemInCart)=> <ItemInCart key={itemInCart.item.id} details={itemInCart} />)
            }
            
            
        </div>
    )
}

export default Cart
