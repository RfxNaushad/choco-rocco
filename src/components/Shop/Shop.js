import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        fetch('./generated.json')
        .then(res => res.json())
        .then(data => setProducts(data))  
    },[])

    // console.log(products);
    const handleBuyChoco = product => {
        const newCart = [...cart, product]
        setCart(newCart)
        console.log(product.price);
    }
    return (
        <div className="choco-container">
            <div className="choco-choco">
                <h1>pick Your fav</h1>
                {
                    products.map(product => <Products
                     product={product}
                     handleBuyChoco={handleBuyChoco}
                     >
                     </Products>)
                }
            </div>
            <div className="choco-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;