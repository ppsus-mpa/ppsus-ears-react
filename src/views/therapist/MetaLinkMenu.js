import React from 'react';
import { AiOutlineTool } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { FaBaby } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { TbCheckupList, TbPresentation } from 'react-icons/tb';

const data = [
    { title: 'Cadastrar',
        options: [
            {
                icon: <TbCheckupList size={27}/>,
                label: 'Triagem',
                route: '/fono/consulta/cadastro'
            },
            {
                icon: <TbPresentation size={25}/>,
                label: 'Indicador',
                route: '/fono/indicador/cadastro'
            },
            {
                icon: <BsFileEarmarkText size={25}/>,
                label: 'Observação'
            },
            {
                icon: <BsFileEarmarkText size={25}/>,
                label: 'Conduta'
            },
            {
                icon: <AiOutlineTool size={27}/>,
                label: 'Equipamento'
            },
        ]
    },
    { title: 'Consultar',
        options: [
            {
                icon: <FaBaby size={25}/>,
                label: 'Bebês'
            },
            {
                icon: <TbCheckupList size={27}/>,
                label: 'Triagens'
            },
            {
                icon: <TbPresentation size={25}/>,
                label: 'Indicadores'
            },
            {
                icon: <BsFileEarmarkText size={25}/>,
                label: 'Observações'
            },
            {
                icon: <BsFileEarmarkText size={25}/>,
                label: 'Condutas'
            },
            {
                icon: <AiOutlineTool size={27}/>,
                label: 'Equipamentos'
            },
        ]
    },
    { title: 'Outros',
        options: [
            {
                icon: <GoGraph size={25}/>,
                label: 'Gráficos',
                route: '/fono/'
            }
        ]
    }
];

export default data;