import React, { useContext } from 'react';
import { RingContext } from '../grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h1>special</h1>
            <button onClick={() => setHouse(house + 1)}>set house</button>
            <p>house {house}</p>
        </div>
    );
};

export default Special;