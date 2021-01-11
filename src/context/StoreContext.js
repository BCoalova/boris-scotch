import React, {createContext, useState, useEffect} from 'react'
import products from './products'

export const StoreContext = createContext()
const { Provider } = StoreContext

const StoreProvider = ({children}) => {

    //DATA
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        products.get("/products.json").then((response) => {
            if (response.status === 200) {
                const responseData = response.data;
                setTimeout(()=>{
                    setData(responseData)
                    setLoading(false)
                }, 600)
            } else {
                setData("an error ocurr");
            }
        });
    }, [])

    //Counter
    const initial = 0
    let [toggleItem, setToggleItem] = useState(false)
    let [stock, setStock] = useState()
    let [count, setCount] = useState(initial)
    let [added, setAdded] = useState(false)
    let [totalQuantity, setTotalQuantity] = useState(0)
    let [cart, setCart] = useState([])

    useEffect(()=>{
        setAdded(false)
    },[toggleItem])

    const handleIncrement = () => {
        if (count < stock) {
            setCount(++count);
        }
    }
    const handleDecrement = () => {
        if (count > initial) {
            setCount(--count)
        };
    }

    const handleAdd = (e) => {
        setAdded(!added);
        setStock(stock - count);
        setTotalQuantity(totalQuantity + 1);
        for (const producto of data) {
            if ( cart.length === 0 && producto.id === e.target.id) {
                setCart([{id:producto.id,item:producto,quantity:count}])
            } else if  (producto.id === e.target.id) {
                setCart(cart => [...cart, {id:producto.id,item:producto,quantity:count}])
            }
        }
    }

    const handleRemove = (e) => {
        const itemDeleted = cart.filter(function(value, index, arr){
            if (value.id !== e.target.id) {
                return arr 
            }
        })
        setCart(itemDeleted)
        setTotalQuantity(totalQuantity - 1)
    }

    return(
        <Provider 
            value={{
                /*Global Data*/
                data: data,
                loading: loading,
                setLoading:setLoading,
                /*Item Detail Data*/
                toggleItem:toggleItem,
                setToggleItem:setToggleItem,
                initial: initial,
                stock: stock,
                setStock: setStock,
                count:count,
                setCount:setCount,
                /*Count Data*/
                handleIncrement: handleIncrement,
                handleDecrement: handleDecrement,
                added:added,
                setAdded:setAdded,
                //Cart Data
                handleAdd:handleAdd,
                setCart:setCart,
                cart: cart,
                handleRemove:handleRemove,
                //CartWidget Data
                totalQuantity:totalQuantity,
                setTotalQuantity:setTotalQuantity
            }}
        >
            {children}
        </Provider>
    )
}

export default StoreProvider