import React from 'react'

const ItemInCart = ({details}) => {
    
    return (
        <div className='productInCart'>
            <img src={details.item.imageUrl}></img>
            <div>
                <p>{details.item.name}</p>
                <p>$ {details.item.price}</p>
                <p>Cantidad: {details.quantity}</p>
            </div>
        </div>
    )
}

export default ItemInCart
/* <img src={product.imageUrl}></img>
            <div>
                <p>{product.name}</p>
                <p>$ {product.price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Total: ${total}</p>
            </div> */