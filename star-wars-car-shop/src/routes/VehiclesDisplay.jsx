import { useEffect, useState } from 'react'

// import vehiclesMock from '../vehiclesMock.json'
import Vehicle from '../components/vehicleDisplay/Vehicle'
import PagesNavBar from '../components/vehicleDisplay/PagesNavBar'

function VehiclesDisplay() {
    const [vehicles, setVehicles] = useState([])

    const [page, setPage] = useState(1)

    const [nextPage, setNextPage] = useState(null)

    useEffect(() => {
        fetch(`https://swapi.dev/api/vehicles/?page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => { setVehicles(data.results); setNextPage(data.next) })
            .catch((err) => console.log(err))
    }, [page])

    return (
        <div className='vehicles-list'>
            <h2>Veículos</h2>
            {vehicles.map((vehicle) => (
                <Vehicle name={vehicle.name} model={vehicle.model} cost={vehicle.cost_in_credits} id={vehicle.url} key={vehicle.url} />
            ))}
            <PagesNavBar pageNumber={page} nextPageUrl={String(nextPage)} setPage={setPage} />
        </div>
    )
}

export default VehiclesDisplay