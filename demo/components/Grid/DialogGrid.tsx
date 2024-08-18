import { ColumnDefinition, FieldGroupContainer, MuiTextField } from "@palmyralabs/rt-forms-mui";
import storeFactory from "../Wire/StoreFactory";
import { SummaryDialogGrid } from "../../../src/palmyra/template/dialog/SummaryDialogGrid";
import { IEndPoint } from "@palmyralabs/palmyra-wire";


function DialogGrid(props: any) {

    const fields: ColumnDefinition[] = [
        {
            attribute: "name",
            name: "District",
            label: "District",
            searchable: true,
            sortable: true,
            type: "string"
        },
        {
            attribute: "population",
            name: "Population",
            label: "Population",
            searchable: true,
            sortable: true,
            type: "number"
        }
    ];

    const Formlet = () => {

        return (<>
            <FieldGroupContainer>
                <MuiTextField attribute="name" label="District" />
                {/* <MuiNumberField attribute="population" label="Population" /> */}
            </FieldGroupContainer>
        </>)
    }

    const endPoint: IEndPoint = { get: 'district/{id}.json', 
        query: 'district/SummaryData.json', put: 'district/{id}.json',
        post:'district/new.json'
    }

    return (
        <SummaryDialogGrid
            NewFormlet={Formlet} EditFormlet={Formlet}
            storeFactory={storeFactory}
            fields={fields}
            pageName={props.pageName}
            title={"Summary Dialog Grid"}
            options={{ endPoint }} />
    );
}

export default DialogGrid;