import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

interface Label {
    text: string
    color: string
}

interface Props {
    label: Label[]
}

class Lista extends React.Component<Props> {
    render() {
        const { label }: Props = this.props;

        const linhas = label.map((linha: Label, index: number) => {
            return(
                <div className="row" key={index}>
                    <div className={`col s1 ${linha.color}`}>{linha.text}</div>
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