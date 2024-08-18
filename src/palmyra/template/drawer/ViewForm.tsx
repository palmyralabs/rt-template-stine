import { BorderColor, ArrowBack } from '@mui/icons-material';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IFormViewInput } from '../Types';
import { PalmyraViewForm } from '@palmyralabs/rt-forms';

function ViewForm(props: IFormViewInput) {
    const storeFactory = props.storeFactory;

    const pageName = props.pageName;
    const navigate = useNavigate();

    const goToEditForm = () => {
        return navigate('../' + pageName + '/edit/' + props.id);
    }

    return (
        <div className='drawer-form-container'>
            <div className='drawer-form-header-container'>
                <div>{props.title}</div>
            </div>
            <PalmyraViewForm id={props.id} {...props.options} storeFactory={storeFactory}>
                {props.children}
            </PalmyraViewForm>
            <div className="drawer-form-btn-container">
                <Button onClick={() => window.history.back()}
                    className='filled-button'
                    disableRipple >
                    <ArrowBack className='button-icon' />
                    Back
                </Button>
                <Button
                    className='filled-button'
                    disableRipple onClick={goToEditForm}>
                    <BorderColor className='outlined-button-icon' />
                    Edit
                </Button>
            </div>
        </div>
    );
}
export { ViewForm };