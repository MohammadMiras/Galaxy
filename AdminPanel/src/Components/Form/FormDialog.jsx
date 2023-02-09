import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const FormDialog = ({ open, setOpen, fildes, title }) => {

    // const Transition = React.forwardRef(function Transition(props, ref) {
    //     return <Slide direction="up" ref={ref} {...props} />;
    // });

    return <>
        <Dialog
            open={open}
            fullWidth
            // TransitionComponent={Transition}
            keepMounted
            onClose={() => setOpen(false)}
            maxWidth={"sm"}

        >
            <DialogTitle>
                {title ?? ""}

            </DialogTitle>
            <DialogContent>

                {fildes()}
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button
                    variant="outlined"
                    color="success"
                    onClick={() => setOpen(false)}
                    disabled={true}
                >
                    Save
                </Button>

            </DialogActions>
        </Dialog>
    </>

}
export default FormDialog
