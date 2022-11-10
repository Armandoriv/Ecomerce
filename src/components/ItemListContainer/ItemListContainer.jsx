import {useState, useEffect, useContext} from 'react';
import ItemList from '../itemList/itemList.jsx';
import {consultarBDD} from '../../assets/funciones.js'
import { useParams } from 'react-router-dom';
import { DarkModeContext, DarkModeProvider } from '../../context/darkMode.js';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)


    useEffect(() => {
        if(category) {
            consultarBDD('../json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            consultarBDD('./json/productos.json').then(productsList => {
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        
    },[category]);
    
    return (
        <div className={darkMode ? 'body DarkMode ': 'body'}>
            <button className={darkMode ? 'btn btn-light': 'btn btn-dark'} onClick={()=>toggleDarkMode()}>Cambiar color</button>
            {productos}
        </div>
       
    );
}

export default ItemListContainer;
