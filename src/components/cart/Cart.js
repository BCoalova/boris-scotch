import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {StoreContext} from '../../context/StoreContext'
import ItemInCart from '../itemInCart/ItemInCart'
import './cart.scss'

const Cart = () => {

    const {cart} = useContext(StoreContext)
    return (
        <div className='container'>
            {
                cart.length === 0 ?
                <div> 
                    <p>Tu carrito esta vació</p>
                    <Link className='btn btn-primary' to='/'>Agregá un producto</Link>
                </div>
                : cart.map((itemInCart)=> <ItemInCart key={itemInCart.item.id} details={itemInCart} />)
            }
            
            
        </div>
    )
}

export default Cart
