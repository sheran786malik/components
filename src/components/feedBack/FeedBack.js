import React from 'react'

import './FeedBack.css';

const FeedBack = () => {
    return (
        <div className="feedBack"> 
            <div className="textFeedback">
                <h> We love to hear what our customers are saying</h>
            </div>
            <div className="subtitle">
                <h> Leave us feedback on how we did</h>
            </div>
            <div className="buttonFeedback">
                <button class="sendFeedback"> Send Feedback </button>
            </div>
            
            
        </div>
    );
}

export default FeedBack;