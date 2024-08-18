import { useRef, useState } from "react";
import { Button } from "@mui/material";
import { Done, Close } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { ISaveForm, PalmyraEditForm } from "@palmyralabs/rt-forms";
import { IFormEditInput } from "../Types";


function EditForm(props: IFormEditInput) {

    const navigate = useNavigate();
    const [isValid, setValid] = useState<boolean>(false);
    const formRef = useRef<ISaveForm>();
    const storeFactory = props.storeFactory;
    const id = props.id;
    const pageName = props.pageName;

    const showServerErrorToast = () => {
        toast.error("Something went wrong Please try again later.. ")
    }

    const saveFormData = () => {
        const s = formRef.current.saveData();
        s.then((_d: any) => {
            navigate('../' + pageName);
        }).catch((e) => {
            if (e.response && e.response.status === 500) {
                showServerErrorToast()
            }
        });
    }

    const onQueryData = (d: any) => {
        if (props.onDataRefresh)
            props.onDataRefresh(d);
        return d;
    };

    const handleKeyPress = (event: any) => {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            if (isValid) {
                saveFormData();
            }
        }
    };

    return (
        <div className='form-container'>
            <form onKeyDown={handleKeyPress}>
                <div className='form-header-container'>
                    <div>{props.title}</div>
                    <div className="form-header-btn-container">
                        <Button
                            className='cancel-filled-button'
                            disableRipple onClick={() => window.history.back()}>
                            <Close className="button-icon" />
                            Cancel
                        </Button>
                        <Button disabled={!isValid}
                            className={!isValid ? 'disabled-button' : 'filled-button'}
                            disableRipple onClick={saveFormData}>
                            <Done className="button-icon" />
                            <u style={{ width: '5px' }}>S</u>ave
                        </Button>
                    </div>
                </div>
                <PalmyraEditForm mode="edit" id={id} {...props.options} onQueryData={onQueryData}
                    onValidChange={setValid} ref={formRef} storeFactory={storeFactory}>
                    {props.children}
                </PalmyraEditForm>
            </form>
        </div >
    );
}

export { EditForm };