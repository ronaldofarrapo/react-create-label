import React from 'react';
import Lista from '../lista';
import Label from '../index';
import Filtro from '../filtro';

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