import React, {useState, useEffect} from 'react'
import ItemDetails from '../itemDetails/ItemDetails'


const ItemDetailsContainer = () => {

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
        <div className="itemDetailContainer">
            { data.length === 0 ? 
                <p>LOADING</p> : 
                data.map((e)=>{
                    return(
                        e.id === 'gpu1' ? 
                        <ItemDetails 
                            key={e.id}
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