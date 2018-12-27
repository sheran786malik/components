import React from 'react';

import Data from '../data/Data';

import './TypicalClient.css';

const TypicalClient = (props) => {

    console.log(props);

    return (
    <div className="typicalClient">

        <div className="title">
            <h1 className="clientName">
                <Data 
                clientName='0'
                />
            </h1>
            <h2 className="subtitle">
                <Data 
                SectionIndex='0'
                />
            </h2>
        </div>
            <div className="typicalText">
                <Data subIndex='1'/>
            </div>
    </div>
    
    
    );
}

export default TypicalClient;