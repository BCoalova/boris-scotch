import React from 'react';
import {Route, Switch} from 'react-router-dom'
//Components
import ItemDetailsContainer from '../itemDetailsContainer/ItemDetailsContainer';
import ItemListContainer from '../itemListContainer/ItemListContainer';
import Cart from '../cart/Cart'

import './main.scss'

const Main = () => {
    return (
        <div className="min_100_vh">
            <Switch>
                <Route component={ItemListContainer} path="/" exact />
                <Route component={ItemListContainer} path="/categorias/:id" />
                <Route component={ItemDetailsContainer} path="/producto/:id" />
                <Route component={Cart} path="/cart" />
            </Switch>
        </div>
    )
}

export default Main
