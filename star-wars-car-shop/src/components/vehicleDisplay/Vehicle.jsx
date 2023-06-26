import React from 'react'
import { Link } from 'react-router-dom'

function Vehicle({ name, model, cost, id }) {
    return (
        <div className="vehicle">
            <div className="content">
                <p>Nome: {name}</p>
                <p>Modelo: {model}</p>
                <p>Preço: {cost}</p>
                <form action="/checkout">
                    <input type="submit" value='Comprar' id={id}/>
                </form>
                <p>------------------------------------</p>
            </div>
        </div>
    )
}

export default Vehicle