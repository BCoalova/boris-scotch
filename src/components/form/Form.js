import React, { useState, useContext } from 'react'
//context
import { StoreContext } from '../../context/StoreContext'

const Form = () => {

    const {cart, name, setName, surname, setSurname, email, setEmail, phoneNumber, setPhoneNumber, 
        handlePurchase} = useContext(StoreContext)


    return (
        <form onSubmit={handlePurchase}>
            <div className="form_group_inline">
                <div className='form-group'>
                    <label className="form-label" htmlFor="formBasicEmail">
                        Nombre
                    </label>
                    <input 
                        type="text" 
                        placeholder="Nombre"
                        className="form-control"
                        value={name}
                        required
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label className="form-label" htmlFor="formBasicEmail">
                        Apellido
                    </label>
                    <input 
                        type="text" 
                        placeholder="Apellido"
                        className="form-control"
                        required
                        value={surname}
                        onChange={(e)=>{setSurname(e.target.value)}}
                    />
                </div>
            </div>
            
            <div className="form-group">
                <label className="form-label" htmlFor="formBasicEmail">
                    Email
                </label>
                <input 
                    type="email" 
                    placeholder="juan@ejemplo.com" 
                    className="form-control"
                    required
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="formBasicEmail">
                    Nombre
                </label>
                <input 
                    type="text" 
                    placeholder="153153153" 
                    required
                    className="form-control"
                    value={phoneNumber}
                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                />
            </div>
            <button className='btn btn-primary'>Finalizar Compra</button>
        </form>
    )
}

export default Form
