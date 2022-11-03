import React from 'react';
import Contador from '../Contador/Contador';

const DetalleProducto = ({producto}) => {
    return (
        <div className='container'>
            <div className=''>
               <img src={`../img/${producto.img}`} className="img-fluid" alt=""/>
            </div>
            <div>
                <div className='card-body'>
                    <h5 className='card-title'>{producto.nombre}</h5>
                    <p className='card-text'>Modelo: {producto.modelo} </p>
                    <p className='card-text'>Marca: {producto.marca} </p>
                    <p className='card-text'>Precio: {producto.precio} </p>
                    <p className='card-text'>Stock: {producto.stock} </p>
                    <button className='btn btn-dark'>Agregar al carrito</button>
                    <Contador/>
                </div>
            </div>
        </div>
    );
}

export default DetalleProducto;
