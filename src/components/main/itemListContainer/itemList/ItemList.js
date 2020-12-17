import React, { useState , useEffect } from 'react'
import Item from './item/Item'

const dataBase =  [
                {
                    id: 'gpu1',
                    name: 'Sapphire RX 5600XT BE',
                    description: 'Placa de video marca Sapphire, modelo RX 5600 XT BE. Memoria: 6 GB',
                    photo: 'sapphire-rx-5600xt-be',
                    stock: 5
                },
                {
                    id: 'gpu2',
                    name: 'EVGA RTX 2060 SC',
                    description: 'Placa de video marca EVGA, modelo RTX 2060. Memoria: 6 GB',
                    photo: '',
                    stock: 14
                },
                {
                    id: 'gpu3',
                    name: 'Gigabyte RTX 2060 OC',
                    description: 'Placa de video marca Gigabyte, modelo RTX 2060. Memoria: 6 GB',
                    photo: '',
                    stock: 7
                },
            ]

const ItemList = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = new Promise((res, rej)=> {
            res(dataBase)
        })
        fetchData.then((getData) => {
            setTimeout(() => {
                setData(getData)
            }, 2000);
        })
    }, [data])

    return(
        <>
            { data === [] ? null : data.map((e, i)=>{return( <Item name={e.name} stock={e.stock} key={e.id} /> )}) }
        </>
    )
}

export default ItemList