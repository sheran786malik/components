import React from 'react';

import Data from '../data/Data';

import './processBanner.css';

import number1 from '../svg/numberProcessBanner/number1.svg'

const processBanner = (props) => {

    console.log(props);

    return (
            <div className="processBanner">
                    <div className="numProcessBanner">
                        <img src={number1} alt="number 1"/>
                    </div>
                    <div className="textProcessBanner">
                        <Data 
                            sectionIndexText='0'
                        />
                    </div>
                
            </div>
        );

}
export default processBanner;
