import React, { useState , useEffect } from 'react';
import ItemList from '../itemList/ItemList'
import Loading from '../loading/Loading'
import './itemListContainer.scss';



const ItemListContainer = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = fetch('./data/data.json')
        fetchData
        .then((getData) => {
            if (getData.status === 200 ) {
                return getData.json()
            }
        })
        .then((getData)=>{
            setTimeout(() => {
                setData(getData)
            }, 2000);
        })
    }, [])

    return(
        <div className="container">
            { data.length === 0 ? 
                <Loading /> :  
                data.map((e)=>{ return( 
                    <ItemList 
                        key={e.id} 
                        name={e.name} 
                        imageUrl={e.imageUrl} 
                        stock={e.stock} 
                        price={e.price} /> 
                )}) 
            }
        </div>
    )
}

export default ItemListContainer;