import React from 'react';
import './TShirts.css';

const TShirts = ({ tShirt, handelAddToCart }) => {
    const { name, picture, price } = tShirt;
    return (
        <div className='tshirts'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price ${price}</p>
            <button onClick={() => handelAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirts;