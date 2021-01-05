import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
//Components
import ItemDetails from '../itemDetails/ItemDetails'
import Loading from '../loading/Loading'
//CSS
import './itemDetailsContainer.scss'



const ItemDetailsContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const params = useParams()
    

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
            }, 600);
        })
    }, [])
    
    return(
        <div className="itemDetailContainer">
            { loading ? 
                <Loading /> : 
                data.map((product)=>{
                    return(
                        product.id === params.id ? 
                        <ItemDetails 
                            key={product.id}
                            item={{
                                    id: product.id,
                                    name : product.name,
                                    imageUrl : product.imageUrl,
                                    category : product.category,
                                    description : product.description,
                                    price : product.price,
                                    currentStock : product.stock,
                                    specs: product.specifications
                            }}
                        /> :
                        null
                    )
                })
            }
        </div>
    )

}

export default ItemDetailsContainer