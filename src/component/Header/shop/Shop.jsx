import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../../product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])

    const handleAddToCart = (product) =>{
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);

    }

    // const {img, name, seller, ratings, price} = props.product;
 
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Products 
                    key={product.id} 
                    product={product}
                    handleAddToCart={handleAddToCart}>
                    </Products>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summery</h4>
                <p>Selected Item's : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;