import { ColumnDefinition, FieldGroupContainer, MuiTextField } from "@palmyralabs/rt-forms-mui";
import storeFactory from "../Wire/StoreFactory";


function DialogGrid(props: any) {

    const fields: ColumnDefinition[] = [
        {
            attribute: "name",
            name: "District",
            title: "District",
            searchable: true,
            sortable: true,
            type: "string"
        },
        {
            attribute: "population",
            name: "Population",
            title: "Population",
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


    return (
        <SummaryDialogGrid
            NewFormlet={Formlet} EditFormlet={Formlet}
            storeFactory={storeFactory}
            fields={fields}
            pageName={props.pageName}
            title={"Summary Dialog Grid"}
            options={{ endPoint: '/masterdata/district' }} />
    );
}

export default DialogGrid;