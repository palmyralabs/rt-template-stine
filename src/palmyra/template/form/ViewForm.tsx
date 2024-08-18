import { BorderColor, ArrowBack } from '@mui/icons-material';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IFormViewInput } from '../Types';
import { PalmyraViewForm } from '@palmyralabs/rt-forms';


function ViewForm(props: IFormViewInput) {
    const storeFactory = props.storeFactory;
    const id = props.id;
    const pageName = props.pageName;
    const navigate = useNavigate();

    const goToEditForm = () => {
        return navigate('../' + pageName + '/edit/' + props.id);
    }

    const goToGrid = () => {
        return navigate('../' + pageName);
    }

    return (
        <div className='form-container'>
            <div className='form-header-container'>
                <div>{props.title}</div>
                <div className="form-header-btn-container">
                    <Button onClick={goToGrid}
                        className='filled-button'
                        disableRipple >
                        <ArrowBack className='button-icon' />
                        Back
                    </Button>
                    <Button
                        className='filled-button'
                        disableRipple onClick={goToEditForm}>
                        <BorderColor className='button-icon' />
                        Edit
                    </Button>
                </div>
            </div>
            <PalmyraViewForm id={id} {...props.options} storeFactory={storeFactory}>
                {props.children}
            </PalmyraViewForm>
        </div>
    );
}

export { ViewForm };