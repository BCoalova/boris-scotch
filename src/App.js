import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appnavbar from './components/navbar/Navbar';
import Main from './components/main/Main'
import AppFooter from './components/footer/Footer';

const App = () => {
    return(
        <BrowserRouter>
            <Appnavbar />
            <Main />
            <AppFooter
                copy="&copy; Copyright 2020"
            />
        </BrowserRouter>
    )
}

export default App;