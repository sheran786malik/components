import React from 'react';

import '../form/Form.css'


const Form = () => {
    return (
       <div className="formClass">
          <h1 className="formTitle"> 
               Get In Touch!
          </h1>
           <form className="contactForm">
               <div className="firstName">
                    <label className="label"> First Name </label>
                    <input 
                    type="text"
                    className="input">
                    </input>
               </div>
               <div className="lastName">
                    <label className="label"> Last Name </label>
                    <input 
                    type="text"
                    className="input">
                    </input>
               </div>
               <div className="email">
                    <label className="label"> Email </label>
                    <input 
                    type="text"
                    className="input">
                    </input>
               </div>
               <div className="message">
                    <label className="label"> Message </label>
                    <textarea
                    type="text"
                    className="inputMessage">
                    </textarea>
                    
               </div>
               <div className="button">
               <button className="submit">Get In Touch</button>
               </div>
               
               
          </form>
     </div>
         
    );

}

export default Form;