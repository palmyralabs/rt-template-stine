import { ColumnDefinition, MuiNumberField, MuiTextField } from "@palmyralabs/rt-forms-mui";
import { IEndPoint } from "@palmyralabs/palmyra-wire";
import { SummaryPopupGrid } from "../../../src/main";
import { FieldGroupContainer } from "@palmyralabs/rt-forms";


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
                <MuiNumberField attribute="population" label="Population" />
            </FieldGroupContainer>
        </>)
    }

    const endPoint: IEndPoint = {
        get: 'district/{id}.json',
        query: 'district/SummaryData.json', put: 'district/{id}.json',
        post: 'district/new.json'
    }

    return (<div className="py-grid-container">
        <SummaryPopupGrid popup="dialog"
            NewFormlet={Formlet} EditFormlet={Formlet}
            columns={fields}
            pageName={props.pageName}
            title={"Summary Dialog Grid"}
            options={{ endPoint }} /></div>
    );
}

export default DialogGrid;