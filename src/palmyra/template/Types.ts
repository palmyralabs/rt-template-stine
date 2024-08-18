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

interface IFormInput {
    onComplete: (data: any) => void,
    onSave: (data: any) => void,
    onFailure: (error: any) => void,
    onCancel: () => void
}

interface IFormEditInput extends IPageInput, IFormInput {
    options: IOptions,
    id: string,
    children?: any,
    onDataRefresh?: (data: any) => void,
    storeFactory: any
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

interface ISummaryGridInput extends IPageInput {
    options: IOptions & queryOptions,
    fields: ColumnDefinition[],
    pagination?: number[],
    exportOptions?: IExportOptions,
    densityOptions?: any,
    storeFactory: StoreFactory<any>
    idKey?: string
}

export type { IPageInput, IFormEditInput, IFormNewInput, IFormViewInput, ISummaryGridInput, IFormInput, IOptions }