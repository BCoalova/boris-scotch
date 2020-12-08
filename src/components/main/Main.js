import React from 'react';

import ItemListContainer from './itemListContainer/ItemListContainer';

const Main = () => {
    return (
        <div className="container">
            <ItemListContainer 
                mensaje="Bienvenido a nuestra tienda, todavía la estamos completando" 
            />
        </div>
    )
}

export default Main
