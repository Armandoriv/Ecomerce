import './App.css'
import Contador from './Contador/Contador';
import ItemListContainer from './Home/Home';
import Navbar from './Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import Productos from './Productos/Productos';
import Producto from './Producto/Producto';
import Carrito from './Carrito/Carrito';

const App = () => {
    return (
      
     <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/producto/:id' element= {<Producto/>}/>
        <Route path='/producto' element= {<Productos/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
      </BrowserRouter>
     </>
      
    
    );
}

/*const alumno1 = {nombre: "Yireth", apellido: "Mendoza"}
    const alumno2 = {nombre: "Airam", apellido: "Mendoza"}
    const alumno3 = {nombre: "Armando", apellido: "Rivera"}

    const alumnos = [alumno1, alumno2, alumno3]

    const consultarAlumnos = (permiso) => {
        return new Promise ((res, rej) => {
            if(permiso){
                res(alumnos)
            }
            rej("No cuenta con los permisos suficientes")

        } )
    }

    consultarAlumnos(true)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))*/




export default App;
