import React from 'react';

import './App.css';
import Lista, { Label } from './label/Lista';
import Form from './label/Formulario';

class App extends React.Component {
  
  state = {
    labels: [
      {
        text: 'Red',
        color: 'red lighten-3'
      },

      {
        text: 'Pink',
        color: 'pink lighten-2'
      },

      {
        text: 'purple',
        color: 'purple lighten-2'
      },

      {
        text: 'light-blue',
        color: 'light-blue lighten-4'
      }
    ]
  }

  escutadorDeSubmit = (label: Label) => {
    console.log(label);
  }

  render() {
    return (
      <div className="container mb-10">
        <Form escutadorDeSubmit = {this.escutadorDeSubmit} />
        <Lista label={this.state.labels} />
      </div>
    );
  }
}

export default App;
