import { ExportDataButton, FilterButton, IDataGridDefaultControlConfig, QuickSearch } from "@palmyralabs/rt-forms-mui";
import { SummaryGridPluginOptions } from "../Types";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const SummaryGridControls = (props: SummaryGridPluginOptions) => {
    const { getPluginOptions, ...o } = props;
    const pluginOptions: IDataGridDefaultControlConfig = getPluginOptions ? getPluginOptions() : {};

    return (<>
        {o.quickSearch && <QuickSearch width="200" queryRef={o.queryRef}
            columns={o.columns} {...pluginOptions.quickSearch} />}
        <FilterButton {...o} />
        <ExportDataButton exportOption={{ csv: 'CSV' }}
            visible={pluginOptions.export?.visible} disabled={pluginOptions.export?.disabled}
            queryRef={o.queryRef} {...pluginOptions.export} />
        <Button onClick={() => props.newRecord()} {...pluginOptions.add} className="py-action-button">
            <Add />
            Add</Button>
    </>);
}

export { SummaryGridControls }