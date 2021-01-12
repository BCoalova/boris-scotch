import React, {useContext} from 'react'; 
//Context
import {StoreContext, counterInitialState} from '../../context/StoreContext'
//BOOTSTRAP
import Button from "react-bootstrap/Button";
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';
//STYLES
import './counter.scss'

const Counter = ({currentStock, item}) => {

    const { 
        handleAdd,
        dispatchCount,
        counterCount
    } = useContext(StoreContext)

    return (
        <>
            <div className="counter">
                <Button 
                    onClick={
                        () => counterCount > counterInitialState ? 
                            dispatchCount('COUNTER_DECREMENT'): 
                            null
                        }
                    disabled={counterCount === counterInitialState}
                    variant="outline-secondary" 
                >
                    <Dash size={20} />
                </Button>
                <p>{counterCount}</p>
                <Button 
                    onClick={
                        () => counterCount < item.stock ?
                            dispatchCount('COUNTER_INCREMENT'): 
                            null
                    } 
                    disabled={counterCount === currentStock} 
                    variant="outline-secondary">
                    <Plus size={20} />
                </Button>
            </div>
            <Button 
                id={item.id}
                disabled={counterCount === 0} 
                variant={counterCount === 0 ? 'outline-secondary' : 'primary'}
                onClick={handleAdd}
            >Agregar al carrito</Button>
        </>
    )
}

export default Counter