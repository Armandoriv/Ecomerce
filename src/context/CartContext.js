import { useContext, useState, createContext, createContext } from "react";

const createContext = createContext([])

const CartContextProvider = (props) => {
    const [cart, setcart] = useState([]);

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id)

    }

    const addItem = (producto, cantidad) => {
        if(isInCart(nuevoProducto.id)){
            const indice = cart.findIndex(prod => prod.id === id)
            const aux = [...cart]
            aux[indice].cant = cantidad
            setcart(aux)

        } else {
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }
            setcart([...cart, nuevoProducto])
        }
    }

}