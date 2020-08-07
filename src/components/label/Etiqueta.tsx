import React from 'react';
import Lista from './Lista';
import Form from './Formulario';
import Label from './index';


interface Props {
    label: Label[]
    remove: (index: number) => void
    add: (label: Label) => void
}

const Etiqueta: React.FC<Props> = (props) => {

    const { label, remove, add }: Props = props;

    return (
        <>
            <Form add = {add} />
            <Lista label = {label} remove = {remove} />
        </>
    )

}

export default Etiqueta;