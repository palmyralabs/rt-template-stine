import { IEndPoint, IEndPointOptions, StoreFactory } from "@palmyralabs/palmyra-wire"
import { ColumnDefinition, DataGridPluginOptions, GridCustomizer, IExportOptions } from "@palmyralabs/rt-forms-mui"


interface IPageInput {
    title?: string,
    pageName: string,
    errorText?: any
}

interface IOptions {
    endPoint: IEndPoint,
    endPointOptions?: IEndPointOptions
    idKey?: string
}

interface queryOptions {
    queryOptions?: {
        filter?: any
    },
}

interface IFormInput {
    onComplete: (data: any) => void,
    onSave: (data: any) => void,
    onFailure: (error: any) => void,
    onCancel: () => void
}

interface IFormEditInput extends IPageInput {
    options: IOptions,
    id: string,
    children?: any,
    onDataRefresh?: (data: any) => void,
    storeFactory?: StoreFactory<any>
}


interface IFormNewInput extends IPageInput, IFormInput {
    options: IOptions,
    children?: any,
    id?: string,
    storeFactory: any,
    initialData?: {}
}

interface IFormViewInput extends IPageInput, IFormInput {
    options: IOptions,
    id: string,
    children: any,
    storeFactory: any
}

interface IGridInput {
    customizer?: GridCustomizer,
    quickSearch?: string,
    options: IOptions & queryOptions,
    columns: ColumnDefinition[],
    pageSize?: number[],
    exportOptions?: IExportOptions,
    getPluginOptions?: () => any;
    DataGridControls?: (props: DataGridPluginOptions) => JSX.Element;
}

interface ISummaryGridInput extends IPageInput, IGridInput {
    densityOptions?: any,
    storeFactory: StoreFactory<any>
    idKey?: string
}

interface SummaryGridPluginOptions extends DataGridPluginOptions {
    newRecord: () => void
}

interface PopupGridPluginOptions extends DataGridPluginOptions {
    setFormData: (d: any) => void
}

export type {
    IPageInput, IFormEditInput, IFormNewInput, IFormViewInput,
    ISummaryGridInput, IFormInput, IOptions, SummaryGridPluginOptions, PopupGridPluginOptions
}