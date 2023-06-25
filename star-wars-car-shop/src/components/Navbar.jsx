import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/vehicles_display">Veículos</Link>
        </nav>
    )
}

export default Navbar