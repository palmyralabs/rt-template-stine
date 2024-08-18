import { FC, useRef, useState } from "react";
import { Done, Close } from '@mui/icons-material';
import { Button } from "@mui/material";
import { IFormletInput } from "./SummaryDrawerGrid";
import { toast } from 'react-toastify';
import { IFormEditInput } from "../Types";
import { ISaveForm, PalmyraEditForm } from "@palmyralabs/rt-forms";

interface IDrawerEditInput extends IFormEditInput {
    onSave: (d: any) => void
    onClose: () => void
    FORMLET: FC<IFormletInput>
    errorText?: any
}

function EditForm(props: IDrawerEditInput) {
    const errorText = props.errorText;
    const onClose = props.onClose
    const [isValid, setValid] = useState<boolean>(false);
    const formRef = useRef<ISaveForm>();
    const storeFactory = props.storeFactory;
    const id = props.id;

    const showServerErrorToast = () => {
        toast.error("Something went wrong Please try again later.. ")
    }

    const showUniqueErrorToast = () => {
        if (errorText) {
            toast.error(errorText);
        } else {
            toast.error("Data Already Exists");
        }
    };

    const saveFormData = () => {
        const s = formRef.current.saveData();
        s.then((_d: any) => {

        }).catch((e) => {
            if (e.response && e.response.status === 400) {
                showUniqueErrorToast()
            } else if (e.response && e.response.status === 500) {
                showServerErrorToast()
            }
        });

    }

    const handleKeyPress = (event: any) => {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            if (isValid) {
                saveFormData();
            }
        }
    };

    const FORMLET = props.FORMLET;

    return (
        <div className='drawer-form-container'>
            <div className='drawer-form-header-container'>
                <div>{props.title}</div>
                <div className='grid-dialog-header-right-container'>
                    <Close onClick={onClose} className='grid-dialog-header-close-icon' />
                </div>
            </div>
            <form onKeyDown={handleKeyPress}>
                <PalmyraEditForm onValidChange={setValid} ref={formRef} storeFactory={storeFactory}
                    {...props.options} id={id} onSaveSuccess={props.onSave}>
                    <FORMLET />
                </PalmyraEditForm>
                <div className="drawer-form-btn-container">
                    <Button
                        className='cancel-filled-button'
                        onClick={onClose} tabIndex={-1}>
                        <Close className="button-icon" />
                        Cancel
                    </Button>
                    <Button disabled={!isValid}
                        className={!isValid ? 'disabled-button' : 'filled-button'}
                        onClick={saveFormData}>
                        <Done className="button-icon" />
                        <u style={{ width: '5px' }}>S</u>ave
                    </Button>
                </div>
            </form>
        </div>
    );
}

export { EditForm };