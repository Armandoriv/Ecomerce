import { Link } from 'react-router-dom';
import React from 'react';

const CartWidget = () => {
    return (
        <div>
            <Link to='/carrito'>
            <i class="bi bi-cart4"></i>
            </Link>
            
        </div>
    );
}

export default CartWidget;
