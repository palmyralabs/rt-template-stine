
import { FC, forwardRef, MutableRefObject, useImperativeHandle, useRef, useState } from "react";
import { Close, Done } from "@mui/icons-material";
import { Button, Dialog } from '@mui/material';
import { useSaveForm } from "../hooks/useSaveForm";
import { EditForm } from "./EditForm";
import { NewForm } from "./NewForm";
import { StoreFactory } from "@palmyralabs/palmyra-wire";
import { IOptions } from "../Types";

interface IDialogGridFormInput {
    options: IOptions,
    EditFormlet: FC,
    NewFormlet: FC,
    gridRef: any,
    title?: any,
    idKey?: string,
    storeFactory: StoreFactory<any>
    dialogHeight?: string,
    dialogWidth?: string,
    dialogMinWidth?: string
}

interface IDialogForm {
    setData: (d: any) => void
}

const SummaryDialogForm = forwardRef((props: IDialogGridFormInput, ref: MutableRefObject<IDialogForm>) => {
    const storeFactory = props.storeFactory;
    const title: any = props.title;
    const idKey = props.idKey || 'id';
    const height = props.dialogHeight || 'auto';
    const width = props.dialogWidth || 'auto';
    const minWidth = props.dialogMinWidth || '600px';

    const [data, setData] = useState<any>(undefined);
    const referenceCount = useRef<number>(0);

    const gridRef: any = props.gridRef;
    const currentRef = ref || useRef();

    useImperativeHandle(currentRef, () => {
        return { setData }
    }, [gridRef])

    const onCancel = () => {
        setData(undefined)
    }

    const onComplete = () => {
        setData(undefined)
        onSave();
    }

    const onSave = () => {
        referenceCount.current += 1;
        gridRef.current.refresh();
    }

    const handleError = (e) => {
        console.log(e);
    }

    const { doCancel, doSaveClose, handleKeyPress,
        setValid, isValid, formRef } = useSaveForm({ onCancel, onComplete, onFailure: handleError, onSave });

    const dialogOpen: boolean = data != undefined;
    const EditFormlet = props.EditFormlet;
    const NewFormlet = props.NewFormlet;

    return (<>
        {dialogOpen &&
            <Dialog open={dialogOpen} onClose={doCancel} onKeyDown={handleKeyPress}
                PaperProps={{
                    sx: {
                        width: width, minWidth: minWidth, height: height, borderRadius: '15px', padding: '20px 15px', maxWidth: width
                    }
                }}
            >
                <div className='py-form-header-container'>
                    <div>{title}</div>
                    <div className='py-dialog-header-right-container'>
                        <Close onClick={doCancel} className='py-header-close-icon' />
                    </div>
                </div>
                {data?.[idKey] ?
                    <EditForm setValid={setValid} storeFactory={storeFactory} formRef={formRef}
                        handleKeyPress={handleKeyPress} options={props.options}
                        {...props.options} id={data?.[idKey]} FORMLET={EditFormlet} />
                    : <NewForm setValid={setValid} storeFactory={storeFactory} formRef={formRef}
                        handleKeyPress={handleKeyPress} options={props.options}
                        {...props.options} initialData={data} FORMLET={NewFormlet} />}
                <div className="py-drawer-form-btn-container">
                    <Button
                        className='py-cancel-filled-button'
                        onClick={doCancel} tabIndex={-1}>
                        <Close className="py-button-icon" />
                        Cancel
                    </Button>
                    <Button disabled={!isValid}
                        className={!isValid ? 'py-disabled-button' : 'py-filled-button'}
                        onClick={doSaveClose}>
                        <Done className="py-button-icon" />
                        <u style={{ width: '5px' }}>S</u>ave
                    </Button>
                </div>
            </Dialog>}
    </>
    );
});

export { SummaryDialogForm };
export type { IDialogGridFormInput, IDialogForm }