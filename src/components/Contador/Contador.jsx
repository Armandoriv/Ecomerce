import {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(1)

    const modificarContador = (operacion) => {
       if (operacion === "+") {
        if(contador < 10)
        setContador(contador + 1)
       } else {
        if(contador > 0)
        setContador(contador - 1)

       }
    }


    return (
        <>
          <button onClick={() => modificarContador("+")} className='btn btn-dark'>+</button>  
              {contador}
          <button onClick={() => modificarContador("-")} id='boton2' className='btn btn-dark'>-</button>
        </>
    );
}

export default Contador;
