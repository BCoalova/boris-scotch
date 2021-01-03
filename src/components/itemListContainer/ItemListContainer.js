import React, { useState , useEffect } from 'react';
import {useParams} from 'react-router-dom'
//Components
import ItemList from '../itemList/ItemList'
import Loading from '../loading/Loading'
//SCSS
import './itemListContainer.scss';



const ItemListContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(()=>{
        const fetchData = fetch('../data/data.json')
        fetchData
        .then((getData) => {
            if (getData.status === 200 ) {
                return getData.json()
            }
        })
        .then((getData)=>{
            setTimeout(() => {
                setData(getData)
                setLoading(false)
            }, 500);
        })
    }, [])

    return(
        <div className="container">
            { loading ? 
                <Loading /> 
                : data.map((product)=>{ 
                    return( id ? 
                        product.category === id ?
                        <ItemList 
                            key={product.id}
                            id={product.id} 
                            name={product.name}   
                            imageUrl={product.imageUrl} 
                            price={product.price} 
                        /> 
                        : null 
                    : <ItemList 
                        key={product.id}
                        id={product.id} 
                        name={product.name}   
                        imageUrl={product.imageUrl} 
                        price={product.price} 
                    />)
                })
            }
        </div>
    )
}

export default ItemListContainer;