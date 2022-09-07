import React from 'react';
import { Box, Button, Grid, Step, StepLabel, Stepper } from '@mui/material';
import { useForm } from 'react-hook-form';
import BaseRegisterPaper from '../../../../components/bases/register/BaseRegisterPaper';
import useTherapistService from '../../useTherapistService';
import RegisterBaby from './components/RegisterBaby';
import RegisterResponsible from './components/RegisterResponsible';
import RegisterResults from './components/RegisterResults';

const RegisterTriage = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const service = useTherapistService();

    const { formState: { errors }, handleSubmit, register } = useForm();

    const steps = [
        {
            element: <RegisterResponsible register={register} errors={errors}/>,
            label: 'Cadastrar Responsáveis'
        },
        {
            element: <RegisterBaby register={register} errors={errors}/>,
            label: 'Cadastrar Bebê'
        },
        {
            element: <RegisterResults register={register} errors={errors}/>,
            label: 'Registrar Resultados'
        }
    ];

    const handleOnNext = (event) => {
        event.preventDefault();
        setActiveStep(activeStep + 1);
    };

    return (
        <BaseRegisterPaper title={'Resultado da Triagem'} handleSubmit={handleSubmit} serviceFunction={service.consultationRegister} notSubmitButton={true}>
            <Grid item xs={12} sm={12} md={12}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(({ label }) => (<Step key={label}><StepLabel>{label}</StepLabel></Step>))}
                </Stepper>
            </Grid>
            {steps[activeStep].element}
            <Grid item xs={12} sm={12} md={12}>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={() => setActiveStep(activeStep - 1)}
                        sx={{ mr: 1 }}
                    >
                        Anterior
                    </Button>
                    {
                        activeStep === steps.length - 1?
                            <Button type="submit">Finalizar Cadastro</Button>
                            :
                            <Button onClick={handleOnNext}>Próximo</Button>
                    }
                </Box>
            </Grid>
        </BaseRegisterPaper>
    );
};

export default RegisterTriage;