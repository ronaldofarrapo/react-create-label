import React from 'react';
import { Label } from './Lista';

interface InputProps {
    escutadorDeSubmit: (label: Label) => void;
}

class Formulario extends React.Component<InputProps> {

    constructor(props: InputProps){
        super(props);

        this.state = '';
    }

    escutadorDeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }
    
    submitForm = () => {
        this.props.escutadorDeSubmit({text: 'Green', color: 'green lighten-3'});
    }

    render() {
        //capturar parametros através das propriedades
        //const { propriedades } = this.props;

        return (
            <form>
                <div className="row">
                    <input 
                        id="nome"
                        type="text"
                        name="nome"
                        onChange={this.escutadorDeInput}
                    />
                </div>

                <button onClick={this.submitForm} className="btn waves-effect waves-light" type="button" name="action">
                    Send
                </button>

            </form>
        )
    }
}

export default Formulario;
