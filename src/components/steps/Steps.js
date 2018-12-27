import React from 'react';
import  Circle from '../svg/circle/Circle'
import '../steps/Steps.css'
import Arrow from '../svg/arrow/Arrow.svg'

import Data from '../data/Data';
//import Arrow from 'C:/Users/AAAA/Documents/components/src/components/svg/arrow/Arrow.js'

class Steps extends React.Component {
    render() {
        return (
        <div className="containerSteps">

            <div class="row">
        
                <div className="circle">
                    <Circle/>
                    <img className="arrow" src={Arrow}></img>
                    <h1 className="stepsNum"> 1 </h1>
                    <h2 className="textStep">Lorem ipsum dolor sit amet, consectetur adipiscing eli </h2>
                </div>

                <div className="circle">
                    <Circle/>
                    <img className="arrow" src={Arrow}></img>
                    <h1 className="stepsNum"> 2 </h1>
                    <h2 className="textStep">Lorem ipsum dolor sit amet, consectetur adipiscing eli </h2>
                </div>

                <div className="circle">
                    <Circle/>
                    <h1 className="stepsNum"> 3 </h1>
                    <h2 className="textStep">Lorem ipsum dolor sit amet, consectetur adipiscing eli </h2>
                </div>
               
                
            </div>
            
        </div>
   
           

        );
    }
}

export default Steps;