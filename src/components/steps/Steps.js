import React from 'react';
import '../steps/Steps.css'
import Arrow from '../svg/arrow/Arrow.svg'

import Circle from '../svg/circle/Circle';
import 'src/components/svg/arrow/Arrow.svg'

class Steps extends React.Component {
    render() {
        return (
        <div className="containerSteps">

            <div class="steps">
        
                <div className="circleOne">
                    <Circle/>
                    
                    <h1 className="stepsNum"> 1 </h1>
                    <h2 className="textStep">Lorem ipsum dolor sit amet, consectetur adipiscing eli </h2>
                </div>
                <div className="arrow">
                    <img  src={Arrow}></img>
                    </div>

                <div className="circleTwo">
                    <Circle/>
                    
                    <h1 className="stepsNum"> 2 </h1>
                    <h2 className="textStep">Lorem ipsum dolor sit amet, consectetur adipiscing eli </h2>
                </div>
                <div className="arrow">
                    <img  src={Arrow}></img>
                    </div>

                <div className="circleThree">
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