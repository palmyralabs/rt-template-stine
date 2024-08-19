
import { FC, forwardRef, MutableRefObject, useImperativeHandle, useRef, useState } from "react";
import { Close, Done } from "@mui/icons-material";
import { Button, Drawer } from '@mui/material';
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

interface IDrawerForm {
    setData: (d: any) => void
}

const SummaryDrawerForm = forwardRef((props: IDialogGridFormInput, ref: MutableRefObject<IDrawerForm>) => {
    const storeFactory = props.storeFactory;
    const title: any = props.title;
    const idKey = props.idKey || 'id';
    const drawerWidth = props.dialogWidth || '600px';

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

    const drawerOpen: boolean = data != undefined;
    const EditFormlet = props.EditFormlet;
    const NewFormlet = props.NewFormlet;

    return (<Drawer anchor="right" PaperProps={{ sx: { width: drawerWidth } }}
        open={drawerOpen} onClose={onCancel}>
        <div className='drawer-form-header-container'>
            <div>{title}</div>
            <div className='grid-dialog-header-right-container'>
                <Close onClick={doCancel} className='grid-dialog-header-close-icon' />
            </div>
        </div>
        {data?.[idKey] ?
            <EditForm setValid={setValid} storeFactory={storeFactory} formRef={formRef}
                handleKeyPress={handleKeyPress} options={props.options}
                {...props.options} id={data?.[idKey]} FORMLET={EditFormlet} />
            : <NewForm setValid={setValid} storeFactory={storeFactory} formRef={formRef}
                handleKeyPress={handleKeyPress} options={props.options}
                {...props.options} initialData={data} FORMLET={NewFormlet} />}
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
    </Drawer>);
});

export { SummaryDrawerForm };