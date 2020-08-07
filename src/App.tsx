import React from 'react';

import Etiqueta from './components/label/Etiqueta';

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

  remover = (index: number) => {
    const { labels } = this.state;

    this.setState({
      labels: labels.filter((label, id) => {
        return index !== id;
      })
    });
  }

  render() {
    return (
      <div className="container mb-10">
        <Etiqueta label = {this.state.labels} remover = {this.remover} />
      </div>
    );
  }
}

export default App;
