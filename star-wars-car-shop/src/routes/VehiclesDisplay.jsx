import { useState } from 'react'

import vehiclesMock from '../vehiclesMock.json'
import Vehicle from '../components/Vehicle'

function VehiclesDisplay() {
    const [vehicles, setVehicles] = useState(vehiclesMock)

    return (
        <div className='vehicles-list'>
            <h2>Veículos</h2>
            {vehicles.map((vehicle) => (
                <Vehicle vehicle={vehicle} />
            ))}

        </div>
    )
}

export default VehiclesDisplay