import React from 'react';
import IEtiqueta from '../index';

const TableColors = (props: TableProps) => {

    let colors = [
        {nome: 'Vermelho', classe: 'e3f2fd blue lighten-5'},
        {nome: 'Azul', classe: 'bbdefb blue lighten-4'},
        {nome: 'Verde', classe: '90caf9 blue lighten-3'},
        {nome: 'Amarelo', classe: '64b5f6 blue lighten-2'},
        {nome: 'Cinza', classe: '42a5f5 blue lighten-1'},
        {nome: 'Limão', classe: '2196f3 blue'},
        {nome: 'Marrom', classe: '1e88e5 blue darken-1'},
        {nome: 'Laranja', classe: '1976d2 blue darken-2'},
    ]

    const linhas = colors.map((linha, index) => {
        return (
            <tr key={index}>
                <td className={linha.classe} onClick={() => {props.colorListener(linha.classe)}} >{linha.nome}</td>
            </tr>  
        )
    })

    return (
        <div className="row">
            <table className="centered highlight">
                <tbody>
                    {linhas}
                </tbody>       
            </table>
        </div>
    )
}

interface TableProps {
    colorListener: (classe: string) => void
}

interface ComponentProps {
    add: (etiqueta: IEtiqueta) => void;
}

interface ComponentState {
    labelsCadastradas: IEtiqueta[];
    etiqueta: IEtiqueta;
}

class Formulario extends React.Component<ComponentProps, ComponentState> {
    
    constructor(props: ComponentProps){
        super(props);

        this.state = {labelsCadastradas: [{text: '', color: ''}], etiqueta: {text: '', color: ''} };

        this.colorListener = this.colorListener.bind(this);
    }

    inputListener = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        const { labelsCadastradas, etiqueta } = this.state;

        etiqueta.text = value;

        this.setState({
            labelsCadastradas: [...labelsCadastradas, etiqueta],
            etiqueta : etiqueta
        })
    }

    colorListener = (classe: string) => {
        console.log(classe);

        const { labelsCadastradas, etiqueta } = this.state;

        etiqueta.color = classe;

        this.setState({
            labelsCadastradas: [...labelsCadastradas, etiqueta],
            etiqueta : etiqueta
        })        
    }    

    add = () => {
        this.props.add(this.state.etiqueta);
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
                    <TableColors colorListener = {this.colorListener} />
                    <a className="minhaclasse waves-effect waves-light btn-small" onClick={() => {this.add()}}>Add</a>
                </form>
            </>
        )
    }
}

export default Formulario;
