import React, {useState} from 'react'; 
//BOOTSTRAP
import Button from "react-bootstrap/Button";
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';
//STYLES
import './counter.scss'


const Counter = ({stock, initial}) => {

    let [count, setCount] = useState(initial)

    const handleIncrement = () => {
        if (count < stock) {setCount(++count);}
    }
    const handleDecrement = () => {
        if (count > initial) setCount(--count);
    }
    
    return (
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
    )
}

export default Counter