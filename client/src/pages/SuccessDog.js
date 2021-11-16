import React from 'react';
import Success2 from '../components/Success2';

const SuccessDog = ({dogs}) => {

    return (
        <div>
            Hello, from SuccessDog.js
            <Success2 dogs={dogs}/>
        </div>
    )
}

export default SuccessDog
