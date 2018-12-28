import React from 'react';



import './TypicalClient.css';

const TypicalClient = (props) => {

    const client = [
        'ClientName'
    ];

    let clientName = '';

    const title = [
        'Rental Property Income',
        'Digital Nomad'
    ]
    let inText = '';

    const subText = [
        'We specialise in mortgages for the self-employed. We offer help and advice, whatever your situation.',
        'We specialise in mortgages for the self-employed. We offer help and advice, whatever your situation.'
    ]



    let bodyText = '';


    clientName = client[props.clientName];
    inText= title[props.inText];
    bodyText = subText[props.bodyText];

    return (
    <div className="typicalClient">

        <div className="title">
            <h1 className="clientName">
                {client[0]}
            </h1>
            <h2 className="subtitle">
                {title[0]}
            </h2>
        </div>
            <h1 className="typicalText">
                {subText[0]}
            </h1>
    </div>
    
    
    );
}

export default TypicalClient;