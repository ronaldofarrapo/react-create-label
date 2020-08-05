import React from 'react';
import Lista from './Lista';

interface Label {
    text: string
    color: string
}

interface Props {
    label: Label[]
}

const Etiqueta: React.FC<Props> = (props) => {

    const { label }: Props = props;

    return (
        <Lista label = {label} />
    )

}

export default Etiqueta;