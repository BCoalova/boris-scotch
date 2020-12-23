import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
//Components
import ItemDetails from '../itemDetails/ItemDetails'
import Loading from '../loading/Loading'


const ItemDetailsContainer = () => {

    const [data, setData] = useState([])

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
            }, 600);
        })

        
    }, [])
    
    return(
        <div className="itemDetailContainer">
            { data.length === 0 ? 
                <Loading /> : 
                
                data.map((e)=>{
                    return(
                        e.id === params.id ? 
                        <ItemDetails
                            key={e.id}
                            id={e.id}
                            name={e.name} 
                            imageUrl={e.imageUrl}
                            category={e.category}
                            description={e.description} 
                            price={e.price} 
                        /> :
                        null
                    )
                })
            }
        </div>
    )

}

export default ItemDetailsContainer