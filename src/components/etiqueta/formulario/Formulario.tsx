import React from 'react';
import Label from '../index';

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
