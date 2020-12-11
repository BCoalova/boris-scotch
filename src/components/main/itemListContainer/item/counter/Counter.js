import React, {useState} from 'react'; 
//BOOTSTRAP
import Button from "react-bootstrap/Button";
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';
//STYLES
import './counter.scss'


const Counter = ({initial, stock}) => {

    let [count, setCount] = useState(initial)

    const handleIncrement = () => {
        if (count < stock) setCount(++count);
    }
    const handleDecrement = () => {
        if (count > 0) setCount(--count);
    }

    return (
        <div className="counter">
            <Button onClick={handleDecrement} variant="outline-secondary">
                <Dash size={20} />
            </Button>
            <p>{count}</p>
            <Button onClick={handleIncrement} variant="outline-secondary">
                <Plus size={20} />
            </Button>
        </div>
    )
}

export default Counter