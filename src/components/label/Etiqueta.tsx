import React from 'react';
import Lista from './Lista';
import Form from './Formulario';
import Label from './index';


interface Props {
    label: Label[]
    escutadorDeSubmit: (label: Label) => void
}

const Etiqueta: React.FC<Props> = (props) => {

    const { label, escutadorDeSubmit }: Props = props;

    return (
        <>
            <Form escutadorDeSubmit = {escutadorDeSubmit} />
            <Lista label = {label} />
        </>
    )

}

export default Etiqueta;