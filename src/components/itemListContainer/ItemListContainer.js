import React, { useContext, useEffect } from 'react';
import {useParams} from 'react-router-dom'
//Context
import {StoreContext} from '../../context/StoreContext'
//Components
import ItemList from '../itemList/ItemList'
import Loading from '../loading/Loading'
//SCSS
import './itemListContainer.scss';



const ItemListContainer = () => {

    const {data, loading} = useContext(StoreContext)
    const {id} = useParams()

    return(
        <div className="container">
            { loading ? 
                <Loading /> 
                : data.map((product)=>{ 
                    return( id ? 
                        product.category === id ?
                        <ItemList
                            key={product.id}
                            item={{
                                id: product.id,
                                name: product.name,
                                imageUrl: product.imageUrl,
                                price: product.price,
                                stock:product.stock
                            }}
                        /> 
                        : null 
                    : <ItemList 
                        key={product.id}
                        item={{
                            id: product.id,
                            name: product.name,
                            imageUrl: product.imageUrl,
                            price: product.price,
                            stock:product.stock
                        }}
                    />)
                })
            }
        </div>
    )
}

export default ItemListContainer;