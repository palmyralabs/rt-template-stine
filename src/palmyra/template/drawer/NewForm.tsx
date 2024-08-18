import { FC } from "react";
import { Done, Close } from '@mui/icons-material';
import { Button } from "@mui/material";
import { IFormletInput } from "./SummaryDrawerGrid";
import { IFormNewInput } from "../Types";
import { PalmyraNewForm } from "@palmyralabs/rt-forms";
import { useSaveForm } from "../hooks/useSaveForm";

interface IDrawerNewInput extends IFormNewInput {
    FORMLET: FC<IFormletInput>,
    errorText?: any
}

function NewForm(props: IDrawerNewInput) {    
    const FORMLET = props.FORMLET;
    const initialData = props.initialData || {};
    const storeFactory = props.storeFactory;
    const { doCancel, doSaveNew, doSaveClose, handleKeyPress, setValid, isValid, formRef } = useSaveForm(props);

    return (
        <div className='drawer-form-container'>
            <div className='drawer-form-header-container'>
                <div>{props.title}</div>
                <div className='grid-dialog-header-right-container'>
                    <Close onClick={doCancel} className='grid-dialog-header-close-icon' />
                </div>
            </div>
            <form onKeyDown={handleKeyPress}>
                <PalmyraNewForm initialData={initialData} onValidChange={setValid}
                    ref={formRef} storeFactory={storeFactory} {...props.options}>
                    <FORMLET />
                </PalmyraNewForm>
                <div className="drawer-form-btn-container">
                    <Button tabIndex={-1}
                        className='cancel-filled-button'
                        onClick={doCancel}>
                        <Close className="button-icon" />
                        Cancel
                    </Button>
                    <Button disabled={!isValid}
                        className={!isValid ? 'disabled-button' : 'filled-button'}
                        onClick={doSaveNew}>
                        <Done className="button-icon" />
                        <u style={{ width: '5px' }}>S</u>ave & New
                    </Button>
                    <Button disabled={!isValid}
                        className={!isValid ? 'disabled-button' : 'filled-button'}
                        onClick={doSaveClose}>
                        <Done className="button-icon" />
                        <u style={{ width: '5px' }}>S</u>ave & Close
                    </Button>
                </div>
            </form>
        </div>
    );
}

export { NewForm };