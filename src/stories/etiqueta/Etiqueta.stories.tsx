import React from 'react';

import {Story, Meta} from '@storybook/react/types-6-0'
import Etiqueta from '../../components/etiqueta/etiqueta';
import { EtiquetaProps } from '../../components/etiqueta/etiqueta/Etiqueta'

export default {
    title: 'Example/Etiqueta',
    component: Etiqueta,
} as Meta;

const Template: Story<EtiquetaProps> = (args) => <Etiqueta {...args} />;

export const Editando = Template.bind({});

Editando.args = {
    label: [{text: 'Vermelho', color: 'e3f2fd blue lighten-5'}]
}

