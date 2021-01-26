import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className='cart_empty'>
            <h2>Parece que tu carrito esta vacio</h2>
            <p>¿Estás seguro que podés correr el Cyberpunk 2077 en Ultra - 2k - 144fps?</p>
            <p>mmm...</p>
            <Link className='btn btn-primary' to='/'>Mejor agregá un producto</Link>
        </div>
    )
}

export default EmptyCart
