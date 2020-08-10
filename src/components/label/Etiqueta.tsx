import React from 'react';
import Lista from './Lista';
import Label from './index';
import Filtro from './Filtro';

interface Props {
    label: Label[]
    remove: (index: number) => void
}

const Etiqueta: React.FC<Props> = (props) => {

    const { label, remove }: Props = props;

    return (
        <>
            <Filtro />
            <Lista label = {label} remove = {remove} />
        </>
    )

}

export default Etiqueta;