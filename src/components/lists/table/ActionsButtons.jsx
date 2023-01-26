import React from 'react';
import { BsDownload } from 'react-icons/all';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TableCell, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useGenericTableStyles from './useGenericTableStyles';

const ActionsButtons = ({ actions, row }) => {
    const styles = useGenericTableStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <TableCell sx={styles.tableCell} >
            {actions.edit &&
                <IconButton color={'secondary'}>
                    <EditIcon />
                </IconButton>
            }

            {actions.delete &&
                <IconButton color={'secondary'}>
                    <DeleteIcon />
                </IconButton>
            }

            {actions.pdf &&
                <React.Fragment>
                    <IconButton color={'secondary'} onClick={handleOpen}>
                        <BsDownload />
                    </IconButton>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                            Escolha o relatorio para baixar
                        </DialogTitle>
                        <DialogContent dividers>
                            {actions.pdf.options && actions.pdf.options.map((option, key) => (
                                // <Link href={option.href} sx={{ display: 'flex' }} color={'secondary'} key={key}>
                                <div key={key} style={{ display: 'flex' }}>
                                    <Typography gutterBottom sx={{ marginRight: 2 }} color={'secondary'}>
                                        Relatório {option.name}
                                    </Typography>
                                    <BsDownload size={20} color={'secondary'}/>
                                </div>

                                // </Link>
                            ))}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancelar
                            </Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>

            }
        </TableCell>

    );
};
export default ActionsButtons;