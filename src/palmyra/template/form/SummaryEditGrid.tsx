import { useRef } from "react";
import { PalmyraGrid } from "@palmyralabs/rt-forms-mui";
import { useNavigate } from "react-router";
import { StringFormat } from "@palmyralabs/ts-utils";
import { ISummaryGridInput } from "../Types";
import { SummaryGridControls } from "./SummaryGridControls";

interface IGridInput extends ISummaryGridInput {
    gridRef?: any,
}

function SummaryEditGrid(props: IGridInput) {
    const navigate = useNavigate();
    const idKey = props.idKey || 'id';
    const gridRef: any = props.gridRef || useRef(null);

    const handleRowClick = (rowData) => {
        const data = { id: rowData[idKey] };
        navigate(StringFormat('edit/{id}', data));
    }

    const newRecord = () => {
        navigate('new');
    }

    return (
        <div className='grid-renderer-container'>
            <div className="palmyra-grid-container summary-grid">
                <PalmyraGrid title={props.title} columns={props.columns}
                    DataGridControls={SummaryGridControls} DataGridControlProps={{ newRecord }}
                    onRowClick={handleRowClick} pageSize={props.pageSize} {...props.options}
                    ref={gridRef} customizer={props.customizer} quickSearch={props.quickSearch} />
            </div>
        </div>
    );
}
export { SummaryEditGrid };