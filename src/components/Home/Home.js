import React, { useState } from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (tshirt) => {
        const ifShirtExist = cart.find(ts => ts._id === tshirt._id)
        if (ifShirtExist){
            alert('Already added')
        }
        else{
            
        const newCart = [...cart, tshirt];
        setCart(newCart);
        }
    }

    const handleRemoveItem = (tshirt) => {
        const removeItem = cart.filter(ts => ts._id !== tshirt._id)
        setCart(removeItem);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
            {
                tshirts.map(tshirt => <TShirt
                key = {tshirt._id}
                tshirt = {tshirt}
                handleAddToCart = {handleAddToCart}>
                </TShirt>)
            }
            </div>

            <div className="cart-container">
                <Cart
                cart ={cart}
                handleRemoveItem = {handleRemoveItem}></Cart>
            </div>
        </div>
    );
};

export default Home;