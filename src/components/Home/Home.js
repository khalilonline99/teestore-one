import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts);
    return (
        <div className='home-container'>
            <div className="tshirt-container">
            {
                tshirts.map(tshirt => <TShirt
                key = {tshirt._id}
                tshirt = {tshirt}>
                </TShirt>)
            }
            </div>

            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;