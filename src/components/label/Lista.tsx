import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './lista.css'
import Close from '@material-ui/icons/Close'
import Label from './index'

interface Props {
    label: Label[]
}

class Lista extends React.Component<Props> {
    render() {
        const { label }: Props = this.props;

        const linhas = label.map((linha: Label, index: number) => {
            return(
                <div className={`chip ${linha.color}`} key={index}>
                    {linha.text}
                    <Close className="close" />
                </div>
            )
        });

        return (
            <div>
                {linhas}
            </div>
        )
    }

}

export default Lista;