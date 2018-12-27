import React, { Component } from 'react';

import ProcessBanner from '../components/processBanner/processBanner'

import TypicalClient from '../components/typicalClients/TypicalClient'

import Steps from '../components/steps/Steps';

import Form from '../components/form/Form';


class App extends Component {
  render() {
    return (
      <div className="App">
       <ProcessBanner/>
       <TypicalClient/>
      <Steps/>
      <Form/>
      </div>
    );
  }
}

export default App;
