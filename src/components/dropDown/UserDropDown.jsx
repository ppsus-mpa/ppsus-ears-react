import React from 'react';
import { AccountCircle as AccountCircleIcon, Comment as CommentIcon, Logout as LogoutIcon } from '@mui/icons-material';
import { Badge, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import useUserDropDownController from './useUserDropDownController';
import useUserDropDownStyles from './useUserDropDownStyles';

const UserDropDown = ({ withNotification }) => {
    const styles = useUserDropDownStyles();
    const { user, anchorEl, openMenu, notificationsNumber, onClose, onClick, onClickNotUser, onClickUserName, onClickExit } = useUserDropDownController();

    if (!user) {
        const NotUserTitle = 'Entrar na plataforma';
        return (
            <Tooltip title={NotUserTitle}>
                <IconButton color="inherit" aria-label={NotUserTitle} component="span"
                    onClick={onClickNotUser}
                >
                    <AccountCircleIcon/>
                </IconButton>
            </Tooltip>
        );
    }

    const title = 'Você possui ' + notificationsNumber + ' notificações';

    return (
        <Box sx={styles.container}>
            {withNotification &&
                <Tooltip title={title} arrow>
                    <IconButton color="inherit" component="span" aria-label={title}>
                        <Badge badgeContent={notificationsNumber} color="secondary">
                            <CommentIcon/>
                        </Badge>
                    </IconButton>
                </Tooltip>
            }
            <Tooltip title={'Minha conta'} arrow>
                <IconButton color="inherit" component="span"
                    aria-label="Minha conta"
                    aria-haspopup="true"
                    aria-controls={openMenu ? 'account-menu' : undefined}
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={onClick}
                >
                    <AccountCircleIcon/>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openMenu}
                onClose={onClose}
                onClick={onClose}
                PaperProps={{ elevation: 0, sx: styles.menuPaper, }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={onClickUserName}>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    {user.name}
                </MenuItem>
                <Divider />
                <MenuItem onClick={onClickExit}>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    Sair
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default UserDropDown;
