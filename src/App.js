import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appnavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import AppFooter from './components/AppFooter';

const App = () => {
    return(
        <>
            <Appnavbar 
            brand="MRace" 
            />
            <ItemListContainer 
                mensaje="Bienvenido a nuestra tienda, todavía la estamos completando" 
            />
            <AppFooter
                copy="&copy; Copyright 2020"
            />
        </>
    )
}

export default App;