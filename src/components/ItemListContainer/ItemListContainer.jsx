import {useState, useEffect, useContext} from 'react';
import ItemList from '../itemList/itemList.jsx';
import {consultarBDD} from '../../assets/funciones.js'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()


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
        <div>
            {productos}
        </div>
       
    );
}

export default ItemListContainer;
