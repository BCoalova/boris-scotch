import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = ({mensaje}) => {
    return(
        <p className="itemlistcontainer">{mensaje}</p>
    )
}

export default ItemListContainer;