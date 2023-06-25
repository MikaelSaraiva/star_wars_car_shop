import React from 'react'

function Vehicle({ vehicle }) {
    return (
        <div className="vehicle">
            <div className="content">
                <p>Nome: {vehicle.name}</p>
                <p>Modelo: {vehicle.model}</p>
                <p>Preço: {vehicle.cost_in_credits}</p>
                <a href='/checkout'>Comprar</a>
                <p>------------------------------------</p>
            </div>
        </div>
    )
}

export default Vehicle