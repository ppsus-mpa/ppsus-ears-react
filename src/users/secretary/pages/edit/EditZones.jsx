import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography, useTheme } from '@mui/material';
import DraggableManyLists from '../../../../components/lists/dragableList/DraggableManyLists';
import useSecretaryService from '../../useSecretaryService';

const createStyles = (theme) => ({
    container: {
        padding: '25px 35px',
        width: 'auto',
    },
    saveButton: {
        [theme.breakpoints.up('sm')]: {
            width: '350px',
        },
        color: 'white',
        fontSize: '1rem',
        fontWeight: '600',
        letterSpacing: '0.00938e',
        textTransform: 'none',
        width: '100%'
    },
});

const EditZones = () => {
    const service = useSecretaryService();
    const theme = useTheme();
    const styles = createStyles(theme);

    const [zones, setZones] = useState(null);

    const onDropCity = ({ destination, sourceValueIndex, subValueIds }) => {
        const sourceZoneCities = zones[sourceValueIndex].values;

        const cities = [];
        subValueIds.forEach((cityId) => {
            const index = sourceZoneCities.findIndex((city) => city.id === cityId);
            const removed = sourceZoneCities.splice(index, 1)[0];
            cities.push(removed);
        });

        zones[destination.valueIndex].values.splice(destination.subValueIndex, 0, ...cities);

        setZones([...zones]);
    };

    const onNewZone = () => {

    };

    const onEditZone = () => {

    };

    const onDeleteZone = (index) => {
        // const cities = zones[index].values;
        //
        // zones[zones.length - 1].values.push(...cities);
        //
        // zones.splice(index, 1);
        //
        // setZones([...zones]);
    };

    useEffect(() => {
        service.getAllZonesWithCities().then(r => r.body).then((setZones));
    }, []);

    return (
        <Grid container spacing={2} sx={styles.container}>
            <Grid item xs={12}>
                <Typography variant='h4'>
                    Gerenciar regiões
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ display: 'grid' }}>
                    <Typography variant='p'>
                        Arraste as cidades para modificar a sua região
                    </Typography>
                    <Typography variant='p'>
                        Clique no lapis no titulo da região para edita-la
                    </Typography>
                    <Typography variant='p'>
                        Clique na lixeira no titulo da região para exclui-la
                    </Typography>
                    <Typography variant='p'>
                        Clique no botão adicionar região para criar uma nova região
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant='contained' color='secondary'
                    sx={styles.saveButton} onClick={onNewZone}>
                    Adicionar uma nova região
                </Button>
            </Grid>
            <Grid item xs={12}>
                {!zones? <CircularProgress/> : <DraggableManyLists values={zones} onDropSubValue={onDropCity} onDeleteValue={onDeleteZone} onEditValue={onEditZone}/>}
            </Grid>
        </Grid>
    );
};

export default EditZones;