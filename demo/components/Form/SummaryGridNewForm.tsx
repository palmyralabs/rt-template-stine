import { MuiTextField } from "@palmyralabs/rt-forms-mui";
import { NewForm } from "../../../src/main";


const SummaryGridNewForm = () => {

    return (<>
        <NewForm options={{ endPoint: '/masterdata/district' }} pageName="" title="New Form">
            <MuiTextField attribute="name" label="District" />
            {/* <MuiNumberField attribute="population" label="Population" /> */}
        </NewForm>
    </>)

}

export default SummaryGridNewForm;