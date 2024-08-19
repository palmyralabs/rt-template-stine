import { FC } from 'react';
import { StoreFactory } from '@palmyralabs/palmyra-wire';
import { IOptions } from '../Types';
interface IDialogGridFormInput {
    options: IOptions;
    EditFormlet: FC;
    NewFormlet: FC;
    gridRef: any;
    title?: any;
    idKey?: string;
    storeFactory: StoreFactory<any>;
    dialogHeight?: string;
    dialogWidth?: string;
    dialogMinWidth?: string;
}
interface IDrawerForm {
    setData: (d: any) => void;
}
declare const SummaryDrawerForm: import('react').ForwardRefExoticComponent<IDialogGridFormInput & import('react').RefAttributes<IDrawerForm>>;
export { SummaryDrawerForm };
