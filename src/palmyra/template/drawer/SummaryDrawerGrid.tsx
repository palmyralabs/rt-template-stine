
import { FC, useEffect, useRef, useState } from "react";
import { Drawer } from '@mui/material';
import { NewForm } from "./NewForm";
import { EditForm } from "./EditForm";
import { ISummaryGridInput } from "../Types";
import { topic } from "@palmyralabs/ts-utils";
import { PalmyraGrid, DataGridDefaultControls } from "@palmyralabs/rt-forms-mui";

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
    const formattedTitle = (title === title.toUpperCase())
        ? capitalizeWords(title.toLowerCase())
        : title;

    function capitalizeWords(str: string): string {
        return str.replace(/\b\w/g, match => match.toUpperCase());
    }

    const [data, setData] = useState<any>({});
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const drawerWidth = props.width || '600px';
    const referenceCount = useRef<number>(0);

    const EditFormlet = props.EditFormlet;
    const NewFormlet = props.NewFormlet;
    const gridRef: any = props.gridRef || useRef(null);

    // const actionOptions = {
    //     onClick: {
    //         topic: viewTopic
    //     },
    //     newRecord: {
    //         topic: newTopic
    //     }
    // };

    useEffect(() => {
        var viewPageHandle = topic.subscribe(viewTopic, (_topicName, data) => {
            setData(data);
            setDrawerOpen(true);
        });

        var refreshHandle = topic.subscribe(refreshTopic, (_topicName) => {
            console.log('refresh called', gridRef.current)
            if (gridRef.current)
                gridRef.current.refresh();
        });

        var newPageHandle = topic.subscribe(newTopic, (_topicName, data) => {
            setData(data);
            setDrawerOpen(true);
        });
        return () => {
            topic.unsubscribe(viewPageHandle);
            topic.unsubscribe(newPageHandle);
            topic.unsubscribe(refreshHandle);
        }

    }, [data]);


    const closeDrawer = (refreshGrid: boolean, open: boolean = false, data?: any) => {
        setDrawerOpen(open);
        referenceCount.current += 1;
        setData(data);
        if (refreshGrid) {
            gridRef.current.refresh();
        }
    }

    const handleClose = () => {
        closeDrawer(false);
    }

    return (<>
        <div className='grid-renderer-container'>
            {/* <div className="grid-renderer-header">{props?.title}</div> */}
            <div className="palmyra-grid-container summary-drawer-grid">
                <PalmyraGrid title={title} columns={props.fields} endPoint={props.options.endPoint}                
                    ref={gridRef} customizer={props.customizer} DataGridControls={DataGridDefaultControls} />
            </div>
        </div>
        <Drawer anchor="right" PaperProps={{ sx: { width: drawerWidth } }}
            open={drawerOpen} onClose={() => closeDrawer(false)}>
            {drawerOpen ?
                (data?.id ?
                    <EditForm onSave={(refresh = true, drawerOpen = false, data?: any) => closeDrawer(refresh, drawerOpen, data)} id={data.id} onClose={handleClose}
                        options={props.options} pageName={props.pageName} FORMLET={EditFormlet} storeFactory={storeFactory}
                        title={"Edit " + formattedTitle} key={(referenceCount.current + 5) + ''}>

                    </EditForm> :
                    <NewForm onSave={(refresh = true, drawerOpen = false, data?: any) => closeDrawer(refresh, drawerOpen, data)} onClose={handleClose}
                        options={props.options} pageName={props.pageName} FORMLET={NewFormlet} storeFactory={storeFactory}
                        title={"New " + formattedTitle} errorText={props.errorText} key={(referenceCount.current + 2) + ''} >
                    </NewForm>)
                : <div>props?.title</div>}
        </Drawer>
    </>
    );
}

export type { IFormletInput }
export { SummaryDrawerGrid };