import { FC, useRef, useState } from "react";
import { Done, Close } from '@mui/icons-material';
import { Button } from "@mui/material";
import { IFormletInput } from "./SummaryDrawerGrid";
import { toast } from 'react-toastify';
import { IFormNewInput } from "../Types";
import { ISaveForm, PalmyraNewForm } from "@palmyralabs/rt-forms";

interface IDrawerNewInput extends IFormNewInput {
    onSave: Function
    onClose: () => void,
    FORMLET: FC<IFormletInput>,
    errorText?: any
}

function NewForm(props: IDrawerNewInput) {
    const errorText = props.errorText;
    const onClose = props.onClose;
    const FORMLET = props.FORMLET;
    const [isValid, setValid] = useState<boolean>(false);
    const formRef = useRef<ISaveForm>();
    const initialData = props.initialData || {};
    const storeFactory = props.storeFactory;
    const action = useRef<string>('none');

    // const formListener: any = {
    //     //@ts-ignore
    //     onSaveSuccess: function (data: any): void {
    //         if (action.current == 'new') {
    //             props.onSave(true, true, {})
    //         } else
    //             props.onSave(true, false, {});
    //     },
    //     onSaveFailure: function (e: any): void {
    //         console.error('Error while saving', e);
    //     },
    //     onChange: function (): void {
    //     }
    // };
    //@ts-ignore
    const pageName = props.pageName;

    const showServerErrorToast = () => {
        toast.error("Something went wrong Please try again later.. ")
    }
    const showUniqueErrorToast = () => {
        if (errorText) {
            toast.error(errorText);
        } else {
            toast.error("Data Already Exit");
        }
    };

    const saveForm = (a: string) => {
        action.current = a;
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
        if (event.ctrlKey && event.key === 'b') {
            event.preventDefault();
            if (isValid) {
                saveForm('new');
            }
        }
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            if (isValid) {
                saveForm('close');
            }
        }
    };

    
    return (
        <div className='drawer-form-container'>
            <div className='drawer-form-header-container'>
                <div>{props.title}</div>
                <div className='grid-dialog-header-right-container'>
                    <Close onClick={onClose} className='grid-dialog-header-close-icon' />
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
                        onClick={onClose}>
                        <Close className="button-icon" />
                        Cancel
                    </Button>
                    <Button disabled={!isValid}
                        className={!isValid ? 'disabled-button' : 'filled-button'}
                        onClick={() => saveForm('new')}>
                        <Done className="button-icon" />
                        <u style={{ width: '5px' }}>S</u>ave & New
                    </Button>
                    <Button disabled={!isValid}
                        className={!isValid ? 'disabled-button' : 'filled-button'}
                        onClick={() => saveForm('close')}>
                        <Done className="button-icon" />
                        <u style={{ width: '5px' }}>S</u>ave & Close
                    </Button>
                </div>
            </form>
        </div>
    );
}

export { NewForm };