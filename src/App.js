import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Appnavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return(
        <>
            <Appnavbar 
            brand="MRace" 
            />
            <ItemListContainer 
                mensaje="Bienvenido a nuestra tienda, todavía la estamos completando" 
            />
        </>
    )
}

export default App;