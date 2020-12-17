import React from 'react';
import ItemList from './itemList/ItemList'
import './itemListContainer.scss';



const ItemListContainer = () => {
    return(
        <div className="container">
            <ItemList />
        </div>
    )
}

export default ItemListContainer;