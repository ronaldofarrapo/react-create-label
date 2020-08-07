import React from 'react';
import Lista from './Lista';
import Form from './Formulario';
import Label from './index';


interface Props {
    label: Label[]
    remove: (index: number) => void
}

const Etiqueta: React.FC<Props> = (props) => {

    const { label, remove }: Props = props;

    return (
        <>
            <Form />
            <Lista label = {label} remove = {remove} />
        </>
    )

}

export default Etiqueta;