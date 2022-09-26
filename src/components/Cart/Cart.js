import React from 'react';
import './Cart.css'
// import Product from '../Product/Product';
const Cart = (props) => {
    const {cart } = props
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order summary </h3>
                <p>Select Item:{cart.length}</p>
                <p>Total price: {total}</p>
                <p>Shipping: {shipping} </p>
                <p>Tax: {tax}</p>
                <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;