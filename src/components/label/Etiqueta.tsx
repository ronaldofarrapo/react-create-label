import React from 'react';
import Lista from './Lista';
import Form from './Formulario';
import Label from './index';


interface Props {
    label: Label[]
    remover: (index: number) => void
}

const Etiqueta: React.FC<Props> = (props) => {

    const { label, remover }: Props = props;

    return (
        <>
            <Form />
            <Lista label = {label} remover = {remover} />
        </>
    )

}

export default Etiqueta;