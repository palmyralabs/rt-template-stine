import { ColumnDefinition, FieldGroupContainer, MuiTextField } from "@palmyralabs/rt-forms-mui";
import storeFactory from "../Wire/StoreFactory";
import { SummaryDrawerGrid } from "../../../src/main";
import { IEndPoint } from "@palmyralabs/palmyra-wire";


function DrawerGrid(props: any) {

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


    const Formlet = () => {

        return (<>
            <FieldGroupContainer>
                <MuiTextField attribute="name" label="District" required/>
                {/* <MuiNumberField attribute="population" label="Population" /> */}
            </FieldGroupContainer>
        </>)
    }

    const endPoint: IEndPoint = { get: 'district/{id}.json', 
        query: 'district/SummaryData.json', put: 'district/{id}.json',
        post:'district/new.json'
    }

    return (
        <SummaryDrawerGrid
            NewFormlet={Formlet} EditFormlet={Formlet}
            storeFactory={storeFactory}
            fields={fields}
            pageName={props.pageName}
            title={"Summary Drawer Grid"}
            options={{ endPoint }} />
    );
}

export default DrawerGrid;