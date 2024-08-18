
import { FC, useEffect, useRef, useState } from "react";
import { Button, Drawer } from '@mui/material';
import { NewForm } from "./NewForm";
import { EditForm } from "./EditForm";
import { ISummaryGridInput } from "../Types";
import { topic } from "@palmyralabs/ts-utils";
import {
    PalmyraGrid, DataGridPluginOptions, IDataGridDefaultControlConfig,
    QuickSearch, FilterButton, ExportDataButton
} from "@palmyralabs/rt-forms-mui";

interface IFormletInput {

}

interface IDrawerGridInput extends ISummaryGridInput {
    EditFormlet: FC,
    NewFormlet: FC<IFormletInput>,
    customizer?: any,
    gridRef?: any,
    errorText?: any,
    customButton?: any,
    title?: any
    width?: any
}

function SummaryDrawerGrid(props: IDrawerGridInput) {
    const storeFactory = props.storeFactory;
    const viewTopic = props.pageName + "/viewPage";
    const newTopic = props.pageName + "/newPage";
    const refreshTopic = props.pageName + "/refresh";
    const title: any = props.title;
    const idKey = props.idKey || 'id';

    const formattedTitle = (title === title.toUpperCase())
        ? capitalizeWords(title.toLowerCase())
        : title;

    function capitalizeWords(str: string): string {
        return str.replace(/\b\w/g, match => match.toUpperCase());
    }

    const [data, setData] = useState<any>(undefined);
    const drawerWidth = props.width || '600px';
    const referenceCount = useRef<number>(0);

    const EditFormlet = props.EditFormlet;
    const NewFormlet = props.NewFormlet;
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

    }, [data]);

    const onCancel = () => {
        setData(undefined)
    }

    const onComplete = () => {
        setData(undefined)
        onSave();
    }

    const onSave = () => {
        referenceCount.current += 1;
        gridRef.current.refresh();
    }

    const handleRowClick = (rowData) => {
        setData(rowData);
    }

    const handleError = (e) => {
        console.log(e);
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
        <Drawer anchor="right" PaperProps={{ sx: { width: drawerWidth } }}
            open={data != undefined} onClose={onCancel}>
            {data &&
                (data?.[idKey] ?
                    <EditForm id={data.id}
                        onCancel={onCancel} onComplete={onComplete} onSave={onSave} onFailure={handleError}
                        options={props.options} pageName={props.pageName} FORMLET={EditFormlet} storeFactory={storeFactory}
                        title={"Edit " + formattedTitle} key={(referenceCount.current + 5) + ''}>
                    </EditForm> :
                    <NewForm onCancel={onCancel} onComplete={onComplete} onSave={onSave} onFailure={handleError}
                        options={props.options} pageName={props.pageName} FORMLET={NewFormlet} storeFactory={storeFactory}
                        title={"New " + formattedTitle} errorText={props.errorText} key={(referenceCount.current + 2) + ''} >
                    </NewForm>)
            }
        </Drawer>
    </>
    );
}

export type { IFormletInput }
export { SummaryDrawerGrid };