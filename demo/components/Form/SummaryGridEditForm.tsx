import { useParams } from "react-router-dom";
import storeFactory from "../Wire/StoreFactory";
import { EditForm } from "../../../src/main";
import { MuiTextField } from "@palmyralabs/rt-forms-mui";
import { IEndPoint } from "@palmyralabs/palmyra-wire";


const SummaryGridEditForm = () => {
    const params: any = useParams();

    const endPoint: IEndPoint = {
        get: 'district/{id}.json',
        query: 'district/SummaryData.json', put: 'district/{id}.json',
        post: 'district/new.json'
    }


    return (<>
        <EditForm id={params.id} options={{ endPoint: endPoint }}

            pageName="" storeFactory={storeFactory} title="Edit Form">
            <MuiTextField attribute="name" label="District" />
            {/* <MuiNumberField attribute="population" label="Population" /> */}
        </EditForm>
    </>)

}

export default SummaryGridEditForm;