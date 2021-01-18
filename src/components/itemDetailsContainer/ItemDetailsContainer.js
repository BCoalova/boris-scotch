import React, { useContext, useState, useEffect } from 'react'
import {getFirestore} from '../../firebase'
import {useParams} from 'react-router-dom'
//Context
import {StoreContext} from '../../context/StoreContext'
//Components
import ItemDetails from '../itemDetails/ItemDetails'
import Loading from '../loading/Loading'
//CSS
import './itemDetailsContainer.scss'

const ItemDetailsContainer = () => {

    const {loading, setLoading/* , data */} = useContext(StoreContext)
    const [data, setData] = useState([])
    const params = useParams()

    const [realTimePrice, setRealTimePrice] = useState()

    useEffect(() => {
        console.log(data)
    }, [data])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = db.collection('items')
        const query = itemsCollection.doc(params.id)
        query.get()
        .then((querySnapshot)=>{
            if (!querySnapshot.exists) {
                console.log('noexiste')
            } else {
                const dataRes = querySnapshot.data()
                setLoading(false)
                setData(data => [...data, dataRes])
                const price = querySnapshot.data()
                setRealTimePrice(price.price)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return(
        <div className="itemDetailContainer">
            { loading ? 
                <Loading /> : 
                data.map((product)=>{
                    return(<ItemDetails 
                        key={product.id}
                        item={{
                                id: product.id,
                                name : product.name,
                                imageUrl : product.imageUrl,
                                category : product.category,
                                description : product.description,
                                price : product.price,
                                currentStock : product.stock,
                                specs: product.specifications,
                                params: params.id
                            }}
                    />)
                })
            }
        </div>
    )
}

export default ItemDetailsContainer