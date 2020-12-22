import React from 'react';

import ItemDetailsContainer from '../itemDetailsContainer/ItemDetailsContainer';
import ItemListContainer from '../itemListContainer/ItemListContainer';

import './main.scss'

const Main = () => {
    return (
        <div className="min_100_vh">
            <ItemListContainer />
            <ItemDetailsContainer />
        </div>
    )
}

export default Main
