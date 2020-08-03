import React from 'react';

import './App.css';
import Lista from './label/Lista';

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

  render() {
    return (
      <div className="App">
        <Lista label={this.state.labels} />
      </div>
    );
  }
}

export default App;
