import React, { Fragment } from 'react';
import { AppBar, Box, IconButton, SwipeableDrawer, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useAuth } from '../providers/auth/Auth';
import MPAWhiteIcon from './icons/MPAWhiteIcon';
import Menu from './lists/Menu';

const TopBar = ({ baseRoute, children, linkMenu, rightElement, title }) => {
    const auth = useAuth();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <AppBar color="primary" position="static">
                <Toolbar variant="dense" sx={{ marginRight: isDesktop? '0px' : '-12px' }}>
                    {auth && auth.user && <React.Fragment>
                        <IconButton color="inherit" onClick={handleDrawerOpen} sx={{ marginRight: '10px' }}>
                            <MenuIcon/>
                        </IconButton>
                        <Box onClick={handleDrawerClose}>
                            <SwipeableDrawer anchor={'left'} open={open}  onClose={false} onOpen={false}>
                                <Menu data={linkMenu}/>
                            </SwipeableDrawer>
                        </Box>
                    </React.Fragment>}
                    <Link to={baseRoute || '/'}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: isDesktop ? 2 : 0 }}>
                            <MPAWhiteIcon size={isDesktop? '140rem' : '100rem'}/>
                        </IconButton>
                    </Link>
                    <Typography sx={{ flexGrow: 1 }} variant={isDesktop? 'h6': 'subtitle1'} color={'white'}>
                        {title || ''}
                    </Typography>
                    {rightElement}
                </Toolbar>
            </AppBar>
            <Box>
                {children}
            </Box>
        </Fragment>
    );
};

export default TopBar;
