import React from 'react';
import './itemListContainer.css'

const ItemListContainer = ({mensaje}) => {
    return(
        <div className="min_100_vh">
            <h1 className="itemlistcontainer">{mensaje}</h1>
        </div>
    )
}

export default ItemListContainer;