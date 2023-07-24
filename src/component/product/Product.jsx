import React from 'react';
import './Product.css';

const Products = (props) => {
    const {img, name, seller, quantity, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price : $ {price}</p>
            <p>Manufacturer : {seller}</p>
            {/* <p><small>Rating :{ratings} Stars</small></p> */}
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Products;