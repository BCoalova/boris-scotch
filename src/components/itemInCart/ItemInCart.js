import React, {useContext} from 'react'
import {StoreContext} from '../../context/StoreContext'

const ItemInCart = ({details}) => {
    
    const {handleRemove} = useContext(StoreContext)

    return (
        <div className='productInCart'>
            <img src={details.item.imageUrl}></img>
            <div>
                <p>{details.item.name}</p>
                <p>$ {details.item.price}</p>
                <p>Cantidad: {details.quantity}</p>
                <button
                    id={details.item.id}
                    onClick={handleRemove} 
                    className='btn btn-outline-danger'
                >Remover</button>
            </div>
        </div>
    )
}

export default ItemInCart