import {Box, Button, Grid, Paper, Typography, useTheme} from "@mui/material";
import HtmlHead from "../../components/HtmlHead";

import React from "react";

const createStyles = (theme) => ({
    paper: {
        margin: '0px',
        padding: '30px',

        [theme.breakpoints.up('sm')]: {
            margin: '40px',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '10%',
            marginRight: '10%',
        },
    },
    grid: {
        display: 'grid',
        gap: 2,
        width: 'auto',
        [theme.breakpoints.up('xl')]: {
            width: '1200px',
        },
    },
    textTitle:{
        color: '#646464',
        marginBottom: '40px',
        fontWeight: 'bold'
    },
    finalButton: {
        marginTop: '35px',
        width: 'fit-content',
    },
});

const GenericRegisterPaper = ({children, service,title, handleSubmit}) => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const onSubmit = (data) => {
        // @TODO Criar um httpHelper
        alert(data)
        console.log(data)

    }

    return (
        <Paper sx={styles.paper}>
            <HtmlHead view={title} subTitle={'Cadastro'}/>
            <Typography style={styles.textTitle} variant={"h4"}>
                Cadastro {title}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.grid}>
                    <Grid container spacing={2}>
                        {children}
                        <Grid item xs={12} sm={12} md={12}>
                            <Button sx={styles.finalButton}
                                    color="secondary"
                                    type="submit"
                                    variant="contained">
                                Finalizar cadastro
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </Paper>
    );
}
export default GenericRegisterPaper;
