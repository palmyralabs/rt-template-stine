import { FC } from "react";
import { Done, Close } from '@mui/icons-material';
import { Button } from "@mui/material";
import { IFormletInput } from "./SummaryDrawerGrid";
import { IFormEditInput } from "../Types";
import { PalmyraEditForm } from "@palmyralabs/rt-forms";
import { useSaveForm } from "../hooks/useSaveForm";

interface IDrawerEditInput extends IFormEditInput {
    FORMLET: FC<IFormletInput>
    errorText?: any
}


function EditForm(props: IDrawerEditInput) {
    const storeFactory = props.storeFactory;
    const id = props.id;
    const { doCancel, doSaveClose, handleKeyPress, setValid, isValid, formRef } = useSaveForm(props);

    const FORMLET = props.FORMLET;

    return (
        <div className='drawer-form-container'>
            <div className='drawer-form-header-container'>
                <div>{props.title}</div>
                <div className='grid-dialog-header-right-container'>
                    <Close onClick={doCancel} className='grid-dialog-header-close-icon' />
                </div>
            </div>
            <form onKeyDown={handleKeyPress}>
                <PalmyraEditForm onValidChange={setValid} ref={formRef} storeFactory={storeFactory}
                    {...props.options} id={id}>
                    <FORMLET />
                </PalmyraEditForm>
                <div className="drawer-form-btn-container">
                    <Button
                        className='cancel-filled-button'
                        onClick={doCancel} tabIndex={-1}>
                        <Close className="button-icon" />
                        Cancel
                    </Button>
                    <Button disabled={!isValid}
                        className={!isValid ? 'disabled-button' : 'filled-button'}
                        onClick={doSaveClose}>
                        <Done className="button-icon" />
                        <u style={{ width: '5px' }}>S</u>ave
                    </Button>
                </div>
            </form>
        </div>
    );
}

export { EditForm };