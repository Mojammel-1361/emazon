import './Shop.css'

import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    // data lode
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then (data => setProducts(data))
    },[]);  
    const handleAddToCade = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=> <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCade ={handleAddToCade} 
                        
                        >
                      
                    </Product>)
                }
            </div>
            <div className="cart-container">

                <h3>oder</h3>
                <p>Select Item:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;