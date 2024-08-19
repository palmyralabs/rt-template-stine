import ReactDOM from 'react-dom/client'
import { Dialog, Button, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import React, { forwardRef, MutableRefObject, useImperativeHandle, useRef, useState } from 'react';

interface IAlertDialogProps {
    title: any
    content: JSX.Element,
    hidden?: boolean,
    onClose?: () => void;
    mode?: 'normal' | 'info' | 'warning' | 'critical'
    buttonText?: string;
}

interface IDialog {
    hide: () => void,
    show: () => void
}

const AlertDialog = forwardRef(function AlertDialog(props: IAlertDialogProps, ref: MutableRefObject<IDialog>) {

    const { buttonText = 'OK' } = props;
    const [open, setOpen] = useState<boolean>(!props.hidden);
    const currentRef = ref || useRef<IDialog>();

    useImperativeHandle(currentRef, () => {
        return {
            hide: () => setOpen(false),
            show: () => setOpen(true)
        }
    }, [])

    const doClose = () => {
        props.onClose && props.onClose();
        setOpen(false);
    }

    return (
        <>
            {open &&
                <Dialog className='py-alert-dialog' open={open} onClose={doClose}
                    PaperProps={{
                        sx: {
                            borderRadius: '12px', padding: '5px', backgroundColor: 'white'
                        }
                    }}>
                    <DialogTitle className='py-alert-dialog-title'>{props.title}</DialogTitle>
                    <DialogContent className='py-alert-dialog-content'>
                        {props.content}
                    </DialogContent>
                    <DialogActions className='py-alert-dialog-action'>
                        <Button onClick={doClose} disableRipple
                            className='py-alert-dialog-button py-alert-dialog-button-ok'>
                            {buttonText}
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </>
    )
})


const showDialog = (options: Omit<IAlertDialogProps, 'hidden'>, Dialog?: React.FC) => {
    const Element = Dialog || AlertDialog;
    const root = ReactDOM.createRoot(document.getElementById('PalmyraDialogRoot')!);

    const unmount = () => {
        root.unmount();
        options.onClose && options.onClose();
    }

    root.render(
        <Element {...options} onClose={unmount}/>
    )
}

const PyDialogRoot = () => <div id='PalmyraDialogRoot'></div>

export { AlertDialog, PyDialogRoot, showDialog };