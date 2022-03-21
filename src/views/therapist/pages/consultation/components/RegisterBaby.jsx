import React, {Fragment} from "react";
import {Grid, TextField, FormGroup, Checkbox, FormControlLabel, Typography} from "@mui/material";

const styles = {
    textTitle:{
        marginTop: '40px'
    },
}

const RegisterBaby = ({register}) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h6" sx={styles.textTitle}>Informações do Bebê</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField {...register("babyName")} label="Nome do Bebê" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("babyWeight")} label="Peso" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("babyHeight")} label="Altura" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("babyCephalicPerimeter")} label="Perímetro Cefálico" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("babyBirthdate")} label="Data de nascimento" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("babyGestacionalAge")} label="Idade gestacional" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <TextField {...register("babyType")} label="Tipo de parto" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Óbito materno" size="small" />
                </FormGroup>
            </Grid>
        </Fragment>
    );
}

export default RegisterBaby;
