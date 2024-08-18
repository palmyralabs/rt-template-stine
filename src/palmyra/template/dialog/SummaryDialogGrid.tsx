
import { FC, useEffect, useRef } from "react";
import { Button } from '@mui/material';
import { ISummaryGridInput } from "../Types";
import { topic } from "@palmyralabs/ts-utils";
import {
    PalmyraGrid, DataGridPluginOptions, IDataGridDefaultControlConfig,
    QuickSearch, FilterButton, ExportDataButton
} from "@palmyralabs/rt-forms-mui";
import { IDialogForm, SummaryDialogForm } from "./SummaryDialogForm";

interface IDialogGridInput extends ISummaryGridInput {
    EditFormlet: FC,
    NewFormlet: FC,
    customizer?: any,
    gridRef?: any,
    errorText?: any,
    customButton?: any,
    title?: any
    width?: any
    dialogHeight?: string,
    dialogMinWidth?: string
}


function SummaryDialogGrid(props: IDialogGridInput) {
    const viewTopic = props.pageName + "/viewPage";
    const newTopic = props.pageName + "/newPage";
    const refreshTopic = props.pageName + "/refresh";
    const title: any = props.title;

    const dialogFormRef: any = useRef<IDialogForm>();
    const gridRef: any = props.gridRef || useRef(null);

    useEffect(() => {
        var viewPageHandle = topic.subscribe(viewTopic, (_topicName, data) => {
            setData(data);
        });

        var refreshHandle = topic.subscribe(refreshTopic, (_topicName) => {
            if (gridRef.current)
                gridRef.current.refresh();
        });

        var newPageHandle = topic.subscribe(newTopic, (_topicName, data) => {
            setData(data);
        });
        return () => {
            topic.unsubscribe(viewPageHandle);
            topic.unsubscribe(newPageHandle);
            topic.unsubscribe(refreshHandle);
        }

    }, []);

    const handleRowClick = (rowData) => {
        setData(rowData);
    }

    const setData = (d: any) => {
        if (dialogFormRef.current)
            dialogFormRef.current.setData(d);
    }

    const DataGridControls = (props: DataGridPluginOptions) => {
        const { getPluginOptions, ...o } = props;
        const pluginOptions: IDataGridDefaultControlConfig = getPluginOptions ? getPluginOptions() : {};

        return (<>
            {o.quickSearch && <QuickSearch width="200" queryRef={o.queryRef}
                columns={o.columns} {...pluginOptions.quickSearch} />}
            <FilterButton {...o} />
            <Button onClick={() => setData({})} {...pluginOptions.add}>Add</Button>
            <ExportDataButton exportOption={{ csv: 'CSV' }}
                visible={pluginOptions.export?.visible} disabled={pluginOptions.export?.disabled}
                queryRef={o.queryRef} {...pluginOptions.export} />
        </>);
    }

    return (<>
        <div className='grid-renderer-container'>
            {/* <div className="grid-renderer-header">{props?.title}</div> */}
            <div className="palmyra-grid-container summary-drawer-grid">
                <PalmyraGrid title={title} columns={props.fields} endPoint={props.options.endPoint}
                    DataGridControls={DataGridControls} onRowClick={handleRowClick}
                    ref={gridRef} customizer={props.customizer} />
            </div>
        </div>
        <SummaryDialogForm  {...props} gridRef={gridRef} ref={dialogFormRef}/>
    </>
    );
}

export { SummaryDialogGrid };