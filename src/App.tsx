import React from 'react';

import Etiqueta from './components/etiqueta/etiqueta/Etiqueta';
import Label from './components/etiqueta';

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

  add = (label: Label) => {
    const { labels } = this.state;

    this.setState({
      labels: [...labels, label]
    })

  }

  remove = (index: number) => {
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
        <Etiqueta label = {this.state.labels} remove = {this.remove} />
      </div>
    );
  }
}

export default App;
