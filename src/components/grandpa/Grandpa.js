import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../father/Father';
import Uncle from '../uncle/Uncle';
import Aunty from '../aunty/Aunty';


export const RingContext = createContext('[ornament,house]');


const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'diamond ring';
    const handleHouseCount = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h1>Grand Pa</h1>
                house: {house} <button onClick={handleHouseCount}>Buy A House</button>;

                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>

    );
};

export default Grandpa;