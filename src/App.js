import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appnavbar from './components/navbar/Navbar';
import Main from './components/main/Main'
import AppFooter from './components/footer/Footer';

const App = () => {
    return(
        <>
            <Appnavbar />
            <Main />
            <AppFooter
                copy="&copy; Copyright 2020"
            />
        </>
    )
}

export default App;