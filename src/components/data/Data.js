import React from 'react';

import './Data.css';

import TypicalClient from '../typicalClients/TypicalClient'
const Data = (props) => {

    const number = [
        '1.',
        '2.',
        '3.',
        '4.'
    ]
    const processText = [
        'Register you with HRMC',
        'Prepare your accounts',
        'Prepare your tax return',
        'Submission to HMRC'
    ]

    const title = [
        'Rental Property Income',
        'Digital Nomad'
    ]

    const subtext = [
        'We specialise in mortgages for the self-employed. We offer help and advice, whatever your situation.',
        'We specialise in mortgages for the self-employed. We offer help and advice, whatever your situation.'
    ]

    const num = [
        '1',
        '2',
        '3'
    ]

    const clientName = [
        'ClientName'
    ]

    let sub = '';
    let text = '';
    let process = '';
    let no = '';
    let numb='';
    let client='';


    sub = subtext[props.subIndex];
    process = processText[props.sectionIndexText];
    no = number[props.sectionIndexNumber];
    text = title[props.SectionIndex];
    numb = numb[props.numIndex];
    client = clientName[props.clientName]
    return (
        <React.Fragment>
            <div>
                <h1 class="number"> {no}</h1>
                <h1 className="process"> {process}</h1>
              
            </div>
        
            <div className="text">
            <h1 class="text"> {text} </h1>
            </div>
            
            <div className="sub">
            <h1 class="sub"> {sub}</h1>
            </div>

            <div className="numb">
            <h1 class="numb"> {numb} </h1>
            </div>

            <div className="clientName">
            <h1 class="clientName"> {client} </h1>
            </div>
            
        </React.Fragment>
    );

}
export default Data;