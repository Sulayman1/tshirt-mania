import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../cart/Cart';
import TShirts from '../tshirts/TShirts';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handelAddToCart = (selectedItem) => {

        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('Item already exist');
        }

    }

    const handelRemoveFromCart = (selectedItem) => {

        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirts
                        key={tShirt._id}
                        tShirt={tShirt}
                        handelAddToCart={handelAddToCart}
                    ></TShirts>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handelRemoveFromCart={handelRemoveFromCart}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;