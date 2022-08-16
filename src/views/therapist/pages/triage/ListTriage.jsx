import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseConsult from '../../../../components/bases/BaseConsult';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const headers = [
    { title: 'Passou esquerda?', name: 'leftEar' },
    { title: 'Passou direita?', name: 'rightEar' },
    { title: 'Data avaliação', name: 'evaluationDate' },
    { title: 'Tipo TAN', name: 'type' },
    { title: 'Observação', name: 'observation' },
    { title: 'Conduta', name: 'conduct' },
    { title: 'Orientação', name: 'orientation' }
];

const ListTriage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseConsult handleSubmit={handleSubmit} title={'Triagens'} serviceFunction={configuration.service.getAllTriages} headers={headers}>
            {/*<Grid item xs={12} sm={12} md={12}>*/}
            {/*    <TextField  {...register('description')} label="Descrição" variant="outlined" size="small"/>*/}
            {/*</Grid>*/}
        </BaseConsult>
    );
};
export default ListTriage;