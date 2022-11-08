import { Link } from 'react-router-dom';
import React from 'react';
import './cartwidget.css';

const CartWidget = () => {
    return (
        <div>
            <Link to='/cart'>
            <i class="bi bi-cart4"></i>
            </Link>
            
        </div>
    );
}

export default CartWidget;
