import React from 'react';
import Myself from '../myself/Myself';
import Brother from '../brother/Brother';
import Sister from '../sister/Sister';
const Father = ({ house }) => {
    return (
        <div>
            <h2>this is father</h2>
            house: {house}
            <section style={{ display: 'flex' }}>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;