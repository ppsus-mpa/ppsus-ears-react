import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import BaseRegisterPaper from '../../../../components/bases/BaseRegisterPaper';
import BrazilianPhoneField from '../../../../components/fileds/BrazilianPhoneField';
import PasswordField from '../../../../components/fileds/PasswordField';
import SelectField from '../../../../components/fileds/SelectField';
import SelectFieldAsync from '../../../../components/fileds/SelectFieldAsync';
import { useViewConfiguration } from '../../../../providers/viewConfiguration/ViewConfiguration';

const RegisterTherapist = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            institutions: [],
        }
    });
    const configuration = useViewConfiguration();

    return (
        <BaseRegisterPaper handleSubmit={handleSubmit} title={'Fonoaudiólogo'} serviceFunction={configuration.service.register}>
            <Grid item xs={12} sm={12} md={12}>
                <TextField  {...register('login')} label={'Login'} variant="outlined" size="small"
                    helperText={<p>Nome que será usado para acessar a plataforma junto a senha</p>} required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <PasswordField register={register}/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('passwordConfirm')} label="Confirmação de senha" type="password" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('name')} label="Nome completo" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('crfa')} label="CRFa" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <SelectFieldAsync register={{ ...register('xp') }} title={'Tempo de experiência'} getValue={configuration.service.getXpTypes}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant={'h6'}>
                    Contato
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField  {...register('preferentialEmail')} label="E-mail preferencial" variant="outlined" size="small" required/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField   {...register('alternativeEmail')} label="E-mail alternativo" variant="outlined" size="small"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField  register={register} name="phonePrimary" formErrors={errors}
                    label="Telefone principal" variant="outlined" size="small" required
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <BrazilianPhoneField  register={register} name="phoneSecond" formErrors={errors}
                    label="Telefone alternativo" variant="outlined" size="small"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <SelectField title={'Instituições'} register={{ ...register('institutions', { value: [] }) }} multiple
                    values={[{ id: 1, name: 'teste' }, { id: 2, name:'teste1' }, { id: 3, name:'teste2' }, { id: 4, name:'teste3' }]}
                />
            </Grid>
        </BaseRegisterPaper>
    );
};
export default RegisterTherapist;
