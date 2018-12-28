import React from 'react';

import './Contact.css';
const Contact = () => {
    return (
        <div className="contact">
            <div className="firstText">
             <h>Whats the best way for us to talk?</h>
            </div>
            <div className="emailUs">
                <h className="emailText"> Email us at <span className="email"> help@budgetaccounting.co.uk </span></h>
            </div>
            <div class="seperation">
                <p className="separator"> or </p>
            </div>
            <div className="finalText">
                <p className="finalTextStart"> Lets us call you by <span className="callback"> requesting a callback</span></p>
            </div>
        </div>

    );

}
export default Contact;