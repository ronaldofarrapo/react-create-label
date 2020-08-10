import React, { Fragment } from 'react';
import {Label} from './Label';
import Close from '@material-ui/icons/Close'

const LabelChips: React.FC<Props> = (props) => {
    const linhas = props.label.map((linha: Label, index: number) => {
        return (
            <div className={`chip ${linha.color}`} key={index}>
                {linha.text}
                <Close className="close" />
            </div>
        );
    })

    return (
        <>
            {linhas}
        </>
    )
}

const TableColors = () => {
    return (
        <div className="row">
            <table className="centered highlight">
                <tbody>
                    <tr>
                        <td className="light-blue lighten-5"></td>
                        <td className="light-blue lighten-4"></td>
                        <td className="light-blue lighten-3"></td>
                        <td className="light-blue lighten-2"></td>
                        <td className="light-blue lighten-1"></td>
                        <td className="light-blue"></td>
                        <td className="light-blue darken-1"></td>
                    </tr>
                    <tr>
                        <td className="cyan lighten-5"></td>
                        <td className="cyan lighten-4"></td>
                        <td className="cyan lighten-3"></td>
                        <td className="cyan lighten-2"></td>
                        <td className="cyan lighten-1"></td>
                        <td className="cyan"></td>
                        <td className="cyan darken-1"></td>
                    </tr>  
                </tbody>       
            </table>
        </div>
    )
}

interface Props {
    label: Label[]
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
