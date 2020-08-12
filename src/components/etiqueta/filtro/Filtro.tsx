import React, { Fragment } from 'react';
import {IEtiqueta} from '../IEtiqueta';

const LabelChips: React.FC<Props> = (props) => {
    const linhas = props.label.map((linha: IEtiqueta, index: number) => {
        return (
            <div className={`chip ${linha.color}`} key={index}>
                {linha.text}
            </div>
        );
    })

    return (
        <>
            {linhas}
        </>
    )
}

interface Props {
    label: IEtiqueta[]
}

class Filtro extends React.Component {

    state = {
        labelsPesquisadas: [

        ],

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

    inputListener = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { labels } = this.state;
        const { value } = event.target;

        this.setState({
            labelsPesquisadas: labels.filter(label => {
                let regex = new RegExp(value, 'g');
                return label.text.match(regex);
            })
        })
    }

    render() {
        console.log(this.props);
        return (
            <>
                <form>
                    <div className="input-field">
                        <input type="text" 
                            id="autocomplete-input" 
                            className="autocomplete"
                            name="label"
                            onChange={this.inputListener} />
                    </div>
                </form>
                <LabelChips label = {this.state.labelsPesquisadas} /> 
            </>
        );
    }
}
 
export default Filtro;
