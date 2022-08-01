import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseEditPaper from '../../../../components/bases/BaseEditPaper';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const EditSecretary = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const configuration = useViewConfiguration();

    return (
        <BaseEditPaper handleSubmit={handleSubmit} title={'Secretaria'} serviceFunction={configuration.service.register}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('nameOfSecretary')} label="Nome secretaria" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('password')} label="Senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('passwordConfirm')} label="Confirmação de senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('preferentialEmail')} label="E-mail preferencial" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField   {...register('alternativeEmail')} label="E-mail alternativo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography  variant={'h6'}>
                    Endereço
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('state')} label="Estado" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('city')} label="Cidade" variant="outlined" size="small" required/>
            </Grid>
        </BaseEditPaper>
    );
};
export default EditSecretary;