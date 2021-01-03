import React from 'react'; 

//BOOTSTRAP
import Button from "react-bootstrap/Button";
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';
//STYLES
import './counter.scss'


const Counter = ({count, initial, stock, handleDecrement, handleIncrement, onAdd}) => {

    return (
        <>
            <div className="counter">
                <Button 
                    onClick={handleDecrement} 
                    disabled={count === initial}
                    variant="outline-secondary" 
                >
                    <Dash size={20} />
                </Button>
                <p>{count}</p>
                <Button 
                    onClick={handleIncrement} 
                    disabled={count === stock} 
                    variant="outline-secondary">
                    <Plus size={20} />
                </Button>
            </div>
            <Button 
                disabled={count === 0} 
                variant={count === 0 ? 'outline-secondary' : 'primary'}
                onClick={onAdd}
                
            >Agregar al carrito</Button>
            
        </>
    )
}

export default Counter