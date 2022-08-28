import { CircularProgress, Grid, Typography } from '@mui/material';
import React from 'react';
import AsyncRequest from '../../api/AsyncRequest';
import { GraphicBar } from '../../graphics/GraphicBar';
import { GraphicDoughnut } from '../../graphics/GraphicDoughnut';
import useBaseDashboardController from './useBaseDashboardController';
import useBaseDashboardStyles from './useBaseDashboardStyles';

const RecommendedGraphic = ({ title, labels, quantities, onClickElement, isSmall }) => {
    if(isSmall) {
        return (
            <GraphicDoughnut
                title={title}
                labels={labels}
                quantities={quantities}
                onClickElement={onClickElement}
            />
        );
    }

    return (
        <GraphicBar
            title={title}
            labels={labels}
            quantities={quantities}
            onClickElement={onClickElement}
        />
    );
};

const BaseDashboard = ({ getDashboard, getReport, user }) => {
    const { isSmall, getSizes, onClickElement } = useBaseDashboardController();
    const styles = useBaseDashboardStyles();

    return (
        <Grid container sx={styles.container} >
            <Grid item xs={12}>
                <Typography component='h3' variant='h3' sx={styles.title}>
                    Olá {(user && user.name) || ''}
                </Typography>
            </Grid>
            <AsyncRequest requestFunction={getDashboard} loaderChildren={<CircularProgress />}>
                {(dashboard) => (
                    dashboard.map((value, index) => (
                        <AsyncRequest
                            key={'graphic-'+index}
                            requestFunction={() => getReport(value.type)}
                            loaderChildren={
                                <Grid item xs={12} sm={8} md={4} lg={4} xl={2} sx={styles.grid}>
                                    <CircularProgress />
                                </Grid>
                            }
                        >
                            {(data) => (
                                <Grid item {...getSizes(data.labels.length)} sx={styles.grid}>
                                    <RecommendedGraphic
                                        isSmall={isSmall(data.labels.length)}
                                        title={data.title}
                                        labels={data.labels}
                                        quantities={data.quantities}
                                        onClickElement={(e) => onClickElement(e, value.type)}
                                    />
                                </Grid>
                            )}
                        </AsyncRequest>
                    ))
                )}
            </AsyncRequest>
        </Grid>
    );
};

export default BaseDashboard;
