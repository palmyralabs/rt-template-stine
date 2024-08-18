import { ColumnDefinition } from "@palmyralabs/rt-forms-mui";
import storeFactory from "../Wire/StoreFactory";


function EditGrid(props: any) {

    const fields: ColumnDefinition[] = [
        {
            attribute: "name",
            name: "District",
            label: "District",
            searchable: true,
            sortable: true,
            type: "string"
        },
        // {
        //     attribute: "population",
        //     name: "Population",
        //     title: "Population",
        //     searchable: true,
        //     sortable: true,
        //     type: "number"
        // }
    ];

    return (
        <SummaryEditGrid
            storeFactory={storeFactory}
            fields={fields}
            pageName={props.pageName}
            title={"Summary Edit Grid"}
            options={{ endPoint: '/masterdata/district' }} />
    );
}

export default EditGrid;