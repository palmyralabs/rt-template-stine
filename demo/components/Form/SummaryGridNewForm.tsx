import { MuiTextField } from "@palmyralabs/rt-forms-mui";
import { NewForm } from "../../../src/main";
import storeFactory from "../Wire/StoreFactory";


const SummaryGridNewForm = () => {

    return (<>
        <NewForm options={{ endPoint: '/masterdata/district' }} pageName="" storeFactory={storeFactory} title="New Form">
            <MuiTextField attribute="name" label="District" />
            {/* <MuiNumberField attribute="population" label="Population" /> */}
        </NewForm>
    </>)

}

export default SummaryGridNewForm;