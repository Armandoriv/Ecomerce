import './navbar.css'
import { Link } from 'react-router-dom';
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import Dropdown from './Dropdown/Dropdown';
import CartWidget from '../CartWidjet/CartWidget';
import Contador from '../Contador/Contador';


const Navbar = () => {
    return (
        <>
        <nav className="bro navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/"><img className='logo' src="./img/montañalogo.png" alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="ora collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link A" aria-current="page" href="#">Destacados</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link A" href="#">Promociones</a>
                </li>
                <Dropdown/>
              </ul> 
              <CartWidget/>
            </div>
          </div>
        </nav>
            
        </>
    );
}

export default Navbar;
