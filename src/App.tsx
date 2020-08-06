import React from 'react';

import './App.css';
import Etiqueta from './label/Etiqueta';
import Label from './label';

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
        <Etiqueta label = {this.state.labels} escutadorDeSubmit = {this.escutadorDeSubmit} />
      </div>
    );
  }
}

export default App;
