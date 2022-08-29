import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import HtmlHead from '../../HtmlHead';
import useBaseEditController from './useBaseEditController';
import useBaseEditStyles from './useBaseEditStyles';

const BaseEditPaper = ({ children, serviceFunction, title, handleSubmit, notSubmitButton, serviceGetFunction, setValue, id }) => {
    const styles = useBaseEditStyles();
    const { onSubmit } = useBaseEditController(serviceGetFunction, serviceFunction, id, setValue);

    return (
        <Paper sx={styles.paper}>
            <HtmlHead view={title} subTitle={'Editar'}/>
            <Typography sx={styles.textTitle} variant={'h4'}>
                Editar {title}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={styles.grid}>
                    <Grid container spacing={2}>
                        {children}
                        {!notSubmitButton && <Grid item xs={12} sm={12} md={12}>
                            <Button sx={styles.finalButton}
                                color="secondary"
                                type="submit"
                                variant="contained">
                                Finalizar edição
                            </Button>
                        </Grid>}
                    </Grid>
                </Box>
            </form>
        </Paper>
    );
};
export default BaseEditPaper;