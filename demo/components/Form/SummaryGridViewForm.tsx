
import { useParams } from "react-router-dom";
import { ViewForm } from "../../../src/main";
import { MuiTextField } from "@palmyralabs/rt-forms-mui";
import { IEndPoint } from "@palmyralabs/palmyra-wire";


const SummaryGridViewForm = () => {
    const params: any = useParams();
    const endPoint: IEndPoint = {
        get: 'district/{id}.json',
        query: 'district/SummaryData.json', put: 'district/{id}.json',
        post: 'district/new.json'
    }

    return (<>
        <ViewForm id={params.id} options={{ endPoint: endPoint }} pageName="grid"  title="View Form">
            <MuiTextField attribute="name" label="District" />
            {/* <MuiNumberField attribute="population" label="Population" /> */}
        </ViewForm>
    </>)

}

export default SummaryGridViewForm;