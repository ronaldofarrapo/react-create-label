import React from 'react';

import Etiqueta from './components/etiqueta/etiqueta/Etiqueta';
import IEtiqueta from './components/etiqueta';

class App extends React.Component {
  
  state = {
    etiquetas: [ ]
  }

  add = (etiqueta: IEtiqueta) => {
    const { etiquetas } = this.state;

    this.setState({
      etiquetas: [...etiquetas, etiqueta]
    })

  }

  remove = (index: number) => {
    const { etiquetas } = this.state;

    this.setState({
      etiquetas: etiquetas.filter((_etiqueta, id) => {
        return index !== id;
      })
    });
  }

  render() {
    return (
      <div className="container mb-10 row">
        <div className="col s4">
          <Etiqueta label = {this.state.etiquetas} remove = {this.remove} add = {this.add} />
        </div>
      </div>
    );
  }
}

export default App;
