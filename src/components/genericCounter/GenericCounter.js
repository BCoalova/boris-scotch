import React from 'react'
//BOOTSTRAP
import Button from "react-bootstrap/Button";
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';

const GenericCounter = ({onIncrementAction, onDecrementAction, affectedValue, disableIncrement, disableDecrement }) => {
    return (
        <div className="counter">
                <Button 
                    onClick={onDecrementAction}
                    disabled={disableDecrement}
                    variant="outline-secondary" 
                >
                    <Dash size={20} />
                </Button>
                <p>{affectedValue}</p>
                <Button 
                    onClick={onIncrementAction} 
                    disabled={disableIncrement} 
                    variant="outline-secondary">
                    <Plus size={20} />
                </Button>
            </div>
    )
}

export default GenericCounter
