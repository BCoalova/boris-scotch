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
                <Route exact path="/" >
                    <ItemListContainer />
                </Route>
                <Route path="/categorias/:id">
                    <ItemListContainer />
                </Route>
                <Route path="/producto/:id">
                    <ItemDetailsContainer />
                </Route>
                <Route>
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default Main
