import React from 'react';
import './Dropdown.css'

const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
          <a className="D nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Noticias
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Destacados</a></li>
            <li><a className="dropdown-item" href="#">Favoritos</a></li>
            <li><a className="dropdown-item" href="#">Promociones</a></li>
          </ul>
        </li>
            
    );
}

export default Dropdown;
