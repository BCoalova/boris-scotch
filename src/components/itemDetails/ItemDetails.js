import React from 'react';



const ItemDetails = ({ name, category, description, price, imageUrl }) => {
    return(
        <>
            <h3>{name}</h3>
            <img alt="" src={imageUrl} />
            <p>{category}</p>
            <p>{description}</p>
            <p>$ {price}</p>
        </>
    )
}

export default ItemDetails