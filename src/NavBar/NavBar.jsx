import { Link, Outlet } from 'react-router-dom'
import image from '../assets/react.svg'
import Styles from './Nav.module.css'
export function NavBar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={image} alt=""/>
                        Navbar
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={`navbar-nav ${Styles.navItems}`}>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Main</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Create">Add item</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
    
}