import { ColumnDefinition, FieldGroupContainer, IDataGridDefaultControlConfig, MuiTextField } from "@palmyralabs/rt-forms-mui";
import storeFactory from "../Wire/StoreFactory";
import { IEndPoint } from "@palmyralabs/palmyra-wire";
import { SummaryPopupGrid } from "../../../src/main";
import { Button } from "@mui/material";
import { PopupGridControls } from "../../../src/palmyra/template/popup/PopupGridControls";
import { PopupGridPluginOptions } from "../../../src/palmyra/template/Types";


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
                <MuiTextField attribute="name" label="District" required />
                {/* <MuiNumberField attribute="population" label="Population" /> */}
            </FieldGroupContainer>
        </>)
    }

    const endPoint: IEndPoint = {
        get: 'district/{id}.json',
        query: 'district/SummaryData.json', put: 'district/{id}.json',
        post: 'district/new.json'
    }

    const CustomControl = (props: PopupGridPluginOptions) => {
        return (<>
            <PopupGridControls {...props} />
            <Button onClick={() => { }} disableRipple className="py-action-button">Transfer</Button>
        </>);
    }

    const getPluginOptions = (): IDataGridDefaultControlConfig => {
        return { export: { visible: false } }
    }

    return (<div className="py-grid-container">
        <SummaryPopupGrid NewFormlet={Formlet} EditFormlet={Formlet}
            getPluginOptions={getPluginOptions} DataGridControls={CustomControl}
            storeFactory={storeFactory} columns={fields} quickSearch="name"
            pageName={props.pageName} title={"Summary Popup Grid"}
            options={{ endPoint }} /></div>
    );
}

export default DrawerGrid;