import { ColumnDefinition } from "@palmyralabs/rt-forms-mui";
import storeFactory from "../Wire/StoreFactory";
import { IEndPoint } from "@palmyralabs/palmyra-wire";
import { SummaryEditGrid } from "../../../src/main";


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

    const endPoint: IEndPoint = {
        get: 'district/{id}.json',
        query: 'district/SummaryData.json', put: 'district/{id}.json',
        post: 'district/new.json'
    }

    return (
        <SummaryEditGrid
            storeFactory={storeFactory}
            columns={fields}
            pageName={props.pageName}
            title={"Summary Edit Grid"}
            options={{ endPoint }} />
    );
}

export default EditGrid;