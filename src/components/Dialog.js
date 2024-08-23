import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default ({ title, isOpen, onClose, render }) => {
    const [onSave, setOnSave] = React.useState({ callback: () => { console.log('initial onSave'); } })

    const handleSave = () => {
        onSave.callback()
    }

    const handleOnSave = (callback) => {
        setOnSave({ callback: () => callback() })
    }

    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    {render({ handleOnSave })}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => onClose()}>close</Button>
                    <Button onClick={() => handleSave()} autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
