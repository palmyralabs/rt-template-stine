import { useRef } from "react";
import { ISummaryGridInput } from "../Types";
import { PalmyraGrid, DataGridDefaultControls } from "@palmyralabs/rt-forms-mui";

interface IGridInput extends ISummaryGridInput {
    customizer?: any,
    gridRef?: any,
    customButton?: any,
    title?: any,
    disableViewTopic?: any
}

function SummaryGrid(props: IGridInput) {
    const fields = props.fields;
    const gridTopic = props.pageName + props.title;  
    const gridRef: any = props.gridRef || useRef(null);

    return (
        <div className='grid-renderer-container'>
            <div className="palmyra-grid-container summary-grid">
                <PalmyraGrid columns={fields} ref={gridRef} title={props.title} topic={gridTopic}
                    DataGridControls={DataGridDefaultControls} {...props.options} />
            </div>
        </div>
    );
}
export { SummaryGrid };