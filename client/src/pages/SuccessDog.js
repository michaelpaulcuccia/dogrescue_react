import React from 'react';
import Success from '../components/Success';

const SuccessDog = ({dogs}) => {

    return (
        <div>
            Hello, from SuccessDog.js
            <Success dogs={dogs}/>
        </div>
    )
}

export default SuccessDog
