import { IEndPoint, IEndPointOptions, StoreFactory } from "@palmyralabs/palmyra-wire"
import { ColumnDefinition, IExportOptions } from "@palmyralabs/rt-forms-mui"


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

interface IFormEditInput extends IPageInput {
    options: IOptions,
    id: string,
    children?: any,
    onDataRefresh?: (data: any) => void,
    storeFactory: any
}


interface IFormNewInput extends IPageInput {
    options: IOptions,
    children?: any,
    id?: string,
    storeFactory: any,
    initialData?: {}
}

interface IFormViewInput extends IPageInput {
    options: IOptions,
    id: string,
    children: any,
    storeFactory: any
}

interface ISummaryGridInput extends IPageInput {
    options: IOptions & queryOptions,
    fields: ColumnDefinition[],
    pagination?: number[],
    exportOptions?: IExportOptions,
    densityOptions?: any,
    storeFactory: StoreFactory<any>
}

export type { IPageInput, IFormEditInput, IFormNewInput, IFormViewInput, ISummaryGridInput }