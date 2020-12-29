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
                : data.map((e)=>{ 
                    return( id ? 
                        e.category === id ?
                        <ItemList 
                            key={e.id}
                            id={e.id} 
                            name={e.name}   
                            imageUrl={e.imageUrl} 
                            stock={e.stock} 
                            price={e.price} 
                        /> 
                        : null 
                    : <ItemList 
                        key={e.id}
                        id={e.id} 
                        name={e.name}   
                        imageUrl={e.imageUrl} 
                        stock={e.stock} 
                        price={e.price} 
                    />)
                })
            }
        </div>
    )
}

export default ItemListContainer;