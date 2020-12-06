import React from 'react';
import './NavBar.css'
import CartWidget from './CartWidget';


const Appnavbar = ({brand}) => {
    return(
        <header>
            <nav>
                <div className="brand">
                    <a href="/">{brand}</a>
                </div>
                <ul>
                    <li><a href="/">MicroProcesadores</a></li>
                    <li><a href="/">MotherBoards</a></li>
                    <li><a href="/">Tarjetas Gráficas</a></li>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    )
}


export default Appnavbar