import './Product.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, handleAddToCade}) => {
    const {name, img, price, seller, ratings } = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            
            <div className='product-info'>
            <p className='productName'>{name}</p>
            <p>price: {price}</p>
            <p> <small>seller: {seller}</small> </p>
            <p> <small>Rating: {ratings} Stars</small> </p>
            </div>
            <button onClick={() => handleAddToCade(product)} className='btn-card'>
                <p className='btn-text'>Add to card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;