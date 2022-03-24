import React from 'react';
import {Box, useTheme} from "@mui/material";

const createStyle = (theme) => ({
    textBox: {
        backgroundColor: theme.palette.tertiary.main,
        padding: '45px 45px 40px 45px',

        [theme.breakpoints.up('md')]: {
            padding: '45px 20% 40px 20%',
        },
    },
    title: {
        marginBottom: '20px'
    }
});

const VideoParagraph = ({title, url}) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Box sx={styles.textBox}>
            <iframe title={title}
                    width={'100%'}
                    height={'360px'}
                    src={url}
                    frameBorder="0"
                    allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
            />
        </Box>
    );
}

export default VideoParagraph;