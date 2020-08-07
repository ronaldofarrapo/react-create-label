import React from 'react';
import Label from './index';


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

const LabelChips = () => {
    return (
        <div className="chip">
            Tag
            <i className="close material-icons">close</i>
      </div>        
    )
}

interface ComponentProps {
    add: (label: Label) => void;
}

interface ComponentState {
    labelsCadastradas: Label[];
}

class Formulario extends React.Component<ComponentProps, ComponentState> {
    
    constructor(props: ComponentProps){
        super(props);

        this.state = {labelsCadastradas: [{text: 'Green', color: 'green lighten-3'}] };
    }

    inputListener = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
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
            </>
        )
    }
}

export default Formulario;
