import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div>
            <h3>Cart Summary</h3>
            <h3>Order Quantity: {cart.length}</h3>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name}
                    <button>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;