import React from 'react';
import Lista from '../lista';
import IEtiqueta from '../index';
import Filtro from '../filtro';
import Formulario from '../formulario';

export interface EtiquetaProps {
    label: IEtiqueta[]
    remove: (index: number) => void
    add: (etiqueta: IEtiqueta) => void
}

const Etiqueta: React.FC<EtiquetaProps> = (props) => {

    const { label, remove, add }: EtiquetaProps = props;

    return (
        <>
            <Filtro />
            <Formulario add = {add} />
            <Lista label = {label} remove = {remove} />
        </>
    )

}

export default Etiqueta;
