export const consultarBBD = async (ruta) => {
    const promise = await fetch (ruta)
    const productos = await promise.json()
    return productos
        const cardProductos = productos.map(prod => 
            <div className="card mt-5 mb-5" key={prod.id}>
                <img src={`./img/${prod.img}`} className="card-img-top imm" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">Marca:{prod.marca}</p>
                    <p className="card-text">Modelo:{prod.modelo}</p>
                    <p className="card-text">Precio: ${prod.precio}</p>
                    <p className="card-text">Stock:{prod.stock}</p>
                    <button className='btn btn-dark'>Ver producto</button>
                    
                </div>
            </div>
        )
        return cardProductos

    }

