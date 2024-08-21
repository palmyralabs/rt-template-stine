
import { useParams } from "react-router-dom";
import storeFactory from "../Wire/StoreFactory";
import { ViewForm } from "../../../src/main";
import { MuiTextField } from "@palmyralabs/rt-forms-mui";


const SummaryGridViewForm = () => {
    const params: any = useParams();

    return (<>
        <ViewForm id={params.id} options={{ endPoint: '/masterdata/district' }} pageName="grid" storeFactory={storeFactory} title="View Form">
            <MuiTextField attribute="name" label="District" />
            {/* <MuiNumberField attribute="population" label="Population" /> */}
        </ViewForm>
    </>)

}

export default SummaryGridViewForm;