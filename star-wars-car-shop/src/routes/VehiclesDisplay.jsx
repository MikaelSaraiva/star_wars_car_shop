import { useEffect, useState } from 'react'

// import vehiclesMock from '../vehiclesMock.json'
import Vehicle from '../components/vehicleDisplay/Vehicle'

function VehiclesDisplay() {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/vehicles/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => { setVehicles(data.results) })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className='vehicles-list'>
            <h2>Veículos</h2>
            {vehicles.map((vehicle) => (
                <Vehicle name={vehicle.name} model={vehicle.model} cost={vehicle.cost_in_credits} id={vehicle.url} key={vehicle.url} />
            ))}

        </div>
    )
}

export default VehiclesDisplay