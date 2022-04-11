import React, { useContext } from 'react';
import { RingContext } from '../grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleAddHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }

    return (
        <div>
            <h4>oh my anty</h4>
            <p>hpuse={house}</p>
            <button onClick={handleAddHouse}>add house</button>
        </div>
    );
};

export default Aunty;