import React from 'react';
import './FormBusqueda.css'

const FormBusqueda = ({Busqueda}) => {
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder={Busqueda} aria-label="Search" />
            <button className="btn btn-primary" type="button">Search</button>
        </form>
    );
}

export default FormBusqueda;
