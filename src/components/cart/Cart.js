import React from 'react';
import './Cart.css';

const Cart = ({ cart, handelRemoveFromCart }) => {

    // conditional rendering option.
    // 1. element variable
    // 2. ternary operater
    // 3. && operator (shorthand)
    // 4. ||

    let command;
    if (cart.length === 0) {
        command = <p>Add atleast one Item</p>
    }
    else if (cart.length === 1) {
        command = <p>please add more item</p>
    }
    else {
        command = <p><small>thanks for adding item</small></p>
    }

    return (
        <div>
            <h1>Item Selected: {cart.length}</h1>

            {
                cart.map(tshirt =>
                    <h3>
                        {tshirt.name}
                        <button onClick={() => handelRemoveFromCart(tshirt)}>X</button>
                    </h3>
                )
            }

            {cart.length === 0 || <p className='buy-pros'>YEY you are buying</p>}
            {cart.length === 3 && <h2 className='tri-pros'>three product added</h2>}
            <h3>{command}</h3>
            {cart.length === 4 && <button>review order</button>}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Clear All</button>}
        </div>
    );
};

export default Cart;