import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseRegisterPaper from '../../../../components/bases/BaseRegisterPaper';
import RadioField from '../../../../components/fileds/RadioField';
import SelectFieldAsync from '../../../../components/fileds/SelectFieldAsync';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const RegisterConduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return(
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Conduta'} serviceFunction={configuration.service.register}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('title')} label="Título" variant="outlined" size="small" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('resultType')} label="Tipo resultado" variant="outlined" size="small" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('accompanyType')} label="Tipo acompanhamento" variant="outlined" size="small" required />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('description')} label="Descrição" variant="outlined" size="small" multiline rows={4} required />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <SelectFieldAsync register={register('type')} title={'Tipo de teste'} getValue={configuration.service.getTriageTypes}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RadioField register={register('leftEar')} title={'Orelha Esquerda'} values={[{ id: true, name: 'Passou' },{ id: false, name: 'Falhou' }]} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <RadioField register={register('rightEar')} title={'Orelha Direita'} values={[{ id: true, name: 'Passou' },{ id: false, name: 'Falhou' }]} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <RadioField register={register('irda')} title={'IRDA'} values={[{ id: true, name: 'Possui' },{ id: false, name: 'Não Possui' }]} />
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterConduct;
