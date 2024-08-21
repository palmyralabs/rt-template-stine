import { useRef } from "react";
import { ISummaryGridInput } from "../Types";
import { PalmyraGrid } from "@palmyralabs/rt-forms-mui";
import { SummaryGridControls } from "./SummaryGridControls";
import { useNavigate } from "react-router-dom";
import { StringFormat } from "@palmyralabs/ts-utils";

interface IGridInput extends ISummaryGridInput {
    gridRef?: any,
    grid?: 'view' | 'edit'
}

function SummaryGrid(props: IGridInput) {
    const navigate = useNavigate();
    const idKey = props.idKey || 'id';
    const gridRef: any = props.gridRef || useRef(null);

    const handleRowClick = (rowData) => {
        const data = { id: rowData[idKey] };
        const grid = props.grid || 'view'
        navigate(StringFormat(grid + '/{id}', data));
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
export { SummaryGrid };